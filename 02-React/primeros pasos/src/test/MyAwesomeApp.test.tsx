import { describe, expect, test } from "vitest";
import {MyAwesomeApp} from '../MyAwesomeApp';
import {render, screen} from '@testing-library/react'

// describe('MyAwesomeApp', ()=>{
//     test('Shoudl render firstName and lastName', ()=>{
//         console.log(document.body)
//         const {container} = render(<MyAwesomeApp/>);
//         console.log(container);
//         // screen es mas amigalbe y facil de ver los componentes que render.
//         screen.debug();

//         const h1 = container.querySelector('h1');
//         //to contain ayuda a ver que contenga el texto en el elemento sin importar si hay espacios o algo más 
//         expect(h1?.innerHTML).toContain('Sebastian');

//     }
//     )
// })

// describe('MyAwesomeApp', ()=>{
//     test('Shoudl render firstName and lastName - screen', ()=>{
//         screen.debug();
//         // const h1 = screen.getByTestId('first-name');
//         // console.log(h1.innerHTML);
//         //to contain ayuda a ver que contenga el texto en el elemento sin importar si hay espacios o algo más 
//         // expect(h1?.innerHTML).toContain('Sebastian');

//     }
//     )
// })

describe('MyAwesomeApp', ()=>{
        screen.debug();
        test('should match snapshot', () =>{
            //se crea la carpeta snapshots
            //container es un objeto de la desetructiracion para crear el snapshot
            const {container} = render(<MyAwesomeApp/>);
            expect(container).toMatchSnapshot();
        })
})