import React from 'react';
// Importo el enrutador
import { Route, Routes } from "react-router-dom";

/********** PAGINAS **********/
// Importo el componente de la pagina principal
import TareasPage from "./pages/TareasPage";
// Importo el componente de la pagina para crear tareas
import TaskForm from "./pages/TaskForm";
// Importo el componente de la pagina de Productos
import ProductosPage from "./pages/ProductosPage";
// Importo el componente de la pagina de Estadisticas
import EstadisticasPage from "./pages/EstadisticasPage";
// Importo el componente de la pagina de Ventas
import VentasPage from "./pages/VentasPage";
// Importo el componente que se mostrara cuando se solicite una pagina que no exista
import NotFoundPage from "./pages/NotFoundPage";

/********** COMPONENTES **********/
// Importo el componente de la barra de navegacion
import NavBar from "./components/NavBar";

/********** CONTEXT **********/
// Importar el Contexto de tareas
import { TaskContextProvider } from "./context/TasksProvider";


export default function App() {
  return (
    <div className="bg-primary h-screen">
      <div>
        <NavBar/>
        <div className='h-screen ml-14 p-10 pt-4'>
          <TaskContextProvider>
            <Routes>
              {/* Ruta de la pag principal */}
              <Route path='/' element={<TareasPage/>} />
              {/* Ruta de la pagina para crear tareas */}
              <Route path='/new' element={<TaskForm/>} />
              {/* Ruta de la pagina para modificar tareas */}
              <Route path='/edit/:id' element={<TaskForm/>} />
              {/* Ruta de la pagina de Productos */}
              <Route path='/productos' element={<ProductosPage/>} />
              {/* Ruta de la pagina de Ventas */}
              <Route path='/ventas' element={<VentasPage/>} />
              {/* Ruta de la pagina de Productos */}
              <Route path='/estadisticas' element={<EstadisticasPage/>} />
              {/* Pagina por defecto que se mostrara cuando se solicite una pagina que no existe */}
              <Route path='*' element={<NotFoundPage/>} />
            </Routes>
          </TaskContextProvider>
        </div>
      </div>

    </div>
  )
}
