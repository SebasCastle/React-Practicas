const characterNmaes = ['Goku', 'Vegeta', 'Trunks'];

const [,,Trunks ] = characterNmaes;

 console.log({Trunks});

const returnArray = () =>{
    // con tuplas se puede definir el tipo de dato que va en cada posicion
    // una tupla es un array con un numero fijo de elementos
    return ['ABC', 123] as const; // as const convierte el array en una tupla
}
 
const [letters, numbers] = returnArray();

console.log(letters , numbers); 

// Tarea
const useState = (value: String) =>{
    return[
        value,
        (newValue:String) => { 
            console.log(newValue)
        },
    ] as const;
}
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"