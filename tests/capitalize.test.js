import { capitalize } from "../scripts/capitalize.js";

test('Return string with first letter Capitalized', () => {
    expect(capitalize('string')).toBe('String');
    expect(capitalize('mixedCapitals')).toBe('MixedCapitals');
    expect(capitalize('ALLCAPS')).toBe('ALLCAPS');
});