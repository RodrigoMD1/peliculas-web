import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({ setListadoState }) => {

    const tituloComponente = "añadir pelicula ";
    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    });

    
    const { titulo, descripcion } = peliState



    const conseguirDatosForm = e => {
        e.preventDefault();

        // conseguir datos del formulario 
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;


        // crear objeto de la pelicula a guardar 

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion,
        };

        // guardar estado
        setPeliState(peli)


        //actualizar el estado del listado principal
        setListadoState(elementos => {
            return [...elementos, peli];
        });


        // guardar en el almacenamiento local 
        GuardarEnStorage("pelis", peli);



    }



    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>


            <strong>
                {(titulo && descripcion) && "has agregado una pelicula " + titulo}
            </strong>


            <form onSubmit={conseguirDatosForm}>
                <input
                    type="text"
                    id="titulo"
                    placeholder="Titulo" />

                <textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Descripción">
                </textarea>

                <input
                    type="submit"
                    id="save"
                    value="Guardar" />
            </form>
        </div>
    )
}
