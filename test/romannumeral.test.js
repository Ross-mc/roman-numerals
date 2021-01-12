const { TestScheduler } = require('jest');
const romanToInt = require('../romannumeral');

describe('Valid input tests', () => {
    test('4 should equal IV', () => {
        expect(romanToInt(4)).toEqual('IV')
    })
})