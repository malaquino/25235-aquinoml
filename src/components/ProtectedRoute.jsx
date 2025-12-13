import { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({children})
{
    const auth=localStorage.getItem('auth')==='true';
    const location = useLocation();
    return auth ? children: <Navigate to="/login" state={{ from: location.pathname }} replace />  
}