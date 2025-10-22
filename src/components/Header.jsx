import React from 'react';
import {Container} from 'react-bootstrap';

export default function Header(){
    return(
        <header className="bg-primary text-white py-4 shadow-sm">
            <Container>
                <h1>Bienvenidos a ECommerce</h1>
            </Container>
        </header>
    );
}