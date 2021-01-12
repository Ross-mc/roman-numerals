const { TestScheduler } = require('jest');
const romanToInt = require('../romannumeral');

describe('Valid input tests', () => {
    test('X should equal 10', () => {
        expect(romanToInt('X')).toEqual(10)
    });
    test('IX should equal 9', () => {
        expect(romanToInt('IX')).toEqual(9)
    });
    test('V should equal 5', () => {
        expect(romanToInt('V')).toEqual(5)
    });
    test('IV should equal 4', () => {
        expect(romanToInt('IV')).toEqual(4)
    });
    test('III should equal 3', () => {
        expect(romanToInt('III')).toEqual(3)
    });
    test('MMX should equal 2010', () => {
        expect(romanToInt('MMX')).toEqual(2010)
    });
    test('CD should equal 400', () => {
        expect(romanToInt('CD')).toEqual(400)
    });
});

describe('Inalid input tests', () => {
    test('Bad should return Not a Roman Numeral', () => {
        expect(romanToInt('Bad')).toEqual('Not a Roman Numeral')
    });
    test('XI Something should return Not a Roman Numeral', () => {
        expect(romanToInt('XI Something')).toEqual('Not a Roman Numeral')
    });
    test('Something MM should return Not a Roman Numeral', () => {
        expect(romanToInt('Something MM')).toEqual('Not a Roman Numeral')
    });
    test('-X should return Not a Roman Numeral', () => {
        expect(romanToInt('-X')).toEqual('Not a Roman Numeral')
    });
    test('Empty string should return Not a Roman Numeral', () => {
        expect(romanToInt('')).toEqual('Not a Roman Numeral')
    });
    test('IIII', () => {
        expect(romanToInt('IIII')).toEqual('Not a Valid Roman Numeral')
    });
    test('IMC', () => {
        expect(romanToInt('IMC')).toEqual('Not a Valid Roman Numeral')
    });
});