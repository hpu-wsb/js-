## Cookie

Cookie全称HTTP Cookie

是浏览器存储数据的一种方式

因为存储在用户本地，而不是存储在服务器上，是本地存储

一般会自动随着浏 览器每次请求发送到服务器端

#### Cookie有什么有

利用Cookie跟踪统计用户访问该网站的习惯，比如什么时间访问，访问了哪些页面等等

### Cookie的基本用法

写入Cookie   :  document.cookie='username=zs'

不能一起设置，只能一个一个设置

读取Coookie  :  console.log(document.cookie)

### Cookie的属性

名称和值：最重要的两个属性，创建Cookie时必须填写，其他属性可以使用默认值

Cookie的名称或值如果包含非英文字母，则写入时需要使用encodeURIComponent()编码，读取时使用decodeURIComponent()解码

```js
document.cookie='username=${encodeURIComponent('张三 ')}'
```

失效时间：对于失效的Cookie，会被浏览器清除

如果没有设置失效时间，这样的Cookie称为会话Cookie，它存在于内存中，当会话结束时，也就是浏览器关闭时，Cookie消失

 想长时间存在，设置expires或max——age

##### Domain域

限定 访问cookie的范围(不同域名)

使用js只能读写当前域或父域的cookie，无法读写其他域的cookie

##### path路径

path限定了访问cookie的范围(同一域名)

使用js只能读写当前路径和上级路径额cookie，无法读写下级路径的cookie

当name，domain，path都想同时，才是同一个cookie

##### HttpOnly

设置了HttpOnly属性的cookie不能通过JS去访问

##### Secure安全标志

secure限定了只有在使用了https而不是http的情况下才可以发送给服务端

domain，path，secure都要满足条件，还不能过期的cookie才能随着请求发送到服务器端

#### cookie的封装

使用封装好的cookie实现网站语言切换

