function sort(arr) {
    let k;
    for (let i = 0; i < arr.length; i++) {
        k = i;
        //a用来记录轮到第几项的索引值,此时i前面的数字是已经排列好的数字,需要和i后面未排列好的数字进行比较
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[k] > arr[j]) {
                //记录最小的数字的索引值
                k = j;
            }
        }
        //每趟比完，选出未排列的最小值放在数组前
        if (k !== i) {
            [arr[k], arr[i]] = [arr[i], arr[k]];
        }
    }
    return arr
}
let arr = [6, 4, 9, 8, 1, 3, 2];
console.log(sort(arr));