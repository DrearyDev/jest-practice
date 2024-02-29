
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        if(b === 0) { return 'Infinity'};

        return a/b;
    },
    multiply(a, b) {
        return a * b;
    }
};

export { calculator };