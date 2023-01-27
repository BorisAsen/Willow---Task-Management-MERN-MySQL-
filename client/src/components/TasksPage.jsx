import React from 'react'

// Importar el hook useEffect para mostrar informacion ni bien se carga la pagina
// Importar el hook useState para guardar el arreglo de tareas
import { useEffect , useState} from "react";

// Importar la funcion para obtener tareas
import { getTasksRequest } from "../api/tasks.api";

// Importar el componente para mostrar una tarjeta de tarea
import TaskCard from "./TaskCard";

export default function TasksPage() {
  // Defino el estado tasks inicialmente como un arreglo vacio
  // que luego se llenara con las tareas obtenidas
  const [tasks, setTasks] = useState([])

  // Se ejecuta al cargar la pagina
  useEffect (() => {
    //console.log("Listado de Tareas")
    
    // Funcion para cargar tareas
    async function loadTasks() {
      const response = await getTasksRequest();
      // Muestro por consola el arreglo de tareas que se encuentra en data
      //console.log(response.data);

      // Guardo el arreglo de tareas en la vble tasks
      setTasks(response.data);
    }
    loadTasks();
  }, [])

  return (
    <div>
      <h1>Lista de Tareas</h1>

      {/* Porcion de codigo que muestra el arreglo de tareas obtenido al cargar la pagina */}
      {tasks.map( task => (
        <TaskCard task={task} key={task.id}/>
      ))
      }
    </div>
  )
}
