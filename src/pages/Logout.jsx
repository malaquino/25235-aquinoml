import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";
import { Helmet } from "react-helmet";

export default function Logout() {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem('auth');
      localStorage.removeItem('isAdmin');
      navigate('/');
    };

    useEffect(() => {
      handleLogout();
    }, []);
  
    return (
      <>
        <Helmet>
          <title>E-Commerce - Logout</title>
        </Helmet>
        Deslogueando Usuario...
      </>
    );
  }
  