import React from 'react'
import { Navigate } from 'react-router-dom'
import UseAuth from '../custom/UseAuth';
import { toast } from 'react-toastify';
const ProtectedRoutes = ({ Children }) => {
    const { currentUser } = UseAuth();
    // toast.error("Login First")
    return currentUser ? Children : <Navigate to={'/Login'} />
    
}

export default ProtectedRoutes