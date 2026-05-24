import { ItemCounter } from "./shopping-cart/ItemCounter"

interface itemInCart{
    productName: string,
    quantity: number
}

const itemsInCart:itemInCart[]=[
    {productName:'Nintendo', quantity:9},
    {productName:'Play Station', quantity:3},
    {productName:'Xbox', quantity:7},

]

export const FirstSteps = () =>{
    return(
    <>
    <h1>Carrito de compras</h1>
    {
        itemsInCart.map(({productName, quantity}) =>(
            <ItemCounter key={productName} firstName={productName} quantity={quantity}/>
        ))
    }
    {/* <ItemCounter firstName="Nintendo" quantity={10}/>
    <ItemCounter firstName="Xbox" quantity={9}/>
    <ItemCounter firstName="Play Station" quantity={3}/> */}
    </>
    )
}