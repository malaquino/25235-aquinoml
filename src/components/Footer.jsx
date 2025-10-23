import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5 mt-auto" >
            <Container>
                <Row>
                    <Col md={12}>
                        <p className="mb-1">Aquino ML 2025 - Derechos Reservados Version: 1.0.0.0</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}