import {fireEvent ,screen, render} from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { ItemCounter } from '../shopping-cart/ItemCounter'
describe('Should be 1', ()=>{
    test('should render with default values', () =>{

        const name = 'Test item'


        render(<ItemCounter firstName= {name} />)

        // screen.debug();
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();

    }),

        test('should render with custom values', () =>{
            const name = 'Control de Nintendo';
            const quantity = 10;

        render(<ItemCounter firstName= {name} quantity={quantity} />)

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(quantity)).toBeDefined();

    })

    test('should increase count when +1 button is clicked', () =>{
            const name = 'Control de Nintendo';
            const quantity = 10;

         render(<ItemCounter firstName = {name} quantity = {quantity} />)

        // screen.debug();
        // expect(screen.getByText(name)).toBeDefined();
        // expect(screen.getByText(quantity)).toBeDefined();

        const [addCount] = screen.getAllByRole('button');
        //ejecuta el evento simualndo un click
        fireEvent.click(addCount);

        //para obtener el elemento al que esta signado el evento
        expect(screen.getByText('11')).toBeDefined();

    })

    test('should decrease count when  button  -1 is clicked', () =>{
            const name = 'Nintendo';
            const quantity = 5;

            render(<ItemCounter firstName= {name} quantity={quantity} />)

            const [, lessCount] = screen.getAllByRole('button');
            fireEvent.click(lessCount);
            expect(screen.getByText('4')).toBeDefined();


    })
      test('should not decrease count when -1 button is clicked', () =>{
            const name = 'Control de Nintendo';
            const quantity = 1;

        render(<ItemCounter firstName= {name} quantity={quantity} />)

        screen.debug();
        expect(screen.getByText('1')).toBeDefined();

    })

    test('should chage to red when count is 1', () =>{
        const name = "item-text";
        const quantity = 1;
        render(<ItemCounter firstName={name}  quantity={quantity}/>);

        const itemText = screen.getByText(name);

        console.log(itemText.style.color);
        expect(itemText.style.color).toBe('red');
    })

        test('should chage to red when count is greater 1', () =>{
        const name = "item-text";
        const quantity = 2;
        render(<ItemCounter firstName={name}  quantity={quantity}/>);

        const itemText = screen.getByText(name);

        console.log(itemText.style.color);
        expect(itemText.style.color).toBe('black');
    })

})