import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Catalog from './pages/Catalog/Catalog';
import Movie from './pages/Movie/Movie';
import HomePage from './pages/Home';
function App() {

  return (

<>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalogo" element={<Catalog />} />
          <Route path="filme/:id" element={<Movie />} />
           <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
