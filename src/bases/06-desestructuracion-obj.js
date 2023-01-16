
//  Desestructuracion
// Asignacion desestructurante 

const persona = {
    nombre: 'Tony', 
    edad: 45, 
    clave: 'IronMan',
    rango: 'Soldado'
};

// const {nombre, edad, clave} = persona; 

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const userContext = ({clave, nombre, edad, rango = 'capitan'}) => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave, 
        anios: edad, 
        latlng: {
            lat: 14.2365,
            lng: -12.554
        }
    }

}; 

const {nombreClave, anios, latlng:{ lat, lng}} = userContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);

