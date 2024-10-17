
import './App.css';
import React from 'react';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Clientes from './components/Clientes';
import AgregarC from './components/AgregarC';
import Perfil from './components/Perfil';
import EditarC from './components/EditarC';
import HistorialP from './components/HistorialP';
import Resumen from "./components/Resumen";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Clientes" element={<Clientes/>} />
          <Route path="/Resumen" element={<Resumen/>} />
          <Route path="/AgregarC" element={<AgregarC/>} />
          <Route path="/Perfil" element={<Perfil/>}/>
          <Route path="/EditarC" element={<EditarC/>}/>
          <Route path="/HistorialP" element={<HistorialP/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
