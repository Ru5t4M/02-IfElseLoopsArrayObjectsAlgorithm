function combine(array1, array2, char) {
    let res = "";

    for (let i = 0; i < array1.length; i++) {
        res += array1[i];
        if (i !== array1.length - 1) {
            res += char;
        }
    }
    
    if (array1.length > 0 && array2.length > 0) {
        res += char;
    }
    for (let a = 0; a < array2.length; a++) {
        res += array2[a];
        if (a !== array2.length - 1) {
            res += char;
        }
    }

    return res;
}

console.log(combine([1, 2], [3, 4], "*"))