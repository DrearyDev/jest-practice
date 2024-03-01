
function analyzeArray(arr) {
    if (arr.constructor !== Array) { throw new Error('Passed in Input must be Array of numbers') };

    const arrayData = {
        avg: 0,
        max: arr[0],
        min: arr[0],
        length: arr.length
    };

    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) !== 'number') { throw new Error('Passed in Input must be Array of numbers') };

        arrayData.avg += arr[i];

        if (arrayData.max < arr[i]) { arrayData.max = arr[i] };

        if (arrayData.min > arr[i]) { arrayData.min = arr[i] };
    };

    arrayData.avg = arrayData.avg / arr.length;

    return arrayData;
};

export { analyzeArray };