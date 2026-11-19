function Categories({
                        categoriaSeleccionada,
                        setCategoriaSeleccionada
                    }) {
    return (
        <div className="container my-4">

            <button
                className={`btn ${
                    categoriaSeleccionada === ""
                        ? "btn-dark"
                        : "btn-outline-dark"
                } me-2`}
                onClick={() => setCategoriaSeleccionada("")}
            >
                Todos
            </button>

            <button
                className={`btn ${
                    categoriaSeleccionada === "Perfumes"
                        ? "btn-dark"
                        : "btn-outline-dark"
                } me-2`}
                onClick={() => setCategoriaSeleccionada("Perfumes")}
            >
                Perfumes
            </button>

            <button
                className={`btn ${
                    categoriaSeleccionada === "Lentes"
                        ? "btn-dark"
                        : "btn-outline-dark"
                }`}
                onClick={() => setCategoriaSeleccionada("Lentes")}
            >
                Lentes
            </button>

        </div>
    );
}

export default Categories;