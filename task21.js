function addString(array, index, string) {
    if (index >= array.length) {
        array.push(string); 
    } 
    else {
        array[index] = string; 
    }
    
    return array; 
}

console.log(addString(['a', 'hello', 'b', 'world'], 1, "dev"))