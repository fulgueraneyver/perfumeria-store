import {useEffect, useState} from "react";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc
} from "firebase/firestore";

import {db} from "../firebase";

function AdminPanel() {
    const emptyForm = {
        nombre: "",
        precio: "",
        categoria: "",
        descripcion: "",
        imagen: ""
    }
    const [form, setForm] = useState(emptyForm);

    const [preview, setPreview] = useState("");
    const [archivoImagen, setArchivoImagen] = useState(null);
    const [perfumes, setPerfumes] = useState([]);
    const [editandoId, setEditandoId] = useState(null);

    useEffect(() => {
        cargarPerfumes();
    }, []);

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setPreview(reader.result);

            setForm(prev => ({
                ...prev,
                imagen: reader.result
            }));
        };

        reader.readAsDataURL(file);
    };
    const cargarPerfumes = async () => {

        const snapshot = await getDocs(
            collection(db, "perfumes")
        );

        const lista = snapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }));

        setPerfumes(lista);
    };

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const limpiarFormulario = () => {

        setForm(emptyForm);
        setEditandoId(null);
    };

    const guardar = async () => {

        try {
            if (archivoImagen) {

                const fileName =
                    `${Date.now()}-${archivoImagen.name}`;

                const imageRef = ref(
                    storage,
                    `perfumes/${fileName}`
                );

                await uploadBytes(
                    imageRef,
                    archivoImagen
                );
                let imageUrl = form.imagen;

                imageUrl =
                    await getDownloadURL(imageRef);
            }
            if (
                !form.nombre ||
                !form.precio ||
                !form.categoria
            ) {
                alert("Complete los campos obligatorios");
                return;
            }

            if (editandoId) {

                await updateDoc(
                    doc(db, "perfumes", editandoId),
                    {
                        ...form,
                        precio: Number(form.precio)
                    }
                );

                alert("Perfume actualizado");

            } else {

                await addDoc(
                    collection(db, "perfumes"),
                    {
                        ...form,
                        precio: Number(form.precio)
                    }
                );

                alert("Perfume creado");
            }

            limpiarFormulario();
            cargarPerfumes();

        } catch (error) {

            console.error(error);

            alert("Error al guardar");
        }
    };

    const editar = (perfume) => {

        setEditandoId(perfume.id);

        setForm({
            nombre: perfume.nombre || "",
            precio: perfume.precio || "",
            categoria: perfume.categoria || "",
            descripcion: perfume.descripcion || "",
            imagen: perfume.imagen || ""
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const eliminar = async (id) => {

        const confirmar = window.confirm(
            "¿Desea eliminar este perfume?"
        );

        if (!confirmar) return;

        try {

            await deleteDoc(
                doc(db, "perfumes", id)
            );

            cargarPerfumes();

        } catch (error) {

            console.error(error);

            alert("Error al eliminar");
        }
    };

    return (
        <div className="container mt-4">

            <h2 className="mb-4">
                Administración de Perfumes
            </h2>

            <div className="card p-4 mb-4">

                <div className="mb-3">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precio"
                        value={form.precio}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Categoría</label>
                    <input
                        type="text"
                        className="form-control"
                        name="categoria"
                        value={form.categoria}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Imagen</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={handleImage}
                    />
                    {preview &&
                        (<img src={preview} alt="imagen seleccionada" style={{ width: 300, height: "auto" }} />)
                    }
                </div>

                <div className="mb-3">
                    <label>Descripción</label>
                    <textarea
                        className="form-control"
                        rows="4"
                        name="descripcion"
                        value={form.descripcion}
                        onChange={handleChange}
                    />
                </div>

                <div className="d-flex gap-2">

                    <button
                        className="btn btn-success"
                        onClick={guardar}
                    >
                        {editandoId ? "Actualizar" : "Crear"}
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={limpiarFormulario}
                    >
                        Limpiar
                    </button>

                </div>

            </div>

            <div className="card p-3">

                <h4>Catálogo Actual</h4>

                <table className="table table-triped">

                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Imagen</th>
                        <th width="180">Acciones</th>
                    </tr>
                    </thead>

                    <tbody>

                    {perfumes.map((perfume) => (

                        <tr key={perfume.id}>

                            <td>{perfume.nombre}</td>

                            <td>
                                Bs. {perfume.precio}
                            </td>

                            <td>{perfume.categoria}</td>
                            <td><img src={perfume.imagen} alt="imagen seleccionada" style={{ width: 50, height: "auto" }} /></td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editar(perfume)}
                                >
                                    Editar
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => eliminar(perfume.id)}
                                >
                                    Eliminar
                                </button>

                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default AdminPanel;