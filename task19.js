function compare(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    } 
    else {
        for (let i = 0; i < array2.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }
}

console.log(compare([1, 2, 3, 4], [1, 2, 3, 4]));