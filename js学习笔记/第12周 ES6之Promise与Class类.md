## Promise

Promise是异步操作的一种解决方案 

Promise一般用来解决层层嵌套的回调函数的问题

实例化构造函数生成实例对象 

 const p = new Promise(resolve, reject) => {

 Promise有3种状态，- 开始是pending (未完成) 

执行resolve,变成fulfilled(resolved),已成功

执行reject, 变成rejected, 已失败

### then()

 pending->fulfilled时，执行then的第一个回调函数

pending->rejected时，执行then的第二个回调函数

在then的回调函数中，return后面的东西，会用Promise包装一下

```js
return undefined
//等价于
return new Promise((resolve,reject)=>{
    resolve(undefined);
});  
```

### catch()

catch专门用来处理rejected状态，本质上是then的特例

捕获前面的错误

### finnally()

当Promise状态发生变化时，无论什么变化都会执行，不变化不执行 

### Promise.resolve()和Promise.reject()

当Promise.resolve()接收的是Promise对象时，直接返回这个Promise对象，什么都不做

### Promise.all

用来关注多个Promise对象的状态变化

传入多个Promise实例，包装成一个新的Promise实例返回

所有状态都变成resolved，最终的状态才会变成resolved

只要有一个变成rejected，最终的状态就变成rejected

### Promise.race()和Promise.allSettled

Promise.race()的状态取决于第一个完成的 Promise实例对象，如果第一一个完成的成功了，那最终的就成功;如果第一个完成的失败了，那最终的就失败

 Promise.allSettled()的状态与传入的Promise状态无关,永远都是成功的,它只会忠实的记录下各个Promise的表现

### Promise的注意事项

 参数如果不是Promise数组，会将不是Promise的数组元素转变成Promise对象

```js
//异步加载图片
const loadimgAsync = url=>{
    return new Promise((resolve,reject)=>{
        const img=new image();
        img.onload=()=>{
            resolve(img);
        };
        img.onerror=()=>{
            reject(new Error(`Could not load image at ${url}`));
        };
        img.src=url;
    });
};
const imgDOM=document.getElementByld('img');
loadimgAsync(
'https//img.mukewang.com/5f057a6a0001f4f918720764.jpg')
.then(img=>{
    console.log(img.src);
    setTimeout(()=>{
        imgDOM.src=img.src;
    },1000);
})
.catch(err=>{
    console.log err;
});
```

## Class(类)

类可以看作是对象的模板，用一个类可以创建出许多不同的对象

实例化时执行构造方法，所以必须有构造方法，但可以不写出来

### Class的两种定义形式

声明形式：

```js
class Person{
    constructor(){}
    speak(){}
}
```

表达式形式

```js
const Person=class{
    constructor(){
        console.log('constructor');
    }
    speak(){}
};
```

### 实例属性，静态方法和静态属性

实例属性：

```js
class Person{
    constructor(name){
        this.name=name;//实例属性
    }
}
```

方法就是值为函数的特殊属性

### extends

子类继承父类

```js
class Person {
constructor(name, sex) {
this.name = name;
this.sex = sex;
this.say = function 0) 0;
speak() }
static speak() {}
Person.version = '1.0';
class Programmer extends Person{
    constructor(name,sex){
        super(name,sex);
    }
}
const zs = new Programmer('zs','男')
```

改写继承的属性或方法使用同名覆盖

### super

作为函数调用

代表父类的构造方法，只能用在子类的构造方法中，用在其他地方就会报错





