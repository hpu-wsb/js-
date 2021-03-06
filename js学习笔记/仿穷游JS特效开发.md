###   正则表达式

正则表达式描述了字符串的构成模式，经常被用于检查字符串是否符合预定的格式要求

检查某个字符串是否是6位数字

```js
//要检查的字符串
var str =' 456789' ;
//正则表达式规则
var regexp = /^\d{6}$/;
//检查
if (regexp.test(str)) {
alert('符合规则' );
}else{
alert('不符合规则');
}
```

正则表达式按位描述规则，是指它是一位一位的描述字符串的构成形式

用/内容/的语法形式，可以快速创建正则表达式

也可以用new RegExp('内容')的形式，创建正则表达式

使用typeof运算符检查正则表达式的类型，结果是object

| 元字符 | 功能                                       |
| ------ | ------------------------------------------ |
| \d     | 匹配一个数字                               |
| \D     | 匹配一个非数字字符                         |
| \w     | 匹配一个单字字符                           |
| \W     | 匹配一个非单字字符                         |
| \s     | 匹配一个空白字符，包括空格，制表符和换行符 |
| .      | 任意字符                                   |

如果使用new RegExp()写法，反斜杠需要多写一个

### 字符的转义

在特殊字符之前的反斜杠\表示下一个字符不是特殊字符，应该按照字面理解

### 方括号表示法

使用方括号比如[xyz]，可以创建一个字符集合，表示匹配方括号中的任意字符

可以使用短横-来指定一个字符范围，^表示否定

| 元字符 | 等价的方括号表示法 |
| ------ | ------------------ |
| \d     | [0-9]              |
| \D     | [^0-9]             |
| \w     | [A-Za-z0-9_]       |
| \W     | [^A-Za-z0-9_]      |

###  量词

| 量词  | 意义                                           |
| ----- | ---------------------------------------------- |
| *     | 匹配前一个表达式0次或多次，等价于{0,}          |
| +     | 匹配前面一个表达式1次或者多次。等价于{1，}     |
| ?     | 匹配前面一个表达式0次或者一次。等价于{0，1}    |
| {n}   | n是一个正整数，匹配了前面一个字符刚好出现了n次 |
| {n,}  | n是一个正整数，匹配前一个字符至少出现了n次     |
| {n,m} | n和m都是整数。匹配前面的字符至少n次，最多m次   |

### 修饰符

用于使用正则表达式实现高级搜索

| 修饰符 | 意义             |
| ------ | ---------------- |
| i      | 不区分大小写搜索 |
| g      | 全局搜索         |

### 正则表达式的相关方法

| 方法   | 简介                                                     |
| ------ | -------------------------------------------------------- |
| test() | 测试某字符串是否匹配正则表达式，返回布尔值               |
| exec() | 根据正则表达式，在字符串中进行查找，返回结果数组或者null |

### 字符串的相关方法

| 方法      | 简介                                                         |
| --------- | ------------------------------------------------------------ |
| search()  | 在字符串中根据正则表达式进行查找匹配，返回首次匹配到的位置索引，测试不到则返回-1 |
| match()   | 在字符串中根据正则表达式进行查找匹配，返回一个数组，找不到则返回null |
| replace() | 使用替换字符串替换掉匹配到的子字符串，可以使用正则表达式     |
| split()   | 分隔字符串为数组，可以使用正则表达式                         |

