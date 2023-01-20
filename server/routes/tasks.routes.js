// Importar el modulo enrutador de express
import { Router } from "express";
const router = Router()

//Importar las funciones del CRUD de tareas
import { 
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
 } from "../controllers/tasks.controllers.js";


// Aqui se construiran todas las rutas relacionadas con el CRUD

// Obtener tareas de la db para mostrarlas
router.get('/tasks', getTasks);

// Obtener una unica tarea correspondiente a un id
router.get('/tasks/:id', getTask);

// Crear tareas
router.post('/tasks', createTask);

// Modificar una tarea mediante un id
router.put('/tasks/:id', updateTask);

// Eliminar una tarea correspondiente a un id
router.delete('/tasks/:id', deleteTask);




export default router