import "../styles/AgregarC.css";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AgregarC = () => {

const navigate = useNavigate();

    const handleDevolver = () => {
        navigate("/clientes");
    }
    

return(
    <div>
        <div className="container containerAdd">
            <div className="volver">
                <button className="btnV" onClick={handleDevolver}></button>
                <h1 className="titC">Nuevo Cliente</h1>
            </div>
                <form className="container2">
                    <div className="row rowA">
                        <div className="col subirF">
                            <input
                            type="file"
                            className="FotoS"
                            accept="image/*"
                        //    onChange={(e) => handleImageS(e)}
                            >
                            </input>
                    </div>

                    <div className="row rowA">
                        <div className="col">
                            <p>NOMBRES:</p>
                            <input className="datos2" 
                            type="text" 
                            placeholder="NOMBRES:"
                            ></input>
                            <br></br>

                            <p>EMAIL::</p>
                            <input className="datos2" 
                            type="email" 
                            placeholder="EMAIL:"
                            ></input>
                            <br></br>

                            <p>EDAD:</p>
                            <input className="datos2" 
                            type="number" 
                            placeholder="EDAD:"
                            ></input>
                            <br></br>

                            <p>FECHA DE INICIO:</p>
                            <input className="datos2" 
                            type="date" 
                            placeholder="FECHA DE INICIO:"
                            ></input>
                            <br></br>
                        </div>
                    </div>

                    <div className="row rowA">
                        <div className="col">
                            <p>APELLIDOS:</p>
                            <input className="datos2" 
                            type="text" 
                            placeholder="APELLIDOS:"
                            ></input>
                            <br></br>

                            <p>TELEFONO:</p>
                            <input className="datos2" 
                            type="number" 
                            placeholder="TELEFONO:"
                            ></input>
                            <br></br>

                            <p>FECHA NACIMIENTO:</p>
                            <input className="datos2" 
                            type="date" 
                            placeholder="FECHA NACIMIENTO:"
                            ></input>
                            <br></br>

                            <p>SELECCIONE SU PLAN:</p>
                            <select className="datos2" required>
                            <option value=""></option>
                            <option value="opcion1">MENSUAL</option>
                            <option value="opcion2">SEMESTRAL</option>
                            <option value="opcion3">ANUAL</option>
                            </select>

                        </div>
                    </div>
                    </div>
                
                </form>
                <div className="bGuardar">
                    <button className="btnNuevoc">Guardar Cliente</button>
                </div>
        </div>
    </div>
)

}
export default AgregarC;
