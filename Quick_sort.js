const arr = [1, 3, 32, 11, 4, 4, 57, 81, 19, 102, 111, 123, 132, 114, 151, 2, 3, 0, 3, 5, 4, 23];
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if(i === pivotIndex) {
            continue;
        }
        if(array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log('length', arr.length);
console.log(quickSort(arr));
console.log('count = ', count);