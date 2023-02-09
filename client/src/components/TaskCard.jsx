import React from 'react'

// Importar el context de tareas
import { useTasks } from "../context/TasksProvider";

//Importar el hook para direccionar al formulario de tareas cuando se presione el boton editar
import { useNavigate } from "react-router-dom";

// El componente recibe un elemento del arreglo de tareas
// y muestra todas las propiedades del mismo
export default function TaskCard({ task }) {

    // Extraigo del context las funciones para eliminar una tarea y cambiarle el estado
    const {deleteTask, toggleTaskDone} = useTasks();

    // Declaro constante para disponer del useNavigate
    const navigate = useNavigate();

    // Funcion para ver el estado del campo done
    const handleDone = async () => {
        // Imprimo por consola el valor del campo done de la tarea para corroborar
        //console.log(taskDone);
        await toggleTaskDone(task.id);
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done == 1 ? "✅" : "❌"}</span>
            <span>{task.createAt}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            <button onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
            <button onClick={() => handleDone(task.done)}>Completada</button>
        </div>
  )
}
