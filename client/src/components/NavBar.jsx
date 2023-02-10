import React from 'react'
// Importo los enlaces que brinda react-router-dom
// Son un remplazo a las etiquetas "a" pero no refrescan la pagina
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='bg-zinc-700 flex flex-wrap justify-between px-10 py-4'>
        <Link to="/" className='text-white font-bold text-2xl'>
          <h1>Willow - Programa de Gestión</h1>
        </Link>
        <ul className='flex flex-wrap gap-x-1 m-1'>
            <li>
                <Link className='bg-slate-200 px-2 py-1 font-bold' to="/">Inicio</Link>
            </li>
            <li>
                <Link className='bg-slate-200 px-2 py-1 font-bold' to="/new">Crear Tareas</Link>
            </li>
        </ul>
    </div>
  )
}
