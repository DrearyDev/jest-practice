import { ceaserCipher } from '../scripts/ceaserCipher.js';

test('test encryption using ceaserCipher', () => {
    expect(ceaserCipher('test', 1)).toBe('uftu');
    expect(ceaserCipher('CapitalLetters', 1)).toBe('DbqjubmMfuufst');
    expect(ceaserCipher('Punctuation!', 1)).toBe('Qvoduvbujpo!');
    expect(ceaserCipher('xyz',1)).toBe('yza');
    expect(ceaserCipher('xyz',3)).toBe('abc');
    expect(ceaserCipher('testing space',1)).toBe('uftujoh tqbdf');
});