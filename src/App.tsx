import './App.css'
import React from 'react'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider, useUser } from './Components/auth/UserContext';
import PrivateRoute from './components/routeManage/PrivateRoute';
import Callback from './components/auth/Callback';
import Home from './components/Home/Home';

function App() {


  return (
    <>
        <Router>
          <UserProvider>
          <Routes>
          <Route element={<PrivateRoute />}>
                <Route element={<Home/>} path="/home" />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Callback />} />
          </Routes>
          </UserProvider>
        </Router>
    </>
  )
}

export default App
