import { useCounter } from "@/Hooks/useCounter"
import { useMemo } from "react"


const haevystuff = (initalValue:number) =>{
        console.time('Begin')

    for (let index = 0; index < initalValue; index++) {
        console.log('let´s go'
        )
        
    }
    console.timeEnd('Finish')

    return `${initalValue} total de procesos realizados`
}

const MemoCounter = () => {

    const {counter, increment} = useCounter(1);

    const myHeavyValue = useMemo(() => haevystuff(counter), [counter]) ;

  return (
    <div className="bg-gradient flex flex-col gap-4 items-center">
        <h1>Memo - Counter</h1>
        <h4>Counter:{counter}</h4>
        <h4>Counter:{counter}</h4>

        <button className="bg-blue-500 text-white px-4 rounded-md py-2 px-8 cursor-pointer"
        onClick={increment}>
            +1
        </button>
    </div>
  )
}

export default MemoCounter
