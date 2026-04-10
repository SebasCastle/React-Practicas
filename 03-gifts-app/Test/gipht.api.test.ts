import { describe, expect, test } from "vitest";
// import { GiphyApi } from "../src/gifts/Api/ApiGiphy";
import { GiphyApi } from "../src/gifts/Api/ApiGiphy";

describe('GifsApp', () =>{
    test('should be configured correctly', ()=>{
        const params = GiphyApi.defaults.params;
        expect(GiphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
        expect(params.lang).toBe('es');
        expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

        expect(params).toStrictEqual({
            lang: 'es',
            api_key:import.meta.env.VITE_GIPHY_API_KEY
        })

    })
})