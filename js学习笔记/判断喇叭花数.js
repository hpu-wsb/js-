//计算一个数字的阶乘
function factorial(n) {
    //累乘器
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result
}
//穷举法，从100到999寻找喇叭花数
for (var i = 100; i <= 999; i++) {
    //把数字i变为字符串
    var i_str = i.toString();
    //abc分别表示百位，十位，个位
    var a = Number(i_str[0]);
    var b = Number(i_str[1]);
    var c = Number(i_str[2]);

    if (factorial(a) + factorial(b) + factorial(c) == i) {
        console.log(i)
    }
}
//