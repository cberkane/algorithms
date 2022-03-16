const array = [15,3,6,2,90,2];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
        if(array[j] > array[j+1]) {
            const temp = array[j+1];
            array[j+1] = array[j];
            array[j] = temp;
        }
    }    
}

console.log(array);