import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Clientes.css";
import { getClientes } from "../actions/energymActions";



const Clientes = () => {
const navigate = useNavigate();
const [clientesList, setClientesList] = useState([]);
const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

const handleDevolver = () => {
    navigate("/");
}

const handleAgregar = () => {
    navigate("/AgregarC")
}

{/*const handlePerfil = () => {
  navigate("/Perfil${id}")
}*/}

useEffect(() => {
  const fetchClientes = async () => {
    try{
      const data = await getClientes();
      setClientesList(data);
      setLoading(false);
    }catch(error){
      setError("error al cargar los clientes");
      setLoading(false);
    }
  };
  fetchClientes();
}, []);

if (loading) {
  return <div>Cargando...</div>; 
}

if (error) {
  return <div>{error}</div>; 
}




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
                  <th scope="col">Cedula</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
              {clientesList.length > 0 ? (
                  clientesList.map((clientes) => (
                    <tr key={clientes.id}>
                      <td>
                        <img 
                        src={clientes.foto}
                        alt="foto cliente"
                        width="50"
                        height="50" />
                      </td>
                      <td>{clientes.cedula}</td>
                      <td>{clientes.nombre}</td>
                      <td>{clientes.apellido}</td>
                      <td>{clientes.correo_electronico}</td>
                      {/*<td>{clientes.estado ? "Activo": "Inactivo"}</td>
                    <td>  
                      <button 
                            onClick={() => handlePerfil()}>
                              ver perfil
                      </button>
                    </td>*/}
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
export default Clientes;