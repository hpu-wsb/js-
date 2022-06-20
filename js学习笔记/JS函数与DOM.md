

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

### 节点操作

改变元素节点中的内容可以使用了相关属性：

1.innerHTML:以HTML语法设置节点中的内容

2.innerText：以纯文本的形式设置节点中的内容

```html
<div id="box"></div>
<script>
    var oBox = document.getElementById('box')；
    oBox.innerHTML = '慕课网';
</script>
```

如何改变元素节点的CSS样式

```js
oBox.style.backgroundColor = 'red';
oBox.style.backgroundImagr = 'url(images/1.jpg)'; 
oBox.style.fontSzie = '32px';
```

```html
<style>
    .box{
        width:200px;
        height:200px;
        border:1px solid #000;
    }
</style>
<div class="box" id="box">
    
</div>
<script>
    var oBox = document.getElementById('box');
    oBox.style.backgroundColor = 'red';
</script>
```

 如何改变元素节点的HTML属性

标准W3C属性，如src,href等等，只需要直接打点进行更改即可

```js
oImg.src = 'images/2.jpg'
```

不符合W3C标准的属性，要使用setAttribute()和getAttribute()来设置，读取

```js
oBox.setAttribute('data-n',10);
var n = oBox.getAttribute('data-n');
alert(n);
```

### 节点的创建

document.createElement()方法用于创建一个指定tagname的HTML元素

```js
var oDiv = document.createElement('div')
```

##### 孤儿节点

新创建出的节点时“孤儿节点”，这意味着它并没有被挂载到DOM树上，我们无法看见它

必须使用appendChild()或insertBefore()方法将孤儿节点插入到DOM树上

##### appendChild()

任何已经在DOM书上的节点们都可以调用appendChild()方法，它可以将孤儿节点挂载到它的内部，成为它的最后一个子节点

```js
父节点.appendChild(孤儿节点);
```

insertBefore()

任何已经在DOM树上的节点，都可以调用inserBefore()方法，它可以将孤儿节点挂载到它的内部，成为它的“标杆子节点”之前的节点

```js
父节点.insertBefore(孤儿节点，标杆节点)；
```

```html
<div id="box">
    <p>
        我是原本的段落0
    </p>
    <p>
        我是原本的段落1
    </p>
    <p>
        我是原本的段落2 
    </p>
</div>
```



```js
var obox = document.getElementById('box');
var oPs = oBox.getElementsByTagName('p')
//创建孤儿节点
var oP = document.createElement('p');
//设置内部文字
oP.innerText = '我是新来的'
//上树
//oBox.appendChild(oP);
oBox.insertBefore(oP,oPs[0]);
```

### 移动节点

如果将已经挂载到DOM树上的节点成为appendChild()或者insertBefore()的参数，这个节点将会被移动

```js
新父节点.appendChild(已经有父亲的节点);
```

```js
新父节点.insertBefore(已经有父亲的节点，标杆子节点)；
```

这意味着一个节点不能同时位于DOM树的两个位置

### 删除节点	

removeChild()方法从DOM中删除一个子节点

```js
父节点.removeChild(要删除子节点)
```

节点不能主动删除自己，必须由父节点删除 

### 克隆节点

cloneNode()方法可以克隆节点，克隆出的节点是"孤儿节点"

```js
var 孤儿节点 = 老节点.cloneNode()
```

```js
var 孤儿节点 = 老节点.cloneNode(true);
```

参数是一个布尔值，表示是否采用深度克隆：如果为true，则该节点所有后代节点也都会被克隆，如果为false,则只克隆该节点本身

### 事件监听

DOM允许我们书写JavaScript代码可以让HTML元素对事件做出反应

“监听”顾名思义，就是让计算机随时能够发现这个事件发生了，从而执行程序员预先编写的一些程序

设置事件监听的方法主要有onxxx和addEventListener()两种

最简单的是设置它们的onxxx属性

```js
oBox.onclick = function(){
    //点击盒子时，将执行这里的语句
}
```

```html
<style>
    div{
        width:200px;
        height:200px;
        background-color:#ccc;
    }
</style>
<div id = "box">
    
</div>
<script>
    var oBox = docunment.getElementById('box');
    //给box这个盒子添加点击事件监听
    oBox.onclick = function(){
        alert('你好，我是点击事件函数')
    }
</script>
```

### 常见得鼠标事件监听

| 事件名       | 事件描述                                |
| ------------ | --------------------------------------- |
| onclick      | 当鼠标单击某个对象                      |
| ondblclick   | 当鼠标双击某个对象                      |
| onmousedown  | 当某个鼠标按键在某个对象上被按下        |
| onmouseup    | 当某个鼠标按键在某个对象上被松开        |
| onmousemove  | 当某个鼠标按键在某个对象上被移动        |
| onmouseenter | 当鼠标进入某个对象(相似事件onmouseover) |
| onmouseleave | 当鼠标离开某个对象(相似事件onmouseout)  |
|              |                                         |

###  常见得键盘事件监听

| 事件名     | 事件描述                                                     |
| ---------- | ------------------------------------------------------------ |
| onkeypress | 当某个键盘的键被按下(系统按钮如箭头键和功能键无法得到识别)   |
| onkeydown  | 当某个键盘得键被按下(系统按钮可以识别，并且会先于onkeypress发生) |
| onkeyup    | 当某个键盘的键被松开                                         |

### 常见的表单事件监听

| 事件名   | 事件描述                            |
| -------- | ----------------------------------- |
| onchange | 当用户改变域的内容                  |
| onfocus  | 当某元素获得焦点(如tab键或鼠标点击) |
| onblur   | 当某元素失去焦点                    |
| onsubmit | 当表单被提交                        |
| onreset  | 当表单被重置                        |

### 常见的页面事件监听

| 事件名   | 事件描述               |
| -------- | ---------------------- |
| onload   | 当页面或图像被完成加载 |
| onunload | 当用户退出页面         |

### 事件传播

事件的传播是：先从外到内，然后再从内到外

##### onxxx写法只能监听冒泡阶段

冒泡阶段从内到外

捕获阶段从外到内

##### addEvebtListener()方法

DOM0级事件监听：只能监听冒泡阶段

```js
oBox.onclick = function (){
    
};
```

DOM2级事件监听   true捕获   false冒泡

```js
oBox.addEventListener('click',function(){
    //这是事件处理函数
}, true);
```

最内部元素不再区分捕获和冒泡阶段，会先执行写在前面的监听，然后执行后写的监听

如果给元素设置相同的两个或多个同名事件，则DOM0级写法后面写的会覆盖先写的；而DOM2级会按顺序执行

### 事件对象

事件处理函数提供一个形式参数，它是一个对象，封装了本次事件的细节     

这个参数通常用单词event或字母e来表示

```js
oBox.onmousemove = function(e){
    //对象e就是这次事件的“事件对象”
}
```

| 属性    | 属性描述                           |
| ------- | ---------------------------------- |
| clientX | 鼠标指针相对于浏览器的水平坐标     |
| clientY | 鼠标指针相对于浏览器的垂直坐标     |
| pageX   | 鼠标指针相对于整张网页的水平坐标   |
| pageY   | 鼠标指针相对于整张网页的垂直坐标   |
| offsetX | 鼠标指针相对于事件源元素的水平坐标 |
| offsetY | 鼠标指针相对于事件源元素的垂直坐标 |

##### e.charCode和e.keyCode

e.charCode属性通常用于onkeypress事件中，表示用户输入的字符的“字符码”

e.keyCode属性通常用于onkeydown事件和onkeyup中，表示用户按下的按键的“键码”

###### charCode字符码

| 字符          | 字符码   |
| ------------- | -------- |
| 数字0~数字9   | 48 ~ 57  |
| 大写字母A ~ Z | 65 ~ 90  |
| 小写字母a ~ z | 97 ~ 122 |

######  keyCode键码

| 按键            | 键码           |
| --------------- | -------------- |
| 数字0 ~ 9       | 48 ~ 57        |
| 字母不分大小a~z | 65~90          |
| 四个方向键←↑→↓  | 37，38，39，40 |
| 回车键          | 13             |
| 空格键          | 32             |

###### e.preventDefault()

e.preventDefault()方法用来阻止事件产生的“默认动作”

一些特殊的业务需求，需要阻止事件的“默认动作”

###### onmousewheel鼠标滚轮事件

它的事件对象e提供deltaY属性表示鼠标滚动方向，向下滚动时返回正值，向上滚动时返回负值

###### e.stopPropagation()方法

e.stopPropagation()方法用来阻止事件继续传播

在一些场合，非常有必要切断事件继续传播，否则会造成页面特效显示出bug

##### 批量添加事件监听的性能问题

每一个事件监听注册都会消耗一定的系统内存，而批量添加事件会导致监听数量太多，内存消耗会非常大

实际上，每个<li>的事件处理函数都是不同的函数，这些函数本身也会占用内存 

新增元素必须分别添加事件监听，不能自动获得事件监听

大量事件监听，大量事件处理函数都会产生大量消耗内存

### 事件委托

利用事件冒泡机制，将后代元素事件委托给祖先元素

##### e.target和e.currentTarger

事件委托通常需要结合使用e.target

| 属性          | 属性描述                           |
| ------------- | ---------------------------------- |
| target        | 触发此事件的最早元素，即事件源元素 |
| currentTarget | 事件处理程序附加到的元素           |

##### 事件委托使用场景

当有大量；类似元素需要批量添加事件监听时，使用事件委托可以减少内存开销

当有动态元素节点上树时，使用事件委托可以让新上树的元素具有事件监听

##### 注意事项

onmouseenter和onmouseover都表示鼠标进入，区别为：

onmouseenter不冒泡，onmouseover冒泡

onmouseenter相当于你事件处理函数附加给了哪个dom

### 定时器

setInterval()函数可以重复调用一个函数，在每次调用之间具有固定的时间间隔

```js
setInterval(function(){
    //这个函数将自动被以固定间隔时间调用
},2000);
```

### 函数的参数

setInterval()函数可以接收第3，4.....个参数，他们将按照顺序传入函数

```js
setInterval(function(a,b){
    //形式参数a的值是88，形式参数b的值是66
},2000,88,66)
```

具名函数也可以传入setInterval

```js
var a=0;
function(){
    console.log(a++);
}
setInterval(fun,1000);
```

#### 清除定时器

clearInterval()函数可以清楚一个定时器

```js
//设置定时器，并用timer变量接收这个定时器
var timer=setInterval(function(){
    
},2000);
oBtn.onclick=function(){
    clearInterval(timer);
}
```

### 延时器

setTimeout()函数可以设置一个延时器，当指定时间到了之后，会执行函数一次，不会重复执行。

```js
setTimeout(function(){
    //这个函数会在2秒后执行一次
},2000);
```

clearTimeout()函数可以清除延时器 

### 异步语句

setInterval()和setTimeout()是两个异步语句

异步：不会阻塞CPU继续执行其他语句，当异步完成时，会执行“回调函数”

### 使用定时器实现动画

### JS和CSS3结合实现动画

css3的transition过度属性可以实现动画

JavaScript可以利用CSS3的transition属性轻松实现元素动画

JS和CSS3结合实现动画规避了定时器制作动画的缺点

### 函数节流

一个函数执行一次后，只有大于设定较高的执行周期后才允许执行第二次

函数节流非常容易实现，只需要借助setTimeout()延时器

```js
var lock=true;
function 需要节流的函数(){
    //如果锁是关闭状态，则不执行
    if(!lock)return;
    //函数核心语句
    
    //关锁
    lock=false;
    //指定毫秒数后将锁打开
    setTimeout(function(){
        lock=true;
    },2000);
}
```

