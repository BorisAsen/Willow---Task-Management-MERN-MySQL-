import React from 'react';
// Importo el enrutador
import { Route, Routes } from "react-router-dom";
// Importo el componente de la pagina principal
import TasksPage from "./components/TasksPage";
// Importo el componente de la pagina para crear tareas
import TaskForm from "./components/TaskForm";
// Importo el componente que se mostrara cuando se solicite una pagina que no exista
import NotFound from "./components/NotFound";
// Importo el componente de la barra de navegacion
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        {/* Ruta de la pag principal */}
        <Route path='/' element={<TasksPage/>} />
        {/* Ruta de la pagina para crear tareas */}
        <Route path='/new' element={<TaskForm/>} />
        {/* Pagina por defecto que se mostrara cuando se solicite una pagina que no existe */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
    
  )
}
