// let arr=[3,8,2,5,4,10,7,6] - Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.

let arr = [3, 8, 2, 5, 4, 10, 7, 6]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log("Odd number's index", i)
    }
}