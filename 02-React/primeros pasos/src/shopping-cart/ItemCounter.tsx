import { useState } from "react";

// import './ItemCounter.css'
import styles from './ItemCounter.module.css'

interface Props{
    firstName: string;
    quantity?: number;
}


export const ItemCounter = ({firstName, quantity = 1} : Props) =>{

    const [count, setCount] = useState(quantity);

const addCount =() =>{
    setCount(count +1); 
    

}

const lessCount =() =>{
    if(count===1) return;
    setCount(count -1);   
}

// const handlerClick = ()=>{
//     console.log(`click en ${firstName}`);
// }


    return (
        <section className={styles.itemRow}
        // style={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     gap: 10
        // }}
        >
            <span className={styles['item-text']}
            style={{
                color: count === 1? 'red' : 'black',
            }}
            >{firstName}</span>
            <button 
             onClick={addCount} className="plus">+1</button>
            <span>{count}</span>
            <button className="less" onClick={lessCount}>-1</button>
        </section>
    );
}