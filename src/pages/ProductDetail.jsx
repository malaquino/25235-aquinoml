import {React, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { getProduct } from '../utils/GetData';
import { ClipLoader } from 'react-spinners';

export default function ProductDetail(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [imageError, setImageError] = useState(false);
    
    const handleImageError = () => {
        setImageError(true);
    };

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
        return (
            <div className="spinner">
                <ClipLoader size={50} color={"#123abc"} />
            </div>
        );
    }

    return(
        <div>
            <Card>
                <Card.Body>
                    {imageError ? (
                        <div>[ Sin Imagen ]</div>
                    ) : (
                        <Card.Img src={product.image}
                            alt={product.title}
                            onError={handleImageError}>
                        </Card.Img>
                    )}
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