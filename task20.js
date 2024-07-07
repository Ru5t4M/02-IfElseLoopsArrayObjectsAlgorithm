function indexsum(string, char) {
    let total = 0;
    let instr = false;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            total += i; 
            instr = true; 
        }
    }

    if (!instr) {
        return -1;
    }
    
    return total; 
    }

console.log(indexsum("hello", "l"))