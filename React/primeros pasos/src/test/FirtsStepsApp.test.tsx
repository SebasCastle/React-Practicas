import { screen, render } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstSteps } from "../FirstSteps";


    //fn es una funcion g, es decir general y se usa mucho en purebas en peticiones HTTP
const mockItemsCounter = vi.fn( ( _props: unknown) =>{
    return <div data-testid="ItemCounter"/>
})

vi.mock('../shopping-cart/ItemCounter', () =>({
    ItemCounter: (props : unknown) => mockItemsCounter(props),
}))

describe('FirtsStepsApp',()=>{

    //cuando se usan funciones mocks las cada prueba la llama incrementando las veces que se llama
    // para limpiar el mock se usan los Each para limpiar la funcion y no afectar su ciclo de vida de las pruebas
    afterEach(() =>{
        vi.clearAllMocks();
    })

    //     //mock es un componente fiticio que se utiliza para renderizar todo y estar probando seccion por seccion
    // vi.mock('../shopping-cart/ItemCounter', () =>({
    //    ItemCounter: (props: unknown ) => <div data-testid="ItemCounter"/>   
    // }));    


    test('sholud match snapshot',()=>{
        const {container} = render(<FirstSteps/>);
        expect(container).toMatchSnapshot();

    })

    test('should render the correct number of ItemCounter components', () =>{
        render(<FirstSteps/>);

        const ItemCounters = screen.getAllByTestId('ItemCounter');
        console.log(ItemCounters.length);
        expect(ItemCounters.length).toBe(3);

        //sirve para ver todos les elementos renderizados en la consola 
        // screen.debug();

    })

    test('should render ItemCounter with correct props', () =>{
        render(<FirstSteps/>);

        expect(mockItemsCounter).toHaveBeenCalledTimes(3);
        
        expect(mockItemsCounter).toHaveBeenCalledWith({
            firstName:'Nintendo',
            quantity:9,
            })
         expect(mockItemsCounter).toHaveBeenCalledWith(
            {firstName:'Play Station', quantity:3,}
        )
         expect(mockItemsCounter).toHaveBeenCalledWith(
            {firstName:'Xbox', quantity:7,}
        )

    })
//npm run coverage se usa para revisar la covertura de nuestro codigo, y tener un analisis completo de la app

})