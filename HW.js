let array1 = [5, 1, 5, 3, 5];
let array2 = [5, 5, 5, 5, 5];
let array3 = [5, 1, 5, 3, 6];

function isAllElementEqual(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (sumArray(arr) / arr.length == arr[i]) {
            return true;
        } else {
            return false;
        }
    }
}

function max(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

function min(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(isAllElementEqual(array1));
console.log(isAllElementEqual(array2));
console.log(max(array3));
console.log(min(array3));
console.log(sumArray(array1));