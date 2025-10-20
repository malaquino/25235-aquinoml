import {React, useState, useEffect} from "react";
import  { Row, Col }  from "react-bootstrap";
import ProductCard from './ProductCard';

export default function ProductList(){
    const [products, setProducts] = useState(null);

    useEffect(() => {
      fetch("https://dummyjson.com/products/")
        .then((res) => res.json())
        .then((data) => {
            //console.log(data.products);
            setProducts(data.products);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            //setLoading(false);
        });
    }, []);

    if (products === null){
        return <div>No se encontraron productos</div>;
    }
    else{
        const uniqueCategories = [...new Set(products.map(product => product.category))];
        console.log(uniqueCategories);
    }

    return(
        <Row>
            {products.map((product) => (
                <Col md={4}>
                    <ProductCard product={product}/>
                </Col>
            ))}
        </Row>
    );
}
