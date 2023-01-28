import React from 'react'
// Importo los enlaces que brinda react-router-dom
// Son un remplazo a las etiquetas "a" pero no refrescan la pagina
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
        <h1>Programa de Gestion Willow</h1>

        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/new">Create Tareas</Link>
            </li>
        </ul>
    </div>
  )
}
