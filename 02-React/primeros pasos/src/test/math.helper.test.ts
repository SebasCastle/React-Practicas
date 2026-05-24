import {describe, expect, test} from 'vitest'
import {add, multiply, rest} from '../math.helper';

describe('add', () =>{ // se utilixa para organizar las pruebas e identifcar sobre que son
    test("añadir datos validos",() =>{
        //1. Arrange
        const a = 2;
        const b = 2;
        
        //2. Act
        const result = add(a,b);


        //3. Assert
        expect(result).toBe(4);
    })
})


describe('rest', () =>{ // se utilixa para organizar las pruebas e identifcar sobre que son
    test("añadir datos positivos",() =>{
        //1. Arrange
        const a = 2;
        const b = 2;
        
        //2. Act
        const result = rest(a,b);


        //3. Assert
        expect(result).toBe(0);
    })
})



describe('mutiply', () =>{ // se utilixa para organizar las pruebas e identifcar sobre que son
    test("añadir datos validos",() =>{
        //1. Arrange
        const a = 10;
        const b = 0;
        
        //2. Act
        const result = multiply(a,b);


        //3. Assert
        expect(result).toBe(0);
    })
})

