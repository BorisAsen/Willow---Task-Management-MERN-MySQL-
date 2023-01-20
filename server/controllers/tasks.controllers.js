// Funciones para el CRUD de tareas

export const getTasks = (req, res) => {
    res.send('Obteniendo tareas')
}

export const getTask = (req, res) => {
    res.send('Obteniendo una tarea')
}

export const createTask = (req, res) => {
    res.send('Creando tareas')
}

export const updateTask = (req, res) => {
    res.send('Actualizando una tarea')
}

export const deleteTask = (req, res) => {
    res.send('Eliminando una tarea')
}