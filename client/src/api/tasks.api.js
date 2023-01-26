// Importo axios
import axios from "axios";

// Recibe un objeto tipo task y lo envia al backend mediante axios
export const createTaskRequest = async (task) => 
    await axios.post("http://localhost:4000/tasks", task);
