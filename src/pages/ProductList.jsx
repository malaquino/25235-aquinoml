import {React, useState, useEffect} from "react";
import  {Container, Row, Col, Form, Button }  from "react-bootstrap";
import ProductCard from '../components/ProductCard';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from 'react-spinners';
import { Helmet } from "react-helmet";

export default function ProductList(){
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [textToSearch, setTextToSearch] = useState('');

    useEffect(() => {
      fetch("https://6924c11e82b59600d7213ee1.mockapi.io/apitest/v1/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setFilteredProducts(data);
        })
        .catch((error) => {
            console.error('Error al obtener los productos:', error);
        });
    }, []);

    const handleFilter = () => {
        let filtered = products;
    
        console.log('textToSearch: ' + textToSearch);
        if (textToSearch !== '') {
          filtered = filtered.filter((p) => p.title.toLowerCase().includes(textToSearch.toLowerCase()) || p.description.toLowerCase().includes(textToSearch.toLowerCase()));
        }
    
        setFilteredProducts(filtered);
    };
    
    const handleClear = () => {
        setTextToSearch('');
        setFilteredProducts(products);
    };

    if (filteredProducts === null){
        return (
            <>
                <Helmet>
                    <title>E-Commerce - Productos Disponibles</title>
                </Helmet>
                <div className="spinner">
                    <ClipLoader size={50} color={"#123abc"} />
                </div>
            </>
        );
    }

    return(
        
        <Container>
            <ToastContainer />
            <Helmet>
                <title>E-Commerce - Productos Disponibles</title>
            </Helmet>

            <Form onSubmit={(e) => {
                    e.preventDefault();
                    handleFilter();
                }}>
                <Row>
                    <Col>
                        <Form.Control 
                            type="text" 
                            value={textToSearch}
                            onChange={(e) => setTextToSearch(e.target.value)}
                            placeholder="texto a buscar"
                            >
                        </Form.Control>
                    </Col>
                    <Col md="auto">
                        <Button variant="primary" onClick={handleFilter}>
                        Buscar
                        </Button>
                    </Col>
                    <Col md="auto">
                        <Button variant="secondary" onClick={handleClear}>
                        Limpiar
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Row><Col><br/></Col></Row>
            <Row>
                {filteredProducts.map((product) => (
                    <Col md={4}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
