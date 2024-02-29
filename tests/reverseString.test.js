import { reverseString } from '../scripts/reverseString.js';

test('return passed in string but reversed', () => {
    expect(reverseString('string')).toBe('gnirts');
    expect(reverseString('another')).toBe('rehtona');
    expect(reverseString('SuperLongString')).toBe('gnirtSgnoLrepuS');
    expect(reverseString('with space')).toBe('ecaps htiw');
});
