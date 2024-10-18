import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Clientes.css";
import { getClientes } from "../actions/energymActions";

const Clientes = () => {
  const navigate = useNavigate();
  const [clientesList, setClientesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const itemsPage = 10;

  const startIndex = (page - 1) * itemsPage;
  const endIndex = startIndex + itemsPage;
  const pageClientes = clientesList.slice(startIndex, endIndex);

  const handleCambiar = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (endIndex < clientesList.length) setPage(page + 1);
  };

  const handleDevolver = () => {
    navigate("/");
  };

  const handleAgregar = () => {
    navigate("/AgregarC");
  };

  const handlePerfil = (id) => {
    console.log(id);
    navigate(`/Perfil/${id}`);
  };

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await getClientes();

        const sortedData = data.sort(
          (a,b) => new Date(b.fecha_registro) - new Date(a.fecha_registro)
        );

        setClientesList(sortedData); 
        setLoading(false);
      } catch (error) {
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
          <button className="btnA" onClick={handleAgregar}>
            Agregar Cliente
          </button>
        </div>
        <table 
        className="table table-bordered table-hover"
          style={{ "--bs-table-hover-bg": "#c7f8a2",  borderColor: "rgba(50, 205, 50, 1)", cursor: "pointer"}}

        >
          <thead >
            <tr >
              <th scope="col">Foto</th>
              <th scope="col">Cedula</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Correo</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody  >
            {pageClientes.length > 0 ? (
              pageClientes.map((cliente) => (
                <tr key={cliente.id} 
                onClick={() => handlePerfil(cliente.cedula)}
              >
                  <td>
                    <img
                      src={cliente.foto}
                      alt={cliente.nombre}
                      width="50"
                      height="50"

                    />
                  </td>
                  <td  >{cliente.cedula}</td>
                  <td  >{cliente.nombre}</td>
                  <td>{cliente.apellido}</td>
                  <td  >{cliente.correo_electronico}</td>
                  <td  >{cliente.estado}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table> 

             {/* Controles de Paginación */}
        <div className="pagination">
          <button onClick={handleCambiar} disabled={page === 1}>
            Anterior
          </button>
          <span>
            Página {page} de {Math.ceil(clientesList.length / itemsPage)}
          </span>
          <button
            onClick={handleNext}
            disabled={endIndex >= clientesList.length}
          >
            Siguiente
          </button>
        </div>

      </div>
    </div>
  );
};
export default Clientes;
