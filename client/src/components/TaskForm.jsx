import React from 'react'
// Importar el componente de Formik para crear y manejar el formulario de alta de tareas
import { Form, Formik } from "formik";
// Importar la funcion de axios para enviar la tarea al backend
import { createTaskRequest } from "../api/tasks.api";

export default function TaskForm() {
  return (
    <div>
      <Formik
        // Defino los valores iniciales que tendran los campos
        initialValues={{
          title: "",
          description: "",
        }}
        // Evento que se activa cuando el formuilario es enviado
        // Con esto se pueden observar por consola los datos que se capturaron
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);
            // Reseteo el formulario a sus valores inicales cuando se envia correctamente
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
        >
        {/* Esta funcion permite que los datos capturados por los inputs se correspondan
        y guarden en los Values definidos anteriormente mediante la propiedad handleChange
        que se ejecuta con el evento onChange. Con la propiedad handleSubmit y el evento onSubmit
        se podran observar los datos capturados por el formulario */}
        {({handleChange, handleSubmit, values, isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
              type="text"
              name="title"
              placeholder='Escribe un titulo'
              onChange={handleChange}
              value={values.title} // Resetea al valor inicial despues de enviar el form
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder='Escribe una descripcion de la tarea'
              onChange={handleChange}
              value={values.description} // Resetea al valor inicial despues de enviar el form
            ></textarea>

            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
        
      </Formik>
    </div>
  )
}
