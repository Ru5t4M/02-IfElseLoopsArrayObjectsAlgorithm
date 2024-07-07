function clearDupl(array) {
    let res = [];
    
    for (let i = 0; i < array.length; i++) {
        if (res.indexOf(array[i]) === -1) {
            res.push(array[i]);
        }
    }
    
    return res;
}

console.log(clearDupl([1, 2, 1, 2, 3]));