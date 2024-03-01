let plaintext = [
    'a','b','c','d','e','f',
    'g','h','i','j','k','l',
    'm','n','o','p','q','r',
    's','t','u','v','w','x',
    'y','z'
];

function createShifted(key) {
    let shifted = [];

    while (shifted.length < plaintext.length) {
        if (key === plaintext.length) { key = 0 }
        else if (key < 0) { key = (plaintext.length-1) + key };

        shifted.push(plaintext[key]);

        key++;
    };

    return shifted;
};

function ceaserCipher(string, key) {
    let word = string.toLowerCase().split("");
    let shifted = createShifted(key);

    for (let i = 0; i < word.length; i++) {
        if (plaintext.includes(word[i])) {
            word[i] = shifted[plaintext.indexOf(word[i])];
        };

        if (string[i] === string[i].toUpperCase()) {
            word[i] = word[i].toUpperCase();
        };
    };

    return word.join('');
};

export { ceaserCipher };