import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export default function Footer() {

    const footerStyle = {
        // position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      };

    return (
        <footer className="bg-dark text-white text-center py-3 mt-5 mt-auto" style={footerStyle}>
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