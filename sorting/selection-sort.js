const array = [20,12,10,15,2,3,66,4];
const length = array.length;


for (let i = 0; i < (length - 1); i++) {
    let minIndex = i;
    for (let j = (i + 1); j < length; j++) {
        if(array[j] < array[minIndex]) {
            minIndex = j;
        }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
}

console.log(array);