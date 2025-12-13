import {React, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { getProduct } from '../utils/GetData';

export default function ProductDetail(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getAsyncProduct() {
            try{
                const datos = await getProduct(id);
                setProduct(datos);
            }
            catch(error){
                console.error('Error cargando el producto:', error);
            }
          }
          getAsyncProduct();
    }, []);

    if (product === null){
        return <div>No se encontro el producto</div>;
    }

    return(
        <div>
            <Card>
                <Card.Body>
                    <Card.Img src={product.image}></Card.Img>
                    <Card.Title style={{ color: "green" }}>
                        {product.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        $ {product.price}
                    </Card.Subtitle>
                    <Card.Text>
                        <p>{product.description}</p>
                        <p>Peso: {product.weight}</p>
                        <div>Dimensiones:
                            <p>altura: {product.height}</p>
                            <p>ancho: {product.width}</p>
                            <p>profundidad: {product.depth}</p>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}