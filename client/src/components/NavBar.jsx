import React from 'react'
// Importo los enlaces que brinda react-router-dom
// Son un remplazo a las etiquetas "a" pero no refrescan la pagina
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
        <h1>React MySQL</h1>

        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/new">Create Task</Link>
            </li>
        </ul>
    </div>
  )
}
