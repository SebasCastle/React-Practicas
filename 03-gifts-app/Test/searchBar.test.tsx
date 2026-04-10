import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "../src/shared/components/searchBar";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";



describe('searchBar',()=>{
    test('should render searchbar correctly',()=>{
        const {container} = render(<SearchBar onQuery={()=>{}}/>)
        expect(container).toMatchSnapshot();
        //2 opción
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    })

    test('should call onQuery with the correct value after 700ms',async ()=>{
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery}/>);

        const input = screen.getByRole('textbox');
        fireEvent.change(input,{ target:{value:'test'} });

        // await new Promise((resolve) => setTimeout(resolve,701));
        await waitFor(()=>{ //waitfor nos ayuda a esperar las promesas de manera dinamica sin cambiar el timpo si cambia en el archivo a testear
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        })
    })

    test('solud call only once with the last value (debounce)',async () =>{
        const onQuery = vi.fn();

        render(<SearchBar onQuery={onQuery}/>)

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 't'} });
        fireEvent.change(input, {target: {value: 'te'} });
        fireEvent.change(input, {target: {value: 'test'} });

        await waitFor(()=>{ 
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenLastCalledWith('test');
        })
    })

    test('solud call only once with button is clicked with the input value',async () =>{

        const onQuery = vi.fn();

        render(<SearchBar onQuery={onQuery}/>)

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'test'} });

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenLastCalledWith('test');

    })
     
    test('solud the input has the correct placeholder value',async () =>{
        const placeHoderValue = 'Ruby';
        render(<SearchBar onQuery={()=>{}} placeholder={placeHoderValue}/>);

        expect(screen.getByPlaceholderText(placeHoderValue)).toBeDefined();

        
    })
})