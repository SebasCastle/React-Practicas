import  heroes  from "./data/heroes.data"
import { type Hero, type Owner } from "./data/heroes.data";
// si se importan types o interfaces se coloca la palabra type


const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find(hero => hero.id === id)
    if(!hero) {
        throw new Error(`Hero with id ${id} not found`)
    }
    return hero;
}
console.log(getHeroById(3));

//tarea
 export const getHeroesByOwner = (owner: Owner): Hero | undefined => {
    const characters = heroes.find( characters => characters.owner === owner )
        if(!characters) {
        throw new Error(`Hero with owner ${owner} not found`)
    }
    return characters;
    
}
    //se imprimira lo siguiente console.log(getHeroesByOwner('Marvel'));