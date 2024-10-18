import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Clientes.css";
import "../styles/HistorialP.css";
import { getHistorialPago } from "../actions/energymActions";

const HistorialP = () => {
  const navigate = useNavigate();
  const { cedula } = useParams(); // Obtener la cédula desde la URL
  const [historialPagos, setHistorialPagos] = useState([]); // Cambiado a un nombre más descriptivo
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDevolver = () => {
    navigate("/clientes");
  };

  useEffect(() => {
    const fetchHistorialPago = async () => {
      try {
        const data = await getHistorialPago(cedula); // Llamada con la cédula correcta
        setHistorialPagos(data); // Guardar el historial de pagos en el estado
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar el historial de pago:", error);
        setError("Error al cargar el historial de pago");
        setLoading(false);
      }
    };
    fetchHistorialPago();
  }, [cedula]); // Asegurar que el efecto se ejecute cuando cambie la cédula

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="container containerCli">
        <div className="volver">
          <button className="btnV" onClick={handleDevolver}></button>
          <h1 className="titH">Historial de Pago</h1>
        </div>
        <table
          className="table table-bordered"
          style={{ borderColor: "rgba(50, 205, 50, 1)" }}
        >
          <thead>
            <tr>
              <th scope="col">Día Pago</th>
              <th scope="col">Plan</th>
              <th scope="col">Medio de Pago</th>
              <th scope="col">Valor</th>
              <th scope="col">Días Restantes</th>
            </tr>
          </thead>
          <tbody>
            {historialPagos.length > 0 ? (
              historialPagos.map((pago) => (
                <tr key={pago.id}>
                  <td>{pago.fecha_pago}</td>
                  <td>{pago.plan}</td>
                  <td>{pago.medio_pago}</td>
                  <td>{pago.valor}</td>
                  <td>{pago.dias_restantes}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistorialP;
