import React from 'react'

// El componente recibe un elemento del arreglo de tareas
// y muestra todas las propiedades del mismo
export default function TaskCard({ task }) {
  return (
    <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done == 1 ? "✅" : "❌"}</span>
        <span>{task.createAt}</span>
        <button>Borrar</button>
        <button>Editar</button>
    </div>
  )
}
