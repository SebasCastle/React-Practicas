//si tenemos variables que no van a cambiar (constantes) los colocamos fuera de los fragmentos (funciones)

import type { CSSProperties } from "react";

const firstName = 'Sebastian';
const lastName = 'Castillo';
const ListGmaes = ['Gear of war','Halo', 'Call of duty'];

// let flag = true;

const player = {
    Name: 'batman',
    City: 'Gotham',
}

const myStyles :CSSProperties = {
    backgroundColor:'blue',
    borderRadius:20,
    marginTop:30

}

export function MyAwesomeApp () {
    return(
        <div>
        <h1 data-testid="first-name">{firstName}</h1>
        <h2>{lastName}</h2>
        <p>{ListGmaes.join(', ')} </p>

        <p style={myStyles}>{JSON.stringify(player)}</p>
        </div>
    )
        }
