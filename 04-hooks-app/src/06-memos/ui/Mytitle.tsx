import React from "react";

interface props{
    titulo: string;
}

export const Mytitle = React.memo( ({titulo}: props) => {

    console.log('redner title');
  return (
    <h1>
      {titulo}
    </h1>
  )
})
