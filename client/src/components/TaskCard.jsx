import React from 'react'

// Importar el context de tareas
import { useTasks } from "../context/TasksProvider";

//Importar el hook para direccionar al formulario de tareas cuando se presione el boton editar
import { useNavigate } from "react-router-dom";

// El componente recibe un elemento del arreglo de tareas
// y muestra todas las propiedades del mismo
export default function TaskCard({ task }) {

    // Extraigo del context la funcion para eliminar una tarea
    const {deleteTask} = useTasks();

    // Declaro constante para disponer del useNavigate
    const navigate = useNavigate();

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done == 1 ? "✅" : "❌"}</span>
            <span>{task.createAt}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            <button onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
        </div>
  )
}
