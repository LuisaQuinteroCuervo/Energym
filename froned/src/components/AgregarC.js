import "../styles/AgregarC.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCliente } from "../actions/energymActions";


const AgregarC = () => {

const navigate = useNavigate();


const obtenerFechaActual = () => {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
  };

const [formData, setFormData] = useState({

    cedula: "",
    nombre: "",
    apellido: "",
    correo_electronico: "",
    numero_telefono: "",
    edad: "",
    fecha_nacimiento: "",
    foto: "url",
    fecha_registro: obtenerFechaActual(),
    estado: "Activo",
    
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
