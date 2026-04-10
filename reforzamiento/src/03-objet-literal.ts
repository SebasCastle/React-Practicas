const iroman = {
    firstName: 'Ironman',
    lastName: 'Stark',
    age: 45,
    address: {
        zip: 554324,
        city: 'New York'
    }
}
//creacion de objeto si es const se puede modificar sus propiedades,
//si es let tambien se puede reasignar y agregar propiedades.

// el metodo spread ... sirve para separar las propiedades
// y guardarlas en otro epsacio de memoria en lugar de referisrse al mismo
// espacio de memoria como: let spiderman = iroman
// rompe el primer nivel para clonar objetos

// const spiderman = {...iroman};

const spiderman = iroman;
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
console.log(iroman, spiderman);

// para clonar un objeto totalmente se usa el metodo
// structuredClone, ejemplo:
const captianAmerica = structuredClone(iroman);
captianAmerica.firstName = 'Steve';
console.log(captianAmerica);

//INTERFACES
// definen la estructura de un objeto con propiedades y tipos de datos,
// pero en js no existen las interfaces, solo en ts
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address; //propiedad opcional
}

interface Address {
    zip: number;
    city: string;
}