import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ProductSection({ titulo, productos }) {
    return (
        <Container className="mt-5">
            <h3>{titulo}</h3>

            <Row>
                {productos.map((producto) => (
                    <Col md={3} key={producto.id} className="mb-4">
                        <ProductCard perfume={producto} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductSection;