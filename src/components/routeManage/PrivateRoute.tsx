import React from 'react'
import { useUser } from '../Auth/UserContext';
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  //const {authenticated} = useUser()
  const authenticated = localStorage.getItem('autenticated') == 'true';

  return (
    authenticated ?  <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute