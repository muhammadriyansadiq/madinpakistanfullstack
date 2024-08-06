import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function ProtectedAuthRoute() {
    const {user} = useAuth() 
    if(user){
        return <Navigate to={'/'} />
    }
    console.log("user auth is", )
    
    return <Outlet/>
}
