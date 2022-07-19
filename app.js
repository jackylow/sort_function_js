function findSmall(array) {
    let small = array[0];
    let smallIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < small) {
            small = array[i];
            smallIndex = i;
        }
    } 
    return smallIndex;
}

function selectionSort(array) {
    let newArray = [];
    let length = array.length;
    for (let i = 0; i < length; i++) {
        let small = findSmall(array);
        newArray.push(array.splice(small,1)[0]);
    } 
    return newArray;
}

console.log(selectionSort([11, 3, 5, 8, 19, 2, 6]));
