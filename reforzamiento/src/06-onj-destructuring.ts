const person = {
    name: 'sebas',
    age: 20,
    key: 'Inge',
};
//destructuración de objeto dentro de objetos el orden no importa
const { name, age, key } = person;

console.log(name, age, key);

interface Hero{
    name: string;
    age: number;
    key: string;
    rank?:string; //? significa que es opcional tambien se puede con un union rank: string | null o undefined
}

const useContext = ({name, age, key, rank}:Hero) => {
    return {
        keyName: key,
        user:{
            // al usar una variable con el mismo nombre de la propiedad se puede simplificar
            // Elemplo: name, en lugar de name: name
            name:name,
            age:age,
            rank: rank ?? 'Capitan'
        }
    }
}

const {keyName, user} = useContext(person);

console.log(keyName, user.rank);