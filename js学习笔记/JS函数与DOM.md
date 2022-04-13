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







