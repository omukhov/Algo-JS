const arr = [1, 3, 32, 11, 4, 4, 57, 81, 9, 102, 111, 123, 132, 114, 151, 2, 3, 0, 3, 5, 4, 23];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j+1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
            count += 1;
        }
    }
    return array;
}

console.log('length', arr.length);
console.log(bubbleSort(arr));
console.log('count = ', count);