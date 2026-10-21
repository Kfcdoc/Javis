
//some() 
const numeros = [3, 7, 10, 18, 21];
const edades = [18, 22, 30, 25, 19]; 
// every() 
//se ve que todos cumplan y si soltara un falsooo
// todos tienen 18 o mass
let todosMayores = edades.every(edad => edad >= 18);
console.log("Todos son >= 18:", todosMayores);

    // todos son pares por eso tiene que  dar false
let todosPares = edades.every(edad => edad % 2 === 0);
console.log("Todos son pares:", todosPares);


// fill() 

let letras = ['a', 'b', 'c', 'd', 'e']; // aca se puede decir que rellena el arreglo 

// poner x en las primeras 3 
letras.fill('x', 0, 3)
console.log("Con x:", letras);

letras.fill("z", 2, 5);
// poner z de la posicion  y creo se ponen en 5 
console.log('Con z:', letras)


// filter() 

const productos = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 75 },
    { nombre: 'Monitor', precio: 300 }
];
// los que su nombre tiene mas de 5 letras 
const nombresLargos = productos.filter(p => p.nombre.length > 5);// con length se cuentan ya quie es el mayor
console.log("Nombres de mas de 5 letras:", nombresLargos);

//findIndex()
// aca tine que ser ifual  si no lo encuentra da -1
const frutas = ['manzana', 'plátano', 'pera', 'fresa', 'uva'];

// posicion de la pera
const indicePera = frutas.findIndex(f => f === 'pera');
console.log("Indice de pera:", indicePera);

const indiceLarga = frutas.findIndex(f => f.length > 5);
console.log("Indice de la primera fruta con mas de 5 letras:", indiceLarga);
// posicion de la primer fruta con mas de 5 letras

// Set 

const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];// no deja que haya valores repetidos

// Arreglo de personas 
// aqui se juntan varias funciones de
const personas = [
    { nombre: 'Ana', edad: 25, ciudad: 'México' },
    { nombre: 'Carlos', edad: 17, ciudad: 'Madrid' },
    { nombre: 'Lucía', edad: 30, ciudad: 'Bogotá' },
    { nombre: 'Pedro', edad: 19, ciudad: 'México' }
];

// filterlos mayores de 18
const mayores = personas.filter(p => p.edad > 18);
console.log("Personas mayores de 18:", mayores);

// some
// ver si hay alguien de Madrid
const hayMadrid = personas.some(p => p.ciudad === 'Madrid');
console.log("Hay alguien de Madrid:", hayMadrid);

//every
// todos son mayores de edad y solo carlo no lo es y regresa la cons y da falso
const todosMayoresEdad = personas.every(p => p.edad >= 18);
console.log("Todos son mayores de edad:", todosMayoresEdad);

//find
// la primera persona de México
const primeraMexico = personas.find(p => p.ciudad === 'México');
console.log("Primera persona de México:", primeraMexico);

//findIndex
// en que posicion esta Ana
const posicionAna = personas.findIndex(p => p.nombre === 'Ana');
console.log("Posición de Ana:", posicionAna);