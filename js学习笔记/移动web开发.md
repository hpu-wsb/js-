### 像素

分辨率

物理像素(设备像素)

##### css像素（逻辑像素）（设备独立像素）

实际开发中使用的像素 

设备像素比

标清屏和高清屏

缩放：改变css像素的大小

PPI/DPI：每英寸的物理像素点

视口

```html
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,maximum-scale=1,minimum-scale=1">
```

用js获取

```js
console.log(window.innerWidth)
```

### 图标字体

引入图标字体

### Flex布局(弹性布局)

采用flex布局的元素，称为flex容器

flex容器的所有子元素自动成为容器成员，称为flex项目

##### diplay属性

display属性决定是否使用flex布局

```css
.box{display:flex|inline-flex}
```

flex:将对象作为弹性伸缩盒显示

inline-flex：将对象作为内联块级弹性伸缩盒显示

##### direction属性

flex-direction属性决定主轴的方向(即项目的排列方向)

```css
.box{flex-direction:row|row-reverse|column|column-reverse;}
```

row(默认值)：主轴为水平方向，起点在左端

row-reverse：主轴为水平方向，起点在右端

column：主轴为垂直方向，起点在上沿

##### wrap属性

默认情况下，项目都排在一条线上（又称轴线）上

flex-wrap属性定义，如果一条轴线排不下，如何换行

```css
.box{flex-wrap:nowrap|wrap|wrap-reverse;}
```

nowrap(默认)：不换行

wrap:换行，第一行在上方

wrap-reverse：换行，第一行在下方

##### flex-flow

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值是row nowrap

```css
.box{flex-flow:<flex-direction>||<flex-wrap>}
```

##### justify-content属性

justify-content属性定义了项目在主轴上的对其方式

```css
.box{justify-content:flex-start|flex-end|center|space-between|space-around;}
```

flex-start(默认值)：左对齐

flex-end：右对齐

center：居中

space-between：两端对齐，项目之间的间隔都相等

space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边框的间隔大一倍

##### align-items属性

align-items属性定义项目在交叉轴上如何对齐

```css
.box{align-items:flex-start|flex-end|center|baseline|stretch;}
```

flex-start:交叉轴的起点对齐

flex-end：交叉轴的终点对齐

cenetr：交叉轴的中点对齐

baseline：项目的第一行文字的基线对齐

stretch(默认值)：如果项目未设置高度或设为auto，将占满整个容器的亮度

##### align-conten属性

 align-content属性定义了多根轴线(多行)在交叉轴上的对齐方式

如果项目只有一根轴线(一行)，该属性不起作用

```css
.box{align-content:flex-start|flex-end|center|space-between|space-around|stretch;}
```

flex-start：交叉轴的起点对齐

space-around：每根轴线两侧的间隔都相等，所以，轴线之间的间隔比轴线与边框的间隔大一倍

stretch(默认值)：轴线占满整个交叉轴

### 项目的属性

##### order属性

order属性定义项目的排列顺序，数值越小，排列越靠前，默认为0

```css
.item{order:<integer>;}
```



##### flex-grow属性

flew-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大

如果所有项目的flex-grow属性都为1，则他们将等分剩余空间

如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍

```css
.item{flex-grow<number>;/*default0*/}
```

如果有的项目有flex-grow属性，有的项目有width属性，有flex-grow属性的项目将等分剩余空间

##### flex-shrink属性

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将减小

如果所有项目的flex-shrink属性都为1，空间不足时，都将等比例缩小

如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小，负值对该属性无效

```cs
.item{flex-shrink<number>;/*default 1*/}
```



##### flex-basis属性

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间

浏览器根据这个属性，计算主轴是否有多余空间

它的默认值时auto，即项目的本来大小

```css
.item{flex-basis:<length>;|auto;/*default auto*/}
```



##### flex属性

flex属性是flex-grow，flex-shrink，flex-basis的简写，默认值为0 1 auto，后两个属性可选

该属性有两个快捷值：auto(1 1 auto)和none(0 0 auto)

```css
.item{flex:none|[<flex-grow><flex-shrink>?||<flex-basis>]}
```

##### align-self属性

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性，默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

```css
.item{align-self:auto|flex-start|flex-end|center|baseline|stretch;}
```

### 媒体查询

```css
@media screen and (min-width:900px){
    body{
        background-color:red;
    }
}
```

##### 为什么需要媒体查询

一套样式不可能适应各种大小的屏幕，针对不同的屏幕大小写样式让我们的页面在不同大小的屏幕上都能正常显示

##### 媒体类型

screen(屏幕适配),print(打印设备),speech(屏幕阅读器)，all(default)

##### 媒体查询中的逻辑

与（and），或（，），非（not）

##### 媒体特征表达式

```css
width/max-width/min-width
-webkit-device-pixel-ratio/-webkit-max-device-pixel-ratio/-webkit-min-pixel-ratio(设备像素比)
orientation:landscape(横屏)/portrait(竖屏)
height
device-width/device-height
screen.width/screen.htight
aspect-ratio(视口的宽高比)
```

