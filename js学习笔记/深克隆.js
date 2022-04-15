//原数组
var arr1 = [33, 44, 11, 22, [77, 88]];
//函数，这个函数会被递归
function deepClone(arr) {
    //结果数组
    var result = [];
    //遍历数组的每一项
    for (var i = 0; i < arr.length; i++) {
        //类型判断，如果遍历到的项是数组
        if (Array.isArray(arr[i])) {
            //递归
            result.push(deepClone(arr[i]));
        } else {
            //如果遍历到的项不是数组，是基本类型值，就直接推入到结果数组中
            //相当于递归的出口
            result.push(arr[i]);
        }
    }
    //返回结果数组
    return result;
}