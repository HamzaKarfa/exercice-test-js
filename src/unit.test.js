import React from 'react';
// import './setupTest';

function sum(a, b){
    return a + b;
}

describe('sum', function () {
    it('if all value equal 0',()=>{
        let num1 = 0
        let num2 = 0
        expect(sum(num1, num2)).toEqual(0)
    });

    it('if one value equal 0',()=>{
        let num1 = 0
        let num2 = 10
        expect(sum(num1, num2)).toEqual(num1 == 0? num2: num1)
    })

    it('if all value greater than 0',()=>{
        let num1 = 10
        let num2 = 10
        expect(sum(num1, num2)).toEqual(num1+num2)
    })
});

function arrayify(input = []) {
    return Array.isArray(input) ? input : [input];
}

 
describe('arrayify', () => {
    it('returns an empty array when given nothing', () => {
        expect(arrayify()).toEqual([])
    });

    it('returns the array-ed version of what it is given', () => {
        let value = 'test'
        expect(arrayify(value)).toEqual([value])
    });

    it('returns the array if it is given an array', () => {
        let arrayValue = ['test']

        expect(arrayify(arrayValue)).toEqual(arrayValue)
    });
});