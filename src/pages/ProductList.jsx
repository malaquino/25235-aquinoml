import {React, useState, useEffect} from "react";
import  { Row, Col }  from "react-bootstrap";
import ProductCard from '../components/ProductCard';

export default function ProductList(){
    const [products, setProducts] = useState(null);

    useEffect(() => {
      fetch("https://dummyjson.com/products/")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.products);
        })
        .catch((error) => {
            console.error('Error al obtener los productos:', error);
        });
    }, []);

    if (products === null){
        return <div>No se encontraron productos</div>;
    }

    return(
        <Row>
            {products.map((product) => (
                <Col md={4}>
                    <ProductCard product={product} />
                </Col>
            ))}
        </Row>
    );
}
