import {Card, Modal} from "react-bootstrap";
import {useState} from "react";

function ProductCard({perfume}) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Card
                onClick={() => setShow(true)}
                style={{
                    cursor: "pointer",
                    transition: "0.3s"
                }}
            >
                <img
                    src={perfume.imagen}
                    alt={perfume.nombre}
                    style={{
                        width: "100%",
                        height: 250,
                        objectFit: "cover"
                    }}
                />

                <Card.Body>
                    <Card.Title>
                        {perfume.nombre}
                    </Card.Title>

                    <h5>
                        Bs. {perfume.precio}
                    </h5>

                    <p>
                        {perfume.descripcion}
                    </p>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {perfume.nombre}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img
                        src={perfume.imagen}
                        alt={perfume.nombre}
                        style={{
                            width: "100%",
                            borderRadius: "10px"
                        }}
                    />

                    <h3 className="mt-3">
                        Bs. {perfume.precio}
                    </h3>

                    <p>
                        Categoría: {perfume.descripcion}
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProductCard;