let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (typeof arr[i] == "string") {
        let intrm = arr[i]
        for (let a = 0; a < intrm.length; a++) {
            if (intrm[a] == intrm[a].toUpperCase()) {
                count++
            }
        }
    if (count >2) {
        console.log(arr[i])
        }
    }
}
