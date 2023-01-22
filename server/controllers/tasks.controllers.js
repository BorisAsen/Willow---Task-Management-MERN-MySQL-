// Funciones para el CRUD de tareas

// Importar la conexion a la db
import { pool } from "../db.js"

export const getTasks = (req, res) => {
    res.send('Obteniendo tareas')
}

export const getTask = (req, res) => {
    res.send('Obteniendo una tarea')
}

// Funcion para crear una tarea
export const createTask = async (req, res) => {
    const {title, description} = req.body;
    const [result] = await pool.query(
        "INSERT INTO tasks(title, description) VALUES (?, ?)",
        [title, description]
    );
    console.log(result);
    //res.send('Creando tareas');
    res.json({
        id: result.insertId,
        title,
        description,
    }); 
}

export const updateTask = (req, res) => {
    res.send('Actualizando una tarea')
}

export const deleteTask = (req, res) => {
    res.send('Eliminando una tarea')
}