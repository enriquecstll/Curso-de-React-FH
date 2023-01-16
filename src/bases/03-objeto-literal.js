

const persona = {
    nombre: 'Tony', 
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 11207,
        lat: 18.14558,
        lng: 20.13325
    }

};

const persona2 = {...persona};
persona2.nombre = 'Diego';


console.log( persona );
console.log( persona2 );






