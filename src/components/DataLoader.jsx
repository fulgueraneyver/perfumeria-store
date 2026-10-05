import { useState } from "react";

function DataLoader({ onDataLoaded }) {
    const [error, setError] = useState("");

    const handleFile = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                onDataLoaded(data);
            } catch {
                setError("Archivo JSON inválido");
            }
        };

        reader.readAsText(file);
    };

    return (
        <>
            <input
                type="file"
                accept=".json"
                onChange={handleFile}
            />

            {error && <p>{error}</p>}
        </>
    );
}

export default DataLoader;