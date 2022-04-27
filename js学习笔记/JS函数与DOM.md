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

### sort()

数组排列可以使用sort()方法，这个方法的参数又是一个函数

```js
var arr = [33,22,55,11];
arr.sort(function(a,b){
    if(a > b){
        return 1;
    }else{
        return -1;
    }
});
```

 这个函数中的a，b分别表示数组中靠前和靠后的项，如果需要将他们交换位置，则返回任意正数；否则就返回

### 递归

边界条件：确定递归到何时终止，也称为递归出口

 递归模式：大问题是如何分解为小问题的，也称为递归体

```js
//书写一个函数，这个函数内部自己会调用自己，从而形成递归。
function factorial(n){
    if(n == 1) return 1;
    //函数的功能是计算n的阶乘
    return n * factorial(n-1);
}
var result = factorial(4);
alert(result);
```

###  变量作用域

变量只在其定义时所在的function内部有意义

```js
function fun(){
    var a = 10;
}
fun();
console.log(a);//报错
```

### 全局变量

如果不将变量定义再任何函数的内部，此时这个变量就是全局变量，他在任何函数内都可以被访问和更改

```js
var a = 10;
function fun(){
    a++;
    console.log(a);//输出11
}
fun();
console.log(a);//输出11
```

### 遮蔽效应

如果函数中也定义了和全局同名的变量，则函数内的变量会将全局的变量"遮蔽"

```js
var a = 10;
function fun(){
    var a = 5;
    a++;
    console.log(a);//输出6
}
fun();
console.log(a);//输出10
```

###  作用域链

函数的嵌套：一个函数内部也可以定义一个函数。和局部变量类似，定义在一个函数内部的函数是局部函数

```js
function fun(){
    function inner(){
        console.log('你好')；
    }
    inner();
}
fun();
```

在函数嵌套中，变量会从内到外逐层寻找它的定义。

```js
var a = 10;
var b = 20;
function fun(){
    var c = 30;
    function inner(){
        var a = 40;
        var d = 50;
        console.log(a,b,c,d);
    }
    inner();
}
fun()
```

### 不加var将定义全局变量

在初次给变量赋值时，如果没有加var，则将定义全局变量

```js
function fun(){
    a = 3;
}
fun();
console.log(a);//3
```

### 闭包

闭包是函数本神和该函数声明时所处的环境状态的组合

函数能够记忆住其定义时所处的环境，即使函数不在其定义的环境中被调用，也能访问定义时所处环境的变量 

```js
function fun(){
    var name = '慕课网';
    function innerFun(){
        alert(name);
    }
    return innerFun;
}
var inn = fun();
inn();
```

 闭包允许我们将数据与操作该数据的函数关联起来，这与面向对象编程有少许相似之处

### 记忆性

当闭包产生时，函数所处环境的状态会始终保持再内存中，不会在外层函数调用后被自动清除，这就是闭包的记忆性 

```js
function createCheckTemp(standardTemp){
    function checkTemp(n){
        if (n <= standardTemp){
            alert('你的体温正常');
        }else{
            alert('你的体温偏高');
        }
    }
    return checkTemp;
}
var checkTemp_A = createCheckTemp(37.1);
var checkTemp_B = createCheckTemp(37.3);
checkTemp_A(37.2);
```

### 模拟私有变量

```js
//封装一个函数，这个函数的功能就是私有化变量
function fun(){
    //定义一个局部变量a
    var a = 0;
    return function(){
        alert(a);
    };
}
var getA = fun();
getA();
```

不能滥用闭包，否则会造成网页的性能问题，严重时可能导致内存泄露。所谓的内存泄露是指程序中已动态分配的内存由于某种原因未释放或无法释放

## DOM

DOM是js操纵HTML和CSS的桥梁

DOM是js操作HTML文档的接口，使文档操作变得非常优雅，简便

DOM最大的特点就是将文档表示为节点树

### nodeType常用属性值

节点的nodeType属性可以显示这个节点具体的类型

| nodeType值 | 节点类型                 |
| ---------- | ------------------------ |
| 1          | 元素节点，例如<p>和<div> |
| 3          | 文字节点                 |
| 8          | 注释节点                 |
| 9          | document节点             |
| 10         | DTD节点                  |

### 访问元素节点

所谓“访问”元素节点，就是指“得到”，“获取”页面上的元素节点

对节点进行操作，第一步就是要得到它

访问元素节点主要依靠document对象

##### document对象

document对象是DOM中最重要的东西，几乎所有DOM的功能都封装在了document对象中

document对象也表示整个HTML文档，他是DOM节点树的根

document对象的nodeType属性值是9 

### 访问元素节点的常用方法

| 方法                              | 功能                   | 兼容性                   |
| --------------------------------- | ---------------------- | ------------------------ |
| document.getElementById()         | 通过id得到元素         | IE6                      |
| document.getElementsByTagName()   | 通过标签名得到元素数组 | IE6                      |
| document.getElementsByClassName() | 通过类名得到元素数组   | IE9                      |
| document.querySelector()          | 通过选择器得到元素     | IE8部分兼容，IE9完全兼容 |
| document.querySelectorAll()       | 通过选择器得到元素数组 | IE8部分兼容，IE9完全兼容 |

```html
<div id="box">我是一个盒子</div>
<p id="para">我是一个段落</p>
```

```js
var box = document.getElementById('box');
var para = docunmet.getElementById('para');
```

### 延迟运行

在测试DOM代码时，通常JS代码一定要写到HTML节点的后面，否则JS无法找到相应HTML节点

可以使用window.onload = function(){}事件，使页面加载完毕后，再执行指定的代码

### querySelector()

querySelector()方法的功能是通过选择器得到元素

```html
<div id="box1">
    <p>
        我是段落
    </p>
    <p class="spec">
        我是段落
    </p>
    <p>
        我是段落
    </p>
</div>
```

```js
var the_p = document.querySelector('#box1 .spec');
```

querySelector()方法只能得到页面上一个元素，如果有多个元素符合条件，则只能得到第一个元素

querySelectorAll() 方法的功能是通过选择器得到元素数组

即使页面上只有一个符合选择器的节点，也将得到长度为1的数组



