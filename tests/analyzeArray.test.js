import { analyzeArray } from '../scripts/analyzeArray.js';

test('array is valid', () => {
    expect(() => analyzeArray('not array')).toThrow();
    expect(() => analyzeArray(567)).toThrow();
    expect(() => analyzeArray([0,1,2,3,'string'])).toThrow();
});

test('average returned in object', () => {
    expect(analyzeArray([0,1,2,3,4,5,6,7,8,9]).avg).toBe(4.5);
    expect(analyzeArray([0,1,2,3,4,5]).avg).toBe(2.5);
});

test('max returned in object', () => {
    expect(analyzeArray([0,1,2,3,4,5,6,7,8,9]).max).toBe(9);
    expect(analyzeArray([0,1,2,3,4,5]).max).toBe(5);
    expect(analyzeArray([50,1,2,3,4,5]).max).toBe(50);
});

test('min returned in object', () => {
    expect(analyzeArray([0,1,2,3,4,5,6,7,8,9]).min).toBe(0);
    expect(analyzeArray([0,1,2,3,4,5]).min).toBe(0);
    expect(analyzeArray([50,1,2,3,4,5]).min).toBe(1);
});

test('length returned in object', () => {
    expect(analyzeArray([0,1,2,3,4,5,6,7,8,9]).length).toBe(10);
    expect(analyzeArray([0,1,2,3,4,5]).length).toBe(6);
    expect(analyzeArray([0,10,20,30,40,50]).length).toBe(6);
});

