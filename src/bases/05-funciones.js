
// Funciones en JS

// const saludar = function(nombre){
//     return `Hola ${nombre}`
// }

const saludar2 = (nombre) => {
    return `Hola ${nombre}`
}

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'DCastillo28'
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a una funcion de flecha 
// 2. Tienen que retornar un objeto implicito 

const userAct =  (nombre) =>({
        uid: 'ABC456',
        username: nombre
    });

const usuarioActivo = userAct('Enrique.cstll');
console.log(usuarioActivo);

