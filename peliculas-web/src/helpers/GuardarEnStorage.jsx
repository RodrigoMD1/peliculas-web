 export const GuardarEnStorage = (clave, elemento) => {
    // conseguir los elementos que ya tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));


    // comprobar si es un array 

    if (Array.isArray(elementos)) {
        // añadir dentro del array un elemento nuevo 
        elementos.push(elemento);
    } else {
        // crear un array con la nueva elemento 
        elementos = [elemento];
    }

    // guardar en el local storage

    localStorage.setItem(clave, JSON.stringify(elementos));

    // devolver objeto guardado 
    return elemento;

    // localStorage.setItem("pelis", JSON.stringify([peli]));
}