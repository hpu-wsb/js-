function sort(arr) {
    let a = [];
    a.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        for (let j = a.length - 1; j >= 0; j--) {
            if (arr[i] > a[j]) {
                a.splice(j + 1, 0, arr[i])
                break
            }
            if (j == 0) {
                a.splice(0, 0, arr[i])
            }
        }
    }
    return a
}
let arr = [12, 1, 5, 8, 9, 15]
arr = sort(arr)
console.log(arr)