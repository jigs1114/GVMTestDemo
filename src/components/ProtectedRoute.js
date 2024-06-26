import React from 'react'
import {Navigate} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = localStorage.getItem('loginUser')
    console.log(user);
    if(user === null) {
        return <Navigate to="/" replace />
    }
 return children

};

export default ProtectedRoute;