import axios from "axios";



const API_URL = 'http://localhost:8000';

export const getClientes = async () => {
try{
    const response = await axios.get(`${API_URL}/api/clientes/`);
    return response.data;
    }    catch(error){
        console.error("Error al recuperar las peliculas: ", error)
        throw error;
    }

};

export const getClientesById = async (id) => {
    try{
        const response = await axios.get(`http://localhost:8000/api/clientes/${id}`);
        return response.data;
    }catch(error){
        console.error(`error al recuperar al cliente  ${id}:`, error)
        throw error;
    }
};

//crear al cliente nuevito
export const createCliente = async (clientes) => {
    try{
        const formData = new FormData();
        formData.append('cedula', clientes.cedula);
        formData.append('nombre', clientes.nombre);
        formData.append('apellido', clientes.apellido);
        formData.append('correo_electronico', clientes.correo_electronico);
        formData.append('numero_telefono', clientes.numero_telefono);
        formData.append('edad', clientes.edad);
        formData.append('fecha_nacimiento', clientes.fecha_nacimiento);
        formData.append('foto', clientes.foto);
        formData.append('fecha_registro', clientes.fecha_registro);
        formData.append('estado', clientes.estado);

        const response = await axios.post(`http://localhost:8000/api/clientes/`,formData);
        return response.data;
    }catch(error){
        console.error('error al crear un cliente: ', error)
        throw error;
    }
};

export const updateClientes = async (id,clientes) => {
    try{

        const formData = new FormData();
        formData.append('cedula', clientes.cedula);
        formData.append('nombre', clientes.nombre);
        formData.append('apellido', clientes.apellido);
        formData.append('correo_electronico', clientes.correo_electronico);
        formData.append('numero_telefono', clientes.numero_telefono);
        formData.append('edad', clientes.edad);
        formData.append('fecha_nacimiento', clientes.fecha_nacimiento);
        formData.append('foto', clientes.foto);
        formData.append('fecha_registro', clientes.fecha_registro);
        formData.append('id_plan_pago', clientes.id_plan_pago);


        const response = await axios.put(`${API_URL}/api/clientes/${id}/`,formData);
        return response.data;
    }catch(error){
        console.error(`Error al actualizar al cliente ${id}: `, error)
        throw error;
    }
}

export const getHistorialPago = async (cedula) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/clientes/${cedula}/historial/`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener el historial de pagos:", error);
      throw error;
    }
  };