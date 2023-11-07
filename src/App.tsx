import "./App.css";
/* import React from 'react'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/routeManage/PrivateRoute';
import Home from './components/Home/Home';
import { UserProvider } from './Components/Auth/UserContext';
import Callback from './components/Auth/Callback';
import Movies from './pages/Movies/Movies';
import Tv from './pages/Tv/Tv'; */
import SeriesPage from "./components/EpisodeList/SeriesPage";
function App() {
  return (
    <>
      {/*         <Router>
          <UserProvider>
          <Routes>
          <Route element={<PrivateRoute />}>
                <Route element={<Home/>} path="/home" />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/tv" element={<Tv/>}/>
          </Routes>
          </UserProvider>
        </Router> */}
        <SeriesPage seriesId={84958} seasonNumber={1}/>
      
    </>
  );
}

export default App;
