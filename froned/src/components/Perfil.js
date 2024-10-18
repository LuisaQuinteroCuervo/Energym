import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClientesById } from "../actions/energymActions"; 
import "../styles/AgregarC.css";
import "../styles/Perfil.css";

const Perfil = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cliente, setCliente] = useState({});

    const handleDevolverC = () => {
        navigate("/clientes");
    }

    const handleEditar = () => {
        navigate(`/EditarC/${id}`);
    }

    const handleHistorial = () => {
        navigate(`/clientes/${cliente.cedula}/historial`); // Navegar usando la cédula del cliente
    };

    useEffect(() => {
        const fetchClientes = async () => {

            try {
                const data = await getClientesById(id); 
                console.log(data);
                setCliente(data);
                setLoading(false);
            } catch (error) {
                setError("Error al cargar al cliente");
                setLoading(false);
            }
        };

        fetchClientes();
    }, [id]);

    if (loading) return <div>Cargando...</div>; 

    
    if (error) return <div>{error}</div>; 
    


    return (
        <div>
            <div className="container containerAdd">
                <div className="volver">
                    <button className="btnV" onClick={handleDevolverC}></button>
                    <h1 className="titC">Perfil Cliente</h1>
                    <button className="btnEdit" onClick={handleEditar}>Editar Cliente</button>
                </div>
                <form className="container2">
                    <div className="row rowA">
                        <div className="col subirF">
                            <img src={cliente.foto} alt="Foto del cliente" className="FotoS" /> {/* Muestra la foto del cliente */}
                        </div>
                        <div className="row rowA">
                            <div className="col">
                                <p>DOCUMENTO:</p>
                                <input className="datos2" 
                                    type="number" 
                                    name="cedula"
                                    value={cliente.cedula}
                                    readOnly 
                                    placeholder="NUMERO DOCUMENTO:"
                                />
                                <br />
                                <p>NOMBRES:</p>
                                <input className="datos2" 
                                    type="text" 
                                    value={cliente.nombre}
                                    readOnly
                                    placeholder="NOMBRES:"
                                />
                                <br />
                                <p>EMAIL:</p>
                                <input className="datos2" 
                                    type="email" 
                                    value={cliente.correo_electronico}
                                    readOnly
                                    placeholder="EMAIL:"
                                />
                                <br />
                                <p>TELEFONO:</p>
                                <input className="datos2" 
                                    type="number" 
                                    value={cliente.numero_telefono}
                                    readOnly
                                    placeholder="TELEFONO:"
                                />
                                <br />
                                <p>FECHA DE INICIO:</p>
                                <input className="datos2" 
                                    type="date" 
                                    value={cliente.fecha_registro}
                                    readOnly
                                    placeholder="FECHA DE INICIO:"
                                />
                                <br />
                            </div>
                        </div>
                        <div className="row rowA">
                            <div className="col">
                                <p>EDAD:</p>
                                <input className="datos2" 
                                    type="number" 
                                    value={cliente.edad}
                                    readOnly
                                    placeholder="EDAD:"
                                />
                                <br />
                                <p>APELLIDOS:</p>
                                <input className="datos2" 
                                    type="text" 
                                    value={cliente.apellido}
                                    readOnly
                                    placeholder="APELLIDOS:"
                                />
                                <br />
                                <p>FECHA NACIMIENTO:</p>
                                <input className="datos2" 
                                    type="date" 
                                    value={cliente.fecha_nacimiento}
                                    readOnly
                                    placeholder="FECHA NACIMIENTO:"
                                />
                                <br />
                                {/*<p>PLAN ACTUAL:</p> // poner como formulario de seleccion
                                <select className="datos2" value={cliente.id_plan_pago} disabled placeholder="PLAN ACTUAL:">
                                    <option value="1">MENSUAL</option>
                                    <option value="2">SEMESTRAL</option>
                                    <option value="3">ANUAL</option>
                                </select> */}
                            </div>
                        </div>
                    </div>
                </form>
                <div className="volver">
                    <button className="btnNuevoc" onClick={handleHistorial}>Historial Pago</button>
                </div>
            </div>
        </div>
    );
}

export default Perfil;