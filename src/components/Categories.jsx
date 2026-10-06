const categorias = [
    "Inicio",
    /*"Arabes Hombre",
    "Arabes Mujer",
    "Diseñador Hombre",
    "Diseñador Mujer",
    "Perfumes Nicho"*/
];

function Categories() {
    return (
        <div className="categories">
            {categorias.map((cat) => (
                <button key={cat} className="category-btn">
                    {cat}
                </button>
            ))}
        </div>
    );
}

export default Categories;