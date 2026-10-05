import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const ingresar = () => {
        if (password === "Nuevo.2026") {
            localStorage.setItem("admin", "true");
            navigate("/admin");
        } else {
            alert("Contraseña incorrecta");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Acceso Administrador</h2>

            <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="btn btn-dark mt-3"
                onClick={ingresar}
            >
                Ingresar
            </button>
        </div>
    );
}

export default LoginAdmin;