import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import Administration from './pages/Administration';
import Login from './pages/Login';


function App() {

  return (
    <CartProvider>
      <Router>
        <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/admin" element={
            <ProtectedRoute><Administration /></ProtectedRoute>
          } />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App
