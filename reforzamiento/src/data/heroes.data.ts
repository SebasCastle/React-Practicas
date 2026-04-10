export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

// los tipos literales son tipos que solo pueden tener un valor específico
// type Owner = 'DC' | 'Marvel';

//enum es una forma de definir un conjunto de valores constantes
 export enum Owner {
  DC = 'DC', //si es enum se usa Owner.DC si solo fuer DC significa 0.
  MARVEL = 'MARVEL',
}


const heroes : Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.MARVEL,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.MARVEL,
  },
];

export default heroes;