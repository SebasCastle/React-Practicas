import React, { useRef } from 'react'

const FocousScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () =>{
        console.log(inputRef.current?.value);
        inputRef.current?.select();
    }

  return (
    <div className='bg-gradient flex flex-col gap-4 items-center '>
        <h1 className='text-2-1 font-thin text-white'>Focous Screen</h1>
        <input type="text"
        ref={inputRef}
        className='bg-white text-black px-4 py-2 rounded-md'
        autoFocus />

        <button className='bg-blue-500 text-white px-4 py-2 rounded-b-md cursor-pointer'
        onClick={handleClick}>
            set focus
        </button>
      
    </div>
  )
}

export default FocousScreen
