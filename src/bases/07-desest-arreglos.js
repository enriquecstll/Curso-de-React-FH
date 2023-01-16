
const personajes = [
    'Goku', 
    'Vegeta',
    'Trunks'
]

const [ , ,p3 ] = personajes; 

console.log(p3);


const retornaArray = ()=>{
    return ['ABC', 123]; 
}

const [letras, numeros] = retornaArray();
console.log(letras, numeros);

// TAREA 
// 1. el primer valor del arreglo se llamara "nombre"
// 2. se llamara setNombre

const userState = (valor) => {
    return [valor, ()=>{ console.log('Hola Mundo');}]
};

const [nombre, setNombre] = userState('Goku'); 

console.log(nombre);
setNombre(); 
