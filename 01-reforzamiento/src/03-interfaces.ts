//sirven para declaar la estructura de nuestros objetos 
interface Person{
    Firstname: string;
    LastName:string;
    Adress?:Adress;
}

interface Adress{
    PostalCode: Number;
    Adress:string;
} 

const iroman:Person={
    Firstname:"tony",
    LastName:'Stark',
    Adress: {
        PostalCode: 12345,
        Adress: "av. avengers"
    }
}

console.log(iroman);

/*el metodo spread ... sirve para separar las propiedades
y guardarlas en otro epsacio de memoria en lugar de referisrse al mismo
espacio de memoria como: let spiderman = iroman
rompe el primer nivel para clonar objetos
ejemplo:
*/
let spiderman={...iroman}

spiderman={
    Firstname:"Petter",
    LastName:'Parker',
    Adress: {
        PostalCode: 9045,
        Adress: "New York"
    }
}
console.log(spiderman)

// para clonar un objeto totalmente se usa el metodo 
// structuredClone, ejemplo:
let CaptianAmerican = structuredClone(iroman);

CaptianAmerican.Firstname = "Steve"
console.log(CaptianAmerican)
