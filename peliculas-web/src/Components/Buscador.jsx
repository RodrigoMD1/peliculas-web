import React, { useState } from 'react';

export const Buscador = ({ listadoState, setListadoState }) => {


    const [busqueda, setBusqueda] = useState(" ");
    let pelis_encontradas = [];
    const [noEncontrado, setNoEncontrado] = useState(false);



    const buscarPeli = (e) => {
        // crear estado y actualizarlo 
        setBusqueda(e.target.value);


        // filtrar para buscar coincidencias
        pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });


        if (busqueda.length <= 1 || pelis_encontradas.length <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true)
        } else {
            setNoEncontrado(false)
        }


        // actualizar estado del listado principal con lo que logrado filtrar 
        setListadoState(pelis_encontradas);
    };





    return (
        <div className="search">
            <h3 className="title">Buscador : {busqueda}</h3>

            {(noEncontrado == true && busqueda.length > 2) && (
                <span>no se ha encontrado ninguna coincidencia</span>
            )}

            <form>
                <input
                    type="text"
                    id="search_field"
                    name="busqueda"
                    autoComplete='off'
                    value={busqueda}
                    onChange={buscarPeli}
                />

                <button id="search">Buscar</button>
            </form>
        </div>
    );
};
