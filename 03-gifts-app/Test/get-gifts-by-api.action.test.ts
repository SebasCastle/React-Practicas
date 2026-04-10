import { beforeEach, describe, expect, test, vi } from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter';
import { GiphyApi } from "../src/gifts/Api/ApiGiphy";
import { GetGiftsByApi } from "../src/gifts/components/Accions/get-gift-by-query.action";
import { giphysearchResponseMock } from "./mock/gphy.response";


describe('getGifsByApi',()=>{

    let mock = new AxiosMockAdapter(GiphyApi);

    beforeEach(()=>{
        mock = new AxiosMockAdapter(GiphyApi);
    })
    // test('getGifs from list',async()=>{
    //     const gifs = await GetGiftsByApi('ruby');
    //     const [gif1] = gifs;
    //     console.log(gifs);
    //     expect(gifs.length).toBe(10);
    //     expect(gif1).toStrictEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number),
    //     })
    // })
    test('should return a list of gifs',async () => {
        //indica que devuelve una estatus 200 Ok y manda la respeusta del mock por el endpoint
        mock.onGet('/search').reply(200,giphysearchResponseMock);
        // mock.onGet(AxiosMockAdapter, giphysearchResponseMock)
        
        const gifs = await GetGiftsByApi('Ruby');
        expect(gifs.length).toBe(10);
        
        gifs.forEach((gif)=>{
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.height).toBe('number');
            expect(typeof gif.width).toBe('number');

        })

    })
    test('should return an empty list of gifs if query is empty',async () => {
        // mock.onGet('/search').reply(200,{data: []});
        //restaura toda la intancia similar al ejemplo de arriba pero usando Axios
        mock.restore();


        const gifs = await GetGiftsByApi('');
        console.log(gifs);
        expect(gifs.length).toBe(0);
    })

    test('should handle error when the API returns an error',async () => {
        //un spy sirve para sabersi un metodo fue llamado
        const consoleErrorSpy = vi.spyOn(console, 'error')
        .mockImplementation(() =>{
            console.log('Consulta vacia'); 
        })
            mock.onGet('/search').reply(400,{
                data:{
                    message:'bad request'
                }
            });
            const gifs = await GetGiftsByApi('Ruby');
            console.log(gifs);

            expect(gifs.length).toBe(0);
            expect(consoleErrorSpy).toHaveBeenCalled();
            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
            expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
    })


      
})