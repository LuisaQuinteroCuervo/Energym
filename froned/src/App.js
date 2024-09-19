
import './App.css';
import React from 'react';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
