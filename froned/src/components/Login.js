//import React, { useEffect, useState } from "react";
import '../styles/Login.css';

const Login = () => {

    return (
      <div className="LoginC">
        <div className="cuadro1"> 
        <p className="img"></p>
            <form className="loginD">
                <input type="text" className="boton1"  placeholder="login" />
                <input type="password" i className="boton1"  placeholder="password" />
                <div className="botonIn">
                <input type="submit" className="boton2" value="Log In" />
                </div>
            </form>

        </div>
      </div>
    );
  };
  
  export default Login; 