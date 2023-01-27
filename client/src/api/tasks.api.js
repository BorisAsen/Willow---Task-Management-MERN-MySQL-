// Importo axios
import axios from "axios";

// Funcion para obtener tareas
export const getTasksRequest = async () => 
    await axios.get("http://localhost:4000/tasks");


// Recibe un objeto tipo task y lo envia al backend mediante axios
export const createTaskRequest = async (task) => 
    await axios.post("http://localhost:4000/tasks", task);
