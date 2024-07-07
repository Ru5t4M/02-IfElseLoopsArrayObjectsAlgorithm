function firstElmnt(arr, n=1) {
    let res = [];
        for (let i = 0; i < n && i < arr.length; i++) {
            res.push(arr[i]);
        }
        return res;
    }

console.log(firstElmnt([1, 73, 99, 20], 2));