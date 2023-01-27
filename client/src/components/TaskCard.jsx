import React from 'react'

//Importar funcion API para eliminar una tarea
import { deleteTaskRequest } from "../api/tasks.api";

// El componente recibe un elemento del arreglo de tareas
// y muestra todas las propiedades del mismo
export default function TaskCard({ task }) {

    // Funcion que ejecuta deleteTaskRequest mediante el id que recibe
    // del evento onClick del boton Eliminar
    const handleDelete = async (id) => {
        try {
            const response = await deleteTaskRequest(id);
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done == 1 ? "✅" : "❌"}</span>
            <span>{task.createAt}</span>
            <button onClick={() => handleDelete(task.id)}>Eliminar</button>
            <button>Editar</button>
        </div>
  )
}
