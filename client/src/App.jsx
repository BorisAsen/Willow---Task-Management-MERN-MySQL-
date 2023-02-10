import React from 'react';
// Importo el enrutador
import { Route, Routes } from "react-router-dom";
// Importo el componente de la pagina principal
import TasksPage from "./pages/TasksPage";
// Importo el componente de la pagina para crear tareas
import TaskForm from "./pages/TaskForm";
// Importo el componente que se mostrara cuando se solicite una pagina que no exista
import NotFound from "./pages/NotFound";
// Importo el componente de la barra de navegacion
import NavBar from "./components/NavBar";
// Importar el Contexto de tareas
import { TaskContextProvider } from "./context/TasksProvider";


export default function App() {
  return (
    <div className="bg-zinc-800 h-screen">
      <NavBar/>
      <div className='container mx-auto py-4 px-20'>
        <TaskContextProvider>
          <Routes>
            {/* Ruta de la pag principal */}
            <Route path='/' element={<TasksPage/>} />
            {/* Ruta de la pagina para crear tareas */}
            <Route path='/new' element={<TaskForm/>} />
            {/* Ruta de la pagina para modificar tareas */}
            <Route path='/edit/:id' element={<TaskForm/>} />
            {/* Pagina por defecto que se mostrara cuando se solicite una pagina que no existe */}
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  )
}
