let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let even_elements = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even_elements.push(arr[i])
    }
}

let max = even_elements[0];

for (let i = 0; i < even_elements.length; i++) {
    if(even_elements[i]>max) {
        max = even_elements[i]
    }
}

console.log(max)