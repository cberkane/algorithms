const array = [12, 4, 3, 60, 6, 11];
const size = array.length;

for (let i = 1 ; i < size; i++) {
    const current = array[i];
    let prev = i - 1;

    while (prev >= 0 && current < array[prev]) {
        array[prev+1] = array[prev];
        prev--;
    }

    array[prev+1] = current;
}
