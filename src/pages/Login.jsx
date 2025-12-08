import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, Form, Button } from 'react-bootstrap';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === 'admin' && pass === '1234') {
      localStorage.setItem('auth', 'true');
      navigate('/crud');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2>Iniciar sesión</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control type="text" value={user} onChange={e => setUser(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" value={pass} onChange={e => setPass(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>Entrar</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
