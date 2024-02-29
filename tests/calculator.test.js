import { calculator } from '../scripts/calculator.js';

test('testing addition functionality', () => {
    expect(calculator.add(5,20)).toBe(25);
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.add(-1,-2)).toBe(-3);
    expect(calculator.add(1,-2)).toBe(-1);
    expect(calculator.add(-1,2)).toBe(1);
    expect(calculator.add(0.1,0.2)).toBeCloseTo(0.3);
});

test('testing subtraction functionality', () => {
    expect(calculator.subtract(30,20)).toBe(10);
    expect(calculator.subtract(10,20)).toBe(-10);
    expect(calculator.subtract(-20,20)).toBe(-40);
    expect(calculator.subtract(0,20)).toBe(-20);
    expect(calculator.subtract(-10,-20)).toBe(10);
    expect(calculator.subtract(0.1,20)).toBe(-19.9);
});

test('testing division functionality', () => {
    expect(calculator.divide(100,2)).toBe(50);
    expect(calculator.divide(50,50)).toBe(1);
    expect(calculator.divide(200,0)).toBe('Infinity');
    expect(calculator.divide(0,50)).toBe(0);
    expect(calculator.divide(0,10)).toBe(0);
    expect(calculator.divide(0.5,10)).toBe(0.05);
    expect(calculator.divide(0.10,0.20)).toBe(0.5);
    expect(calculator.divide(-10,-10)).toBe(1);
    expect(calculator.divide(-10,-5)).toBe(2);
    expect(calculator.divide(-10,5)).toBe(-2);
    expect(calculator.divide(10,-5)).toBe(-2);
});

test('testing multiplication functionality', () => {
    expect(calculator.multiply(5,10)).toBe(50);
    expect(calculator.multiply(10,5)).toBe(50);
    expect(calculator.multiply(-5,10)).toBe(-50);
    expect(calculator.multiply(5,-10)).toBe(-50);
    expect(calculator.multiply(0.5,10)).toBe(5);
    expect(calculator.multiply(5,0.10)).toBe(0.5);
    expect(calculator.multiply(999,0)).toBe(0);
});