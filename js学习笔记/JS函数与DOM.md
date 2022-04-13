# 函数

### 函数的定义

和变量类似，函数必须先定义然后才能使用

使用funcition关键字定义函数，function是“功能”的意思

```js
function fun(){
//函数体语句
}
```

```js
var fun = function(){
    //函数体语句
}
```

### 函数的调用

```js
fun()  //调用函数
```

### 函数声明的提升

```js
fun();
function fun(){
    alert("函数被执行")
}
```

### 函数优先提升

```js
fun();
var fun = function(){
    alert('A');
}
function fun(){
    alert('B');
}
fun();
```

函数优先提升，再执行变量声明提升，且无法覆盖提升的函数

### 函数的参数

函数可以没有参数，也可以有多个函数

```js
function add(a,b){
    var sum = a + b;
    console.log('两个数字的和是' + sum);
}
add(3,5);
```

### arguments

函数内arguments表示它接收到的实参列表，他是一个类数组对象

类数组对象：所有属性均为从0开始的自然数序列，并且有length属性，和数组类似可以用方括号书写下标访问对象的某个属性值，但是不能调用数组的方法

### 函数的返回值

涵数体内可以使用return关键字表示"函数的返回值"

```js
function sum(a,b){
    return a + b;
}
var result = sum(3,5);
```

调用一个有返回值的函数，可以被当作一个普通值，从而可以出现在任何可以书写值的地方

```js
function sum(a,b){
    return a + b;
}
var result = sum(3,4) * sum(2,6)
```

调用函数时，一旦遇见return语句则会立即退出函数，将执行权交还给调用者



