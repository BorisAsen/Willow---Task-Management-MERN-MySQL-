// Importo axios
import axios from "axios";

// Recibe un objeto tipo task y lo envia al backend mediante axios
export const createTaskRequest = async (task) => 
    await axios.post("http://localhost:4000/tasks", task);

// Funcion para enviar la peticion get que trae todas las tareas
export const getTasksRequest = async () => 
    await axios.get("http://localhost:4000/tasks");

// Funcion para enviar una peticion delete
export const deleteTaskRequest = async (id) =>
    await axios.delete(`http://localhost:4000/tasks/${id}`);