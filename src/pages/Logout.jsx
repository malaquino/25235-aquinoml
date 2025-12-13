import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";

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
      <>Deslogueando Usuario...</>
    );
  }
  