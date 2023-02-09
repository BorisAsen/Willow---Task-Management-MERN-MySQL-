// Importo axios
import axios from "axios";

// Funcion para enviar la peticion get que trae todas las tareas
export const getTasksRequest = async () => 
    await axios.get("http://localhost:4000/tasks");

// Funcion para traer una unica tarea mediante el id
export const getTaskRequest = async (id) =>
    await axios.get(`http://localhost:4000/tasks/${id}`);

// Funcion para crear una tarea, recibe un objeto tipo task y lo guarda
export const createTaskRequest = async (task) => 
    await axios.post("http://localhost:4000/tasks", task);

// Funcion para enviar una peticion delete mediante el id de la tarea a borrar
export const deleteTaskRequest = async (id) =>
    await axios.delete(`http://localhost:4000/tasks/${id}`);

// Funcion para modificar una tarea, recibe su id y los nuevos valores
export const updateTaskRequest = async (id, newFields) => 
    await axios.put(`http://localhost:4000/tasks/${id}`, newFields);

// Funcion para cambiar el estado (done) de una tarea segun el id de la misma
export const toggleTaskDoneRequest = async (id, done) =>
    await axios.put(`http://localhost:4000/tasks/${id}`, {done,});
