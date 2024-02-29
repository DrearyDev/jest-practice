import { capitalize } from "../scripts/capitalize.js";

test('Return string with first letter Capitalized', () => {
    expect(capitalize('string')).toBe('String');
});