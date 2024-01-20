import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from "./pages/Login"
import Netflix from "./pages/Netflix"
import Signup from "./pages/Signup"
import Player from './pages/Player';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/" element={<Signup/>}/>
        <Route exact path="/abc12098" element={<Netflix/>}/>
        <Route exact path="/movies" element={<Movies/>}/>
        <Route exact path="/player" element={<Player/>}/>
        <Route exact path="/tv" element={<TvShows/>}/>
        </Routes>
        </BrowserRouter>
   
  );
}
