import { describe, expect, test } from "vitest";
import {act, renderHook} from '@testing-library/react';
import { useCounter } from "../src/counter/hooks/useCounter";

describe('GifsApp', () =>{
    test('should initilaze with value 10', ()=>{
        //para analizar un hook
        const {result} =renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
    })

        test('should initilaze with value 20', ()=>{
            const inicialValue = 20;
        //para analizar un hook
        const {result} =renderHook(() => useCounter(inicialValue));
        expect(result.current.counter).toBe(inicialValue);
    })

        test('should increment counter when handleAdd is called', ()=>{
        const {result} =renderHook(() => useCounter());
        act(()=>{
            result.current.handleAdd();
        })
            expect(result.current.counter).toBe(11);
    })

     test('should decrease counter when handleSubstract is called', ()=>{
        const {result} =renderHook(() => useCounter());
        act(()=>{
            result.current.handleSubstract();
        })
            expect(result.current.counter).toBe(9);
    })

     test('should reset vale counter to 10 when handleReset is called', ()=>{
        const {result} =renderHook(() => useCounter());
        act(()=>{
            result.current.handleSubstract();
            result.current.handleSubstract();
            result.current.handleSubstract();
            result.current.handleSubstract();
            result.current.handleSubstract();
        })
            expect(result.current.counter).toBe(5);

        act(()=>{
            result.current.handleReset();
        })
            expect(result.current.counter).toBe(10);
    })
})