import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Clientes.css";



const Clientes = () => {
const navigate = useNavigate();

const handleDevolver = () => {
    navigate("/");
}

const handleAgregar = () => {
    navigate("/AgregarC")
}

const [prestamosList] = useState([]);


    return (
        <div>
          <div className="container containerCli">
            <div className="volver">
              <button className="btnV" onClick={handleDevolver}></button>
              <h1 className="titC">Lista Clientes</h1>
              <button className="btnA" onClick={handleAgregar}>Agregar Cliente</button> 
            </div>
            <table className="table table-bordered" style={{ borderColor: 'rgba(50, 205, 50, 1)' }}>

              <thead>
                <tr >
                  <th scope="col">Foto</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
              {prestamosList.length > 0 ? (
                  prestamosList.map((val) => (
                    <tr key={val.ID}>
                      <td>{val.Foto}</td>
                      <td>{val.Nombre}</td>
                      <td>{val.Apellidos}</td>
                      <td>{val.Correo}</td>
                      <td>{val.Estado}</td>
                    <td className="textvolver Btn_librop">  
                      <button 
                        className="Btn_historial"
                        type="button"
                onClick={() => handleDevolver(val.ID)}
                      >
                        ✔
                      </button>
                    </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No hay datos disponibles</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="bGuardar">
                    <button className="btnNuevoc">Perfil Cliente</button>
                </div>
          </div>
        </div>
      );



}
export default Clientes;