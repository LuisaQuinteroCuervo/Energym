import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Clientes.css";
import "../styles/HistorialP.css";



const HistorialP = () => {
const navigate = useNavigate();

const handleDevolver = () => {
    navigate("/perfil");
}




const [prestamosList] = useState([]);


    return (
        <div>
          <div className="container containerCli">
            <div className="volver">
              <button className="btnV" onClick={handleDevolver}></button>
              <h1 className="titH">Historial de Pago</h1>

            </div>
            <table className="table table-bordered" style={{ borderColor: 'rgba(50, 205, 50, 1)' }}>

              <thead>
                <tr >
                  <th scope="col">Dia Pago</th>
                  <th scope="col">Plan</th>
                  <th scope="col">Medio de Pago</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Dias Restantes</th>
                </tr>
              </thead>
              <tbody>
              {prestamosList.length > 0 ? (
                  prestamosList.map((val) => (
                    <tr key={val.ID}>
                      <td>{val}</td>
                      <td>{val}</td>
                      <td>{val}</td>
                      <td>{}</td>
                      <td>{val}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No hay datos disponibles</td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>
        </div>
      );







}
    export default HistorialP;