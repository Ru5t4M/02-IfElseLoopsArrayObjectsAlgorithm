function makeString(arr, symbol) {
    let str = "";
    
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        
        if (i !== arr.length - 1) {
            str += symbol;
        }
    }
    return str;
}

console.log(makeString([1,73,99,20], '*'))
