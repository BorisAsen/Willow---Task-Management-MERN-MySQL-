// Funciones para el CRUD de tareas

// Importar la conexion a la db
import { pool } from "../db.js"

// Funcion para obtener todas las tareas de la db
export const getTasks = async (req, res) => {
    //res.send('Obteniendo tareas')
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY createAt ASC");
    // Devuelve un arreglo con todas las tareas
    console.log(result);
    res.json(result);
}

export const getTask = async (req, res) => {
    //res.send('Obteniendo una tarea')
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
    // Devuelve un arreglo de una sola tarea que coincide con el ID solicitado
    console.log(result);
    // Controlar que se devuelva un resultado de error si no existe el id solicitado
    if (result.length == 0) {
        return res.status(404).json({message: "Task not found"});
    };
    // Como se esta buscando por id, el resultado sera siempre unico,
    // Por lo que indico que el resultado sera el primer elemento del arreglo
    res.json(result[0]);
}

// Funcion para crear una tarea
export const createTask = async (req, res) => {
    //res.send('Creando tareas');
    const {title, description} = req.body;
    const [result] = await pool.query(
        "INSERT INTO tasks(title, description) VALUES (?, ?)",
        [title, description]
    );
    console.log(result);
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