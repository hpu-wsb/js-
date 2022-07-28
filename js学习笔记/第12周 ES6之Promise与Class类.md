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

