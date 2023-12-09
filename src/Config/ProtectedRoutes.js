import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import UseAuth from '../custom/UseAuth';
const ProtectedRoutes = ({ Children }) => {
    const { currentUser } = UseAuth();
    return currentUser ? Children : <Navigate to={'/Login'} />
}

export default ProtectedRoutes