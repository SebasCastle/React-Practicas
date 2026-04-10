import { describe, expect, test } from "vitest";
import {render, screen} from '@testing-library/react';
import { CustomHeader } from "../src/shared/components/CustomHeader";

describe('GifsApp', () =>{
    test('should render title correcly', ()=>{
        const value ='Buscador de gifts'
        const {container} = render(<CustomHeader title={value} description=""/>);
        screen.debug();
        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain('Buscador de gifts');
    })

        test('should render description provided', ()=>{
            const value ='Descubre y explora gifts'
            const {container} = render(<CustomHeader title='' description={value}/>);
            screen.debug();
            const h1 = container.querySelector('p');
            expect(h1?.innerHTML).toContain('Descubre y explora gifts');
            expect(screen.getByRole('paragraph').innerHTML).toBe(value);
    })

        test('should not render title when not provided', ()=>{
        const value ='Buscador de gifts'
        const {container} = render(<CustomHeader title={value} description=""/>);
        screen.debug();
        const divElement = container.querySelector('.content-center');
        const h1 = divElement?.querySelector('h1');
        const p = divElement?.querySelector('p');

        expect(h1?.innerHTML).toContain(value);
        expect(p?.innerHTML).undefined;


    })
})