let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
let stringArr = [];

for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] == "string") {
        stringArr.push(arr[index]);
    }
}

for (let index = 0; index < stringArr.length; index++) {
    if (stringArr[index]== stringArr[index].toUpperCase()) {
        var res = index;
    }
}

console.log(stringArr[res]);