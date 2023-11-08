
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const authenticated = localStorage.getItem('autenticated') == 'true';

  return (
    authenticated ?  <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute