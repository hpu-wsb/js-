## *流程控制语句*

### if语句

if语句是最简单的条件语句，也称为选择语句

```js
if(测试条件){
    //语句一
    //当测试条件为真，则执行这里
}else{
    //语句二
    //当测试条件为假，则执行这里
}
```

 else if()条件分支“暗含”不符合之前所有条件，要深刻理解什么叫“否则如果”

### switch语句

除if语句之外，JS还提供了另外一种选择语句：switch语句

switch语句的用途：当一个变量被分类讨论的情形

在switch()的圆括号中一般是一个变量名，这个变量将被分类讨论

case表示情况 

```js
switch(){
       case 1:
       case 2:
       		break;
       }
```

必须主动调用break来跳出switch语句体,如果不书写break，则后面的所有case都将被视为匹配，直到遇见break

### 三元运算符

根据某个条件是否成立，在两个不同值中选择变量的值

条件表达式 ? 表达式1 : 表达式2

### for循环语句

```js
for (var i = 1; i <= 10 ; i++){
    console.log(i)
}
```

表达式var i = 1；表示定义一个循环变量 i ，并赋值为1

表达式i <=10; 表示继续执行循环的条件，只要这个条件为真，则会一直执行

表达式i++用来更新循环变量，使循环变量的值越来越趋向于终点

累加器

```js
var sum = 0
for (var i = 1; i <=100; i++){
    sum += i;
}
console.log(sum);
```

### while循环的语法

while语句事先不指定循环开始，结束的范围，只要测试条件满足，就一直执行循环体

```js
while(测试条件){}
```

### break

break表示立即终止循环，它只能用在循环语句中，在for循环和while循环中都可以使用

```js
for(var i = 0; i < 10; i++) {
    console.log(i);
    if (i == 4){
        break;
    }
}
```

break用在while语句中，通常和while(true){}搭配使用 

```js
var n = 1;

while(true){
    if (n * n > 456789){
        console.log(n);
        break;
    }
    n++;
}
```

### continue

continue用于跳过循环中的一个迭代，并继续执行循环中的下一个迭代。for循环更经常使用continue

```js
for (var i = 0; i < 5; i++){
    if(i == 3){
        continue;
    }
    console.log(i);
}
```

### do while循环

do-while循环是“先执行循环体，然后测试条件是否满足“

do-while循环将循环执行条件写到了循环体的后面，这样一来，循环体一定会至少执行一次，然后再检测循环执行条件是否为true，决定是否继续执行循环体

```js
do {
循环体
}while(循环执行条件)
```

### 随机数函数

```js
Math.ra ntom()
```

得到[a,b]区间的整数

```js
parseInt(Math.random() * (b - a + 1)) + a
```

do-while 小案例：
随机两个变量，dx和dy，他们都在[-4，4]之间随机取值，但是不能都为0

```js
do{
    var dx = parseInt(Math.random() * 9) - 4;
    var dy = parseInt(Math.random() * 9) - 4;
}while(dx == 0 && dy ==0)
    console.log(dy,dx);
```

### 循环的嵌套

```js
for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
        console.log(i,j);
    }
}
```

## 数组 

```JS
var scoreArr = [96,97,76,87,87,90,91,100,78,56];
```

###  下标越界

JavaScript规定，访问数组中不存在的项会返回undefined，不会报错

### 数组的长度

数组的length属性表示它的长度

```js
var arr = ['A','B','C','D'];
console.log(arr.length);
```

数组最后一项的下标是数组的长度减1

### 数组的遍历

数组的最大的优点就是方便遍历

```js
var arr = ['A','B','C','D'];
for (var i = 0; i < arr.length;i++){
    console.log(arr[i]);
}
```

### 数组的常用方法

| 方法      | 功能           |
| --------- | -------------- |
| push（）  | 在尾部插入新项 |
| pop()     | 在尾部删除     |
| unshift() | 在头部插入新项 |
| shift()   | 在头部删除     |
|           |                |

##### push()方法

如果要推入多项，可以用逗号隔开

调整push（）方法后，数组会立即改变，不需要赋值

##### pop()方法

pop()方法不仅会删除数组末项，而且会返回被删除的项

##### unshift()方法

如果要插入多项，可以用逗号隔开

调用unshift()方法后，数组会立即改变，不需要赋值

##### shift()方法

与unshift()相反，shift()方法用来删除数组中下标为0的项

shift()方法不仅会删除数组首项，而且会返回被删除的项

##### splice()方法

splice()方法用于替换数组中的指定项

```js
var arr = ['A','B','C','D','E','F','G'];
arr.splice(3,2,'X','Y','Z');
console.log(arr);
//['A','B','C','X','Y','Z','F','G']
```

splice()方法可以用于在指定位置插入新项

```JS
var arr = ['A','B','C','D'];
arr.splice(2,0,'X','Y','Z');
console.log(arr);
//['A','B','C','X','Y','Z','C','D']
```

splice()方法可以用于删除指定项

```js
var arr = ['A','B','C','D','E','F','G'];
arr.splice(2,4);  //没有设置替换的新项，仅删除4项
console.log(arr);  //['A','B','C']
```

slice()方法

silce()方法用于得到子数组，类似于字符串的slice()方法

slice(a,b)截取的子数组从下标为a的项开始，到下标为b(但不包括下标为b的项)结束

slice()不会更改原数组 

slice()如果不提供第二个参数，则表示从指定项开始，提取所有后续所有项作为子数组

slice()方法的参数允许为负数，表示数组的倒数第几项 

```js
var arr = ['A','B','C','D','E','F'];
var child_arr1 = arr.slice(2,5);
var child_arr2 = arr.slice(2);
console.log(child_arr1);
console.log(child_arr2);  
```

##### join()方法和split()方法

数组的join()方法可以使数组转为字符串；字符串的split()方法可以使字符串转为数组

 join的参数表示以什么字符作为连接符，如果留空则默认以逗号分隔，如同调用toString()方法

split()的参数表示以什么字符拆分字符串，一般不能留空

##### concat()方法

concat()方法可以合并连接多个数组

```js
var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8];
var arr3 = [9,10,11];
var arr = arr1.concat(arr2,arr3);
console.log(arr);//[1,2,3,4,5,6,7,8,9,10,11] 
```

concat()方法不会改变原数组

##### reverse()方法

reverse()方法用来将一个数组中的全部项顺序置反

```js
var arr = ['A','B','C','D'];
arr.reverse();
console.log(arr);//['D','C','B','A']
```

##### indexOf()和includes()方法

indexOf()方法的功能是搜索数组中的元素，并返回它所在的位置，如果元素不存在，则返回-1

includes()方法的功能是判断一个数组是否包含一个指定的值，返回布尔值(true和false)

##### 有关数组排序

数组有sort()方法可以用于数组排序

### 数组去重

```js
var arr = [1,1,1,2,2,3,3,3,2,1];
//结果数组
var result = [];
//遍历原数组
for(var i = 0 ; i<arr.length ; i++){
    //判断遍历到的这项是否在结果数组中，如果不在就推入
    //includes方法用来判断某项是否在数组中
    
    if(result.includes(arr[i]))[
        result.push(arr[i ])
    ]
}
```

### 随机取样

```js
var arr = [3,6,10,5,8,9];
var result = [];
for(var i = 0; i < 3;i++){
    var n = parseInt(Math.random() * arr.length);
    result.push(arr[n]);
    arr.splice(n,1);
}
console.log(result)
```

### 冒泡排序

```js
var arr = [6,2,9,3,8,1];
//一趟一趟比较，趟数序号就是i
for(var i = 1;i < arr.length;i++){
    //内层循环负责两两比较
    for(var j = arr.length - 1; j >= i;j--){
        //判断项的大小
        if(arr[j] < arr[j-1]){
            //这一项比前一项还小了，那么就要交换两个变量的位置
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j - 1] = temp;
        }
    }
}
console.log(arr);
```

### 二维数组

二维数组：以数组作为数组元素的数组，即数组的数组

二维数组可以看作是矩阵

```js
var matrix = [
    [11,33,55],
    [22,33,44],
    [36,49,52],
    [56,10,23]
];
console.log(matrix.length);
for(var i = 0;i < 4;i++){
    for(var j = 0;j < 3;i++ ){
         console.log(matrix[i][j]);
    }  
}
```

### 基本类型和引用类型

基本类型：number,boolean,string,undefined,null

引用类型：array,object,function,regexp

|            | 举例                                  | 当var a = b变量传值时                            | 当用==比较时                                 |
| ---------- | ------------------------------------- | ------------------------------------------------ | -------------------------------------------- |
| 基本类型值 | 数字型，字符串型，布尔型，undefined型 | 内存中产生新的副本                               | 比较值是否相等                               |
| 引用类型值 | 对象，数组                            | 内存中不产生新的副本，而是让新变量指向同一个对象 | 比较内存地址是否相同，即比较是否是同一个对象 |

### 深克隆和浅克隆

浅克隆：只克隆数组的第一层，如果是多维数组，或者数组中的项时其他引用类型，则不克隆其他层

```js
var arr1 = [1,2,3,4];
var result = []
for (var i = 0;i<arr1.length;i++){
    result.push(arr1[i]); 
}
console.log(result);
```

深克隆：克隆数组的所有层，要使用递归技术，

