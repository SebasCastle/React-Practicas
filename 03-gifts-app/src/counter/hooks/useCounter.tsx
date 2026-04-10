import { useState } from 'react'

export const useCounter = (starValue : number = 10) => {
        const [counter, setCount] = useState(starValue);

    const handleAdd = () =>{
        setCount(counter +1);
    }
        const handleSubstract = () =>{
        setCount((prevState) => prevState -1);
    }
        const handleReset = () =>{
        setCount(10);
    }
  return {
    //props (propeties)
    counter,
    //methods / accions
    handleAdd,
    handleSubstract,
    handleReset,
  }
}
