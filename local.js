// Laboratorio 5
// lINK: https://www.supermaxi.com

// LOCAL STORAGE

fetch("https://fakestoreapi.com/products") // API falsa de productos utilizada
    .then(r => r.json())
    .then(data => {
        const producto20 = data[19];
        console.log(producto20);
        guardarlocal(producto20);
    })
    .catch(e => console.log(e));

// Función para guardar en el local
const guardarlocal = (data) => {
    localStorage.setItem("Producto N°45", JSON.stringify(data));
}


// TODO ESTO SE PEGA EN LA CONSOLA DEL NAVEGADOR Y VISUALIZAR SU CONTENIDO EN LA PARTE DE APLICACION - LOCAL STORAGE


import login from './autenticar.js' 
login("Alisson", "1234") 