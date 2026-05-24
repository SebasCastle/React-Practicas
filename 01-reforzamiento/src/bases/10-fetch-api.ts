import type { GiphyResponse, Gif } from "../data/giphy.response";

const API_KEY = 'veFYfud0Ar1R3Vl4wQfGHyrF9UyOLjjU'

const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}&tag=&rating=g`);

//respuesta normal con promesas
// myRequest.then((response) =>{
//     response.json().then((data) =>{//el metodo json es otra promesa que devuelve el body de la respuesta
//         console.log(data);
//     })
// })


//funcion para solo traer la url del gif
const creatImageInsideDOM = (url: string) =>{
    const imageElement = document.createElement('img');
    imageElement.src = url;

    document.body.append(imageElement);
}

//respuesta mejor estructutrada, se le concoce como cadena de promesas
myRequest.then((response) => response.json())
.then(({data}: GiphyResponse)=>{
    //usando intefaces para evitar errores de tipado y usar propiedades
    const imageUrl = data.images.original.url;

    // const imageURL= data.data.images.original.url;
    // console.log(imageURL);

    creatImageInsideDOM(imageUrl);
})
.catch((err) =>{
    console.error(err);
})