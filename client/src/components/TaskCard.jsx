import React from 'react'

// Importar el context de tareas
import { useTasks } from "../context/TasksProvider";

// El componente recibe un elemento del arreglo de tareas
// y muestra todas las propiedades del mismo
export default function TaskCard({ task }) {

    // Extraigo del context la funcion para eliminar una tarea
    const {deleteTask} = useTasks();

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done == 1 ? "✅" : "❌"}</span>
            <span>{task.createAt}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            <button>Editar</button>
        </div>
  )
}
