import { memo } from "react";

interface props{
    subtitulo: string;
    callMyApi: () => void;
}

export const Mysubtitle = memo( ({subtitulo}: props) => {

    console.log('redner sub');
  return (
    <>
    <h6 className="text-2-1 font-bold">
      {subtitulo}
    </h6>
    <button className="bg-amber-500 rounded-md px-4 py-2">Función</button>
    </>
  )
})
