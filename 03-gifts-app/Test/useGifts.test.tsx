import { describe, expect, test, vi } from "vitest";
import { useGifts } from "../src/gifts/Hooks/useGifts";
import { act, renderHook } from "@testing-library/react";
import * as giftsCache from "../src/gifts/components/Accions/get-gift-by-query.action";


describe('useGifs', () =>{
    test('should return default values and methods', () =>{
        const {result} =renderHook(() => useGifts());

        expect(result.current.gifs.length).toBe(0);
        expect(result.current.GiftsPrevious.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handelTermClicked).toBeDefined();
    })


    test('should return a list of gifs', async () =>{
        const {result} =renderHook(() => useGifts());
        await act(async()=>{
            await result.current.handleSearch('Ruby');
        })
        expect(result.current.gifs.length).toBe(10);
    })

    test('should return a list of gifts when handleTermClicked is called', async ()=>{
         const {result} =renderHook(() => useGifts());
        await act(async()=>{
            await result.current.handelTermClicked('Ruby');
        })
        expect(result.current.gifs.length).toBe(10);
        
    })

    test('should return a list of gifts when handleTermClicked is called', async ()=>{
         const {result} =renderHook(() => useGifts());

        await act(async()=>{
            await result.current.handelTermClicked('Ruby');
        })
        expect(result.current.gifs.length).toBe(10);
        //controlo el metodo GetGiftsByApi sobre-escribiendole con un Error y evirar llamarlo nuevamente
        vi.spyOn(giftsCache, 'GetGiftsByApi')
        .mockRejectedValue(new Error('This my error'))

    })


    test('should not return more than 8 previous terms', async ()=> {
         const {result} =renderHook(() => useGifts());
         vi.spyOn(giftsCache, 'GetGiftsByApi').mockResolvedValue([]);

        await act(async()=>{
            await result.current.handleSearch('Rubys');
        })
        await act(async()=>{
            await result.current.handleSearch('Ruby2');
        })
        await act(async()=>{
            await result.current.handleSearch('Ruby3');
        })
        await act(async()=>{
            await result.current.handleSearch('Ruby4');
        })
        await act(async()=>{
            await result.current.handleSearch('Ruby5');
        })
        await act(async()=>{
            await result.current.handleSearch('Ruby6');
        })
        await act(async()=>{
            await result.current.handleSearch('Ruby7');
        })
        await act(async()=>{
            await result.current.handleSearch('Ruby8');
        })
            await act(async()=>{
            await result.current.handleSearch('Ruby9');
        })
        
        // console.log(result.current.GiftsPrevious);
        expect(result.current.GiftsPrevious.length).toBe(8);
        expect(result.current.GiftsPrevious).toStrictEqual([
        'ruby9', 'ruby8',
        'ruby7', 'ruby6',
        'ruby5', 'ruby4',
        'ruby3', 'ruby2'
        ])

    })

})