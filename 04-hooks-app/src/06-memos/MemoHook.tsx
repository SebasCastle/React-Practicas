import { useCallback, useState } from "react"
import { Mytitle } from "./ui/Mytitle";
import { Mysubtitle } from "./ui/Mysubtitle";

const MemoHook = () => {

    const [title, setTitle] = useState('Hola');
    const [subtitle, setSubtitle] = useState('Hola');
    
    const handleMyApiCall = useCallback( (subtitle:string) =>{
        console.log('Hi Api ' + subtitle)
    },[subtitle]);



  return (
    <div className='bg-gradient flex flex-col gap-4 items-center '>
        <h1 className='text-2xl font-thin text-white'>Memo App</h1>
        <Mytitle titulo={title}/>
        <Mysubtitle subtitulo={subtitle} callMyApi={() => handleMyApiCall(subtitle)}/>
        <h6>subtitulo</h6>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() =>{setSubtitle('Hii!')}}>
            Cambiar título
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() =>{setSubtitle('sebas')}}>
            Cambiar subtitulo
        </button>
      
    </div>
  )
}

export default MemoHook
