import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>E-Commerce - Inicio</title>
            </Helmet>
            <div className="container">
                <h1>Inicio</h1>
                <h2>Bienvenidos al ECommerce!</h2>
            </div>
        </>
    );
}