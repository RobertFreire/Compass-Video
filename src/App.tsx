import './App.css'
import React from 'react'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Callback from './Components/auth/Callback';
import { UserProvider } from './Components/auth/UserContext';

function App() {


  return (
    <>
        <Router>
          <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/callback" element={<Callback />} />
          </Routes>
          </UserProvider>
        </Router>
    </>
  )
}

export default App
