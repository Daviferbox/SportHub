import {describe, test , expect} from 'vitest'

function soma(a:number, b:number){
    return a + b;
}

describe('Função soma', () =>{
    test('Deve somar dois numeros', () => {
        expect(soma(2,3)).toBe(5);
    });
    test('não deve tolerar resultado incorreto', () => {
        expect(soma(2,3)).toBe(10);
    })
});

