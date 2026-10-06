import {Card, Button} from "react-bootstrap";

function ProductCard({perfume}) {
    {
        perfume.imagen
    }
    {
        return (
            <Card>
                <img src={perfume.imagen} alt="imagen seleccionada" style={{ width: "auto", height: 250 }} />

                <Card.Body>
                    <Card.Title>
                        {perfume.nombre}
                    </Card.Title>

                    <h5>
                        Bs. {perfume.precio}
                    </h5>

                    <p>
                        {perfume.categoria}
                    </p>

                    {/*<Button variant="dark">
                        Comprar
                    </Button>*/}
                </Card.Body>
            </Card>
        );
    }
}

export default ProductCard;

