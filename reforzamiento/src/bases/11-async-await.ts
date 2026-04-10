import type { GiphyResponse, Gif } from "../data/giphy.response";

const API_KEY = 'veFYfud0Ar1R3Vl4wQfGHyrF9UyOLjjU'

//funcion para solo traer la url del gif
const creatImageInsideDOM =  (url: string) =>{
    const imageElement = document.createElement('img');
    imageElement.src = url;

    document.body.append(imageElement);
}

const getRanfomGifUrl = async() :Promise<string> =>{
    const response= await  fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}&tag=&rating=g`);

    const {data}:GiphyResponse = await response.json();

    return data.images.original.url;
}

//lo mismo pero extendido
// getRanfomGifUrl().then((url) => creatImageInsideDOM(url)); 

//lo mismo pero simplificado
getRanfomGifUrl().then(creatImageInsideDOM); 
