## Module

 把复杂的功能拆成小的功能

模块：一个一个的局部作用域的代码块

模块系统需要解决的主要问题 

1.模块化的问题

2.消除全局变量

3.管理加载顺序

###  Module的两种导出和导入

##### export default 和import

导出的东西可以被导入，并访问到

一个模块没有导出，也可以将其导入

被导入的代码都会执行一遍，也仅会执行一遍

## 2.Babel 与 Webpack 

### babel  

babel是js的编译器，用来将es6的代码，转换成es6之前的代码

### Node.js和npm

Node.js是个平台或者工具，对应浏览器

npm:node包管理工具

### Webpack

webpack是静态模块打包器，当webpack处理应用程序时，会将所有这些模块打包成一个或多个文件

webpack可以处理js/css/图片，图标字体等单位

开发过程中存在于本体的js/css/图片/图标字体等文件，就是静态的

动态的内容，webpack没办法处理，只能处理静态的

### entry和output

entry指定入口文件

output指定出口文件

### loader 

让webpack能够去处理那些非js文件的模板 

### plugins(插件)

 用于执行范围更广的任务

### 处理css文件

```js
import'./index.css';
```

下载插件

用file-loader处理css文件中的图片