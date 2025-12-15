import {useState, useEffect, useRef} from "react";
import {Container, Button, Table, Modal, Form} from 'react-bootstrap';
import { Helmet } from "react-helmet";

const APIURL = 'https://6924c11e82b59600d7213ee1.mockapi.io/apitest/v1/products';

export default function ProductsCrud() {
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        weight: "",
        width: "",
        height: "",
        depth: "",
      });
    const [editId, setEditId] = useState(null);
    const inputRef = useRef(null);
    const isAdmin = localStorage.getItem('isAdmin')==='true';

    const getProducts = () => {
        fetch(APIURL)
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error("Error al obtener productos:", error));
    };

    const handleClose = () => {
        setShow(false);
        setForm({ title: "", description: "", price: "", stock: "", image: "", weight: "", width: "", height: "", depth:"" });
        setEditId(null);
    };

    const handleShow = (product) => {
        setShow(true);
        if (product) {
          setForm({
            ...product,
            price: Number(product.price),
            stock: Number(product.stock),
          });
          setEditId(product.id);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const productData = {
          ...form,
          price: Number(form.price),
          stock: Number(form.stock),
          weight: form.weight!=""?Number(form.weight):0,
          width: form.width!=""?Number(form.width):0,
          height: form.height!=""?Number(form.height):0,
          depth: form.depth!=""?Number(form.depth):0,
        };

        const method = editId ? "PUT" : "POST";
        const url = editId ? `${APIURL}/${editId}` : APIURL;
    
        fetch(url, {
          method: method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
        })
          .then((res) => {
            if (!res.ok) throw new Error("Error al guardar el producto");
            return res.json();
          })
          .then(() => {
            handleClose();
            getProducts();
          })
          .catch((error) => console.error("Error:", error));
    };

    const handleDelete = (id) => {
        if (!window.confirm("¿Seguro que quieres eliminar este producto?")) return;
    
        fetch(`${APIURL}/${id}`, { method: "DELETE" })
          .then((res) => {
            if (!res.ok) throw new Error("Error al eliminar el producto");
            getProducts();
          })
          .catch((error) => console.error("Error:", error));
    };

    const handleFocus = () => {
        if (inputRef.current) {
          inputRef.current.select();
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (!isAdmin) {
        return (
            <>
                <Helmet>
                    <title>E-Commerce - Administracion de Productos</title>
                </Helmet>  
                <div>
                    <h4>No tiene permiso para acceder a esta sección</h4>
                </div>
            </>
        );
    }

    return(
        <Container>
            <Helmet>
                <title>E-Commerce - Administracion de Productos</title>
            </Helmet>            
            <h2>Administración de Productos</h2>
            <Button className="mb-3" onClick={() => handleShow()}>
                Agregar Producto
            </Button>

            <Table reponsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Imagen</th>
                        <th>Peso</th>
                        <th>Altura</th>
                        <th>Ancho</th>
                        <th>Profundidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((prod) => (
                    <tr key={prod.id}>
                        <td>{prod.title}</td>
                        <td>{prod.description}</td>
                        <td>{prod.price}</td>
                        <td>{prod.stock}</td>
                        <td>{prod.image}</td>
                        <td>{prod.weight}</td>
                        <td>{prod.height}</td>
                        <td>{prod.width}</td>
                        <td>{prod.depth}</td>
                        <td>
                            <Button
                                size="sm"
                                variant="warning"
                                onClick={() => handleShow(prod)}
                                >
                                Editar
                            </Button>{" "}
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => handleDelete(prod.id)}
                                >
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>

            <Modal 
                show={show} 
                onHide={handleClose} 
                size="lg" 
                dialogClassName="modal-dialog-scrollable" 
                aria-labelledby="example-custom-modal-styling-title"
                fullscreen="sm-down" >
                <Modal.Header closeButton>
                    <Modal.Title>{editId ? "Editar" : "Agregar"} Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-2">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={form.description}
                                onChange={(e) =>
                                setForm({ ...form, description: e.target.value })
                                }
                                required
                                minLength={10}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.price}
                                onChange={(e) =>
                                setForm({ ...form, price: Number(e.target.value) })
                                }
                                onFocus={(e) => e.target.select()}
                                required
                                min="0.01"
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.stock}
                                onChange={(e) =>
                                setForm({ ...form, stock: Number(e.target.value) })
                                }
                                onFocus={(e) => e.target.select()}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Imagen (URL)</Form.Label>
                            <Form.Control
                                value={form.image}
                                onChange={(e) => setForm({ ...form, image: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Peso</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.weight}
                                onChange={(e) =>
                                setForm({ ...form, weight: Number(e.target.value) })
                                }
                                onFocus={(e) => e.target.select()}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Altura</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.height}
                                onChange={(e) =>
                                setForm({ ...form, height: Number(e.target.value) })
                                }
                                onFocus={(e) => e.target.select()}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Ancho</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.width}
                                onChange={(e) =>
                                setForm({ ...form, width: Number(e.target.value) })
                                }
                                onFocus={(e) => e.target.select()}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Profundidad</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.depth}
                                onChange={(e) =>
                                setForm({ ...form, depth: Number(e.target.value) })
                                }
                                onFocus={(e) => e.target.select()}
                            />
                        </Form.Group>

                        <Button type="submit" className="mt-2">
                            Guardar
                        </Button>
                        <Button type="cancel" className="mt-2">
                            Cancelar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}