function fib(n) {
    if (n == 0 | n == 1) return 1;
    //斐波那契数列的本质特征就是每一项，都等于前面两项的和
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(6))