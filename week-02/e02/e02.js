const arr = [1, 2, 3, 4, 5];

const sumOfArrayElements = (array) => {
    let sum = 0;

    for (const i of array) {
        sum += i;
    }

    return sum;
}

console.log(sumOfArrayElements(arr));