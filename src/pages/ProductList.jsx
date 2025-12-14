import {React, useState, useEffect} from "react";
import  {Container, Row, Col }  from "react-bootstrap";
import ProductCard from '../components/ProductCard';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from 'react-spinners';

export default function ProductList(){
    const [products, setProducts] = useState(null);

    useEffect(() => {
      fetch("https://6924c11e82b59600d7213ee1.mockapi.io/apitest/v1/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        })
        .catch((error) => {
            console.error('Error al obtener los productos:', error);
        });
    }, []);

    if (products === null){
        return (
            <div className="spinner">
                <ClipLoader size={50} color={"#123abc"} />
            </div>
        );
    }

    return(
        
        <Container>
            <ToastContainer />
            <Row>
                {products.map((product) => (
                    <Col md={4}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
