import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <Router>
        <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductList />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App
