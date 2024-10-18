import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClientesById, updateClientes } from "../actions/energymActions";
import "../styles/AgregarC.css";


const EditarC = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Obtenemos el id del cliente desde la URL
    const [cliente, setCliente] = useState({});
    const [foto, setFoto] = useState(null); // Estado para la foto seleccionada
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


const handleDevolver = () => {
    navigate("/clientes");
}

    useEffect(() => {
        const fetchClientes = async () => {
            try{
                const data = await getClientesById(id);
                setCliente(data);
                setLoading(false);
            }catch (erro){
                setError("error al cargar los clientes");
                setLoading(false);
            }
        };
        fetchClientes();
    }, [id]);

    const handleChange = (e) => { //para editar los el formulario
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };


    const handleImageChange = (e) => {
        setFoto(e.target.files[0]); // Guardar la foto seleccionada en el estado
    };

const handleBtnGuardar = async () => {
    try{
        const clienteActualizado = { ...cliente, foto };
        await updateClientes(id, clienteActualizado);
        alert("Cambios guarddos ");
        navigate("/clientes");
    }catch (error) {
        alert("Error al guardar los cmbois");
    }
};

    if (loading) return <div>Cargando............</div>;
    if (error) return <div>{error}</div>;


    return (
        <div>
        <div className="container containerAdd">
            <div className="volver">
                <button className="btnV" onClick={handleDevolver}></button>
                <h1 className="titC">Editar Perfil </h1>

            </div>
                <form className="container2">
                    <div className="row rowA">
                        <div className="col subirF">
                            <input
                            type="file"
                            className="FotoS"
                            accept="image/*"
                            onChange={handleImageChange}
                            >
                            </input>
                    </div>

                    <div className="row rowA">
                        <div className="col">
                        <p>DOCUMENTO:</p>
                            <input className="datos2" 
                            type="number" 
                            name="cedula"
                            value={cliente.cedula || ""}
                            readOnly
                            ></input>
                            <br></br>

                            <p>NOMBRES:</p>
                            <input className="datos2" 
                            type="text" 
                            name="nombre"
                            value={cliente.nombre || ""}
                            onChange={handleChange}
                            ></input>
                            <br></br>

                            <p>EMAIL::</p>
                            <input className="datos2" 
                            type="email" 
                            name="correo_electronico"
                            value={cliente.correo_electronico || ""}
                            onChange={handleChange}
                            ></input>
                            <br></br>

                            <p>TELEFONO:</p>
                            <input className="datos2" 
                            type="number" 
                            name="numero_telefono"
                            value={cliente.numero_telefono || ""}
                            onChange={handleChange}
                            ></input>
                            <br></br>

                            <p>FECHA DE INICIO:</p>
                            <input className="datos2" 
                            type="date" 
                            name="fecha_registro"
                            value={cliente.fecha_registro || ""}
                            onChange={handleChange}
                            ></input>
                            <br></br>
                        </div>
                    </div>

                    <div className="row rowA">
                        <div className="col">
                        <p>EDAD:</p>
                            <input className="datos2" 
                            type="number" 
                            name="edad"
                            value={cliente.edad || ""}
                            onChange={handleChange}
                            ></input>
                            <br></br>

                            <p>APELLIDOS:</p>
                            <input className="datos2" 
                            type="text" 
                            name="apellido"
                            value={cliente.apellido || ""}
                            onChange={handleChange}
                            ></input>
                            <br></br>

                            <p>FECHA NACIMIENTO:</p>
                            <input className="datos2" 
                            type="date" 
                            name="fecha_nacimiento"
                            value={cliente.fecha_nacimiento || ""}
                            onChange={handleChange}
                            ></input>
                            <br></br>

                            <p>PLAN ACTUAL:</p>
                            <select className="datos2" name="id_plan_pago" value={cliente.id_plan_pago || ""} onChange={handleChange}>
                            <option value="opcion1">MENSUAL</option>
                            <option value="opcion2">SEMESTRAL</option>
                            <option value="opcion3">ANUAL</option>
                            </select>
                            
                        </div>
                    </div>
                    </div>
                </form>
                <div className="volver">
                    <button className="btnNuevoc" onClick={handleBtnGuardar}>Guardar Cambios</button>
                </div>
        </div>
    </div>
    )
}
    export default EditarC;