
import "../styles/AgregarC.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCliente } from "../actions/energymActions";


const AgregarC = () => {

const navigate = useNavigate();

const [formData, setFormData] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    correo_electronico:"",
    numero_telefono:"",
    edad: "",
    fecha_nacimiento:"",
    foto:null,
    plan_actual:"",
    fecha_registro:"",
    id_plan_pago:"",
    estado:"Activo"
});

const handleInput = (e) => {//esto es para el cambio de los ingresos de datos
    const {name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleImageS = (e) => {
    setFormData({
        ...formData,
        foto: e.target.files[0]
    })
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await createCliente(formData);
        alert("Cliente Creado con exitoooooooooooo");
        navigate("/clientes")
    }catch(error){
        console.error("Error, no se puedo crear al cliente", error);
        alert("error al crear al cliente");
    }
}

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
                <form className="container2" >
                    <div className="row rowA">
                        <div className="col subirF">
                            <input
                            type="file"
                            className="FotoS"
                            accept="image/*"
                            onChange={handleImageS}
                            >
                            </input>
                    </div>

                    <div className="row rowA">
                        <div className="col">
                        <p>DOCUMENTO:</p>
                            <input className="datos2" 
                            type="number" 
                            name="cedula"
                            placeholder="NUMERO DOCUMENTO:"
                            value={formData.cedula}
                            onChange={handleInput}
                            ></input>
                            <br></br>

                            <p>NOMBRES:</p>
                            <input className="datos2" 
                            type="text" 
                            name="nombre"
                            placeholder="NOMBRES:"
                            value={formData.nombre}
                            onChange={handleInput}
                            ></input>
                            <br></br>

                            <p>EMAIL:</p>
                            <input className="datos2" 
                            type="email" 
                            name="correo_electronico"
                            placeholder="EMAIL:"
                            value={formData.correo_electronico}
                            onChange={handleInput}
                            ></input>
                            <br></br>

                            <p>TELEFONO:</p>
                            <input className="datos2" 
                            type="number" 
                            name="numero_telefono"
                            placeholder="TELEFONO:"
                            value={formData.numero_telefono}
                            onChange={handleInput}
                            ></input>
                            <br></br>

                            <p>FECHA DE INICIO:</p>
                            <input className="datos2" 
                            type="date" 
                            name="fecha_registro"
                            placeholder="FECHA INICIO:"
                            value={formData.fecha_registro}
                            onChange={handleInput}
                            ></input>
                            <br></br>
                        </div>
                    </div>

                    <div className="row rowA">
                        <div className="col">
                        <p>EDAD:</p>
                            <input className="datos2" 
                            type="number" 
                            placeholder="EDAD:"
                            name="edad"
                            value={formData.edad}
                            onChange={handleInput}
                            ></input>
                            <br></br>

                            <p>APELLIDOS:</p>
                            <input className="datos2" 
                            type="text" 
                            name="apellido"
                            placeholder="APELLIDOS:"
                            value={formData.apellido}
                            onChange={handleInput}
                            ></input>
                            <br></br>

                            <p>FECHA NACIMIENTO:</p>
                            <input className="datos2" 
                            type="date" 
                            name="fecha_nacimiento"
                            placeholder="FECHA NACIMIENTO:"
                            value={formData.fecha_nacimiento}
                            onChange={handleInput}
                            ></input>
                            <br></br>

                            <p>PLAN ACTUAL:</p>
                            <select className="datos2" 
                            name="id_plan_pago"
                            value={formData.id_plan_pago}
                            onChange={handleInput}
                            required>
                            <option value=""></option>
                            <option value="1">MENSUAL</option>
                            <option value="2">SEMESTRAL</option>
                            <option value="3">ANUAL</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                </form>
                <div className="bGuardar">
                    <button className="btnNuevoc" onClick={handleSubmit}>Guardar Cliente</button>
                </div>
        </div>
    </div>
)

}
export default AgregarC;
