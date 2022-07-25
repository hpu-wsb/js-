## 剩余参数与展开运算符

### 剩余参数

剩余参数永远是个数组，即使没有值，也是空数组

箭头函数的参数部分即使只有一个剩余参数，也不能省略圆括号

可以使用剩余参数替代arguments获取实际参数

剩余参数只能是最后一个参数，之后不能再有其他参数 

```js
const add=(...args)=>{
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];
    }
    return sum;
}
```

剩余参数不一定非要作为函数参数使用

```js
const [num,...args]=[1,2,3,4];
```

### 展开运算符

 把数组转换为参数列表

#####  对象展开运算符

对象不能直接展开，要在{}中展开 

对象的展开：把属性罗列出来，用逗号分隔，放到一个{}中，构成新对象

对象拥有全部属性，相同属性，后者覆盖前者

空对象的展开没有任何效果

如果展开的不是对象，则会自动将其转为对象，再将其属性罗列出来

## Set 和 Map 数据结构

### Set

数组是一系列有序的数据集合

set是一系列无序，没有重复值的数据集合

set没有下标去标示每一个值，所以set是无序的，也不能像数组那样通过下标去访问set的成员

 set对重复值的判断基本遵循严格相等(===)

数组或字符串去重时使用set

```js
//数组去重
//[1,2,1]
const s=new Set([1,2,1]);
console.log(s);

console.log([...new Set([1,2,1])]);
```

```js
//字符串去重
const s=new Set('abbacbd');
console.log([...s].join(''));
console.log(S);

console.log([...new Set('abbacbd')].join(''));
```

不需要通过下标访问，只需要遍历时使用set

为了使用set提供的方法和属性时

```js
(add delete clear has forEach size登)
```

存放DOM元素

```js
const s=new Set(document.querySelectorAll('p'));
console.log(s);
s.forEach(function (elem){
    elem.style.color='red'
})
```

### Map(映射)

map和对象都是键值对的集合

 使用set添加的新成员，键如果已经存在，后添加的键值对覆盖已有的

只能传二维数组，而且必须体现出键和值

```js
const m = new Map([
    [p1,{
        color:'red',
        backgroundColor:'yellow',
        fontSize:'40px'
    }],
     [p2,{
        color:'green',
        backgroundColor:'pink',
        fontSize:'40px'
    }],
    [p2,{
        color:'blue',
        backgroundColor:'orange',
        fontSize:'40px'
    }],
]);
m.forEach((color, elem) => {
elem.style.color = color;
});
console.log(m);
```

### iterator遍历器

```js
const it = [1, 2][Symbol.iterator]();
console.log it.next(); // {value: 1, done: false}
console.log it.next(); // {value: 2, done: false}
console.log it.next(); // {value: undefined, done:true}
console.log (it.next(); // {value: undefined, done:true}
```

it：可遍历对象

iterator：Symbol.iterator (可遍历对象的生成方法) -> it (可遍历对
象) -> it.next() -> it.next() -> ... (直到done为.true)

iterator遍历器是一个统一的遍历方式   

##### for...of

与break，continue一起使用

```js
const arr=[1,2,3];
for(const item of arr){
    if(item===2){
        continue;
    }
    console.log(item);
}
```

在for...of中取得数组的索引

keys()得到的是索引的可遍历对象，可以遍历出索引值

values()得到的是值的可遍历对象，可以遍历出值

```js
const arr=[1,2,3];
console.log(arr.keys());
for(const of arr.keys()){
    console.log(key);
}
```

entries()得到的是索引+值组成的数组的可遍历对象

只会遍历出那些done为false时，对应的value值