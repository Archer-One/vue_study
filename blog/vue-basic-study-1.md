
# vue
<!--more -->
+ vue是当下很火的一个JavaScript MVVM(Model View View Model)库，其主要功能就是将DOM对象和数据绑定在一起
---
## vue与传统js的不同之处
+ 传统js编程范式：命令式编程
+ vue编程范式：声明式编程
## vue与ide下载
+ [vue.js](https://cn.vuejs.org/js/vue.js)下载
+ [webstorm](https://www.jetbrains.com/webstorm/download/other.html)下载
## vue基础语法
### 使用基础模板
```js
<script src="../js/vue.js"></script>
<script>
    //定义 let(变量)/const（常量）
    const app = new vue({
        el: '#app', //用于挂载要管理的元素
        data: { // 定义数据
            message: "hello， world!",
            name:"hahhaha"
        }
    })
</script>
```
### 基本语法
+ 定义变量：let（变量）、const（常量）
+ 创建实例 let test = new test()
### Mustache语法
+ 在dom对象中使用{{test}},test会被当做数据变量解析
+ 可以进行简单操作并会对类型做自动转换 **{{test1 + test2}}**
    + test1 = 100,test2='分'
    + test1 + test2 = '100分'
+ 可以进行字符串拼接 **{{test1 + ' ' +test2}}**
+ 简单的运算 **{{count * 2}}**
    + count = 100


### DOM对象操作
+ 列表数据——**v-for**
    + 解释：为了利用for循环将列表数据输出
    + data中定义：movies = ['海贼王','大话西游','星际穿越']
    + 使用：```<ui><li v-for="item in movies">{{item}}</li></ui>```
+ 方法绑定——**v-on**
    + 解释：为某个动作添加函数例如点击
    + 使用：```<button v-on:click="add()">+</button>```
    + 使用（语法糖）：```<button @:click="add()">+</button>``` 
+ 一次性使用——**v-once**
    + 解释：数据解析只有在最开始创建实例的时候解析一次，后续不会因为该变量变化改变
    + 使用：```<h2 v-once>{{message}}</h2>```
+ 内含url——**v-html**
    + 解释：引入url
    + data中定义：```url: '<a href="http://www.baidu.com">百度一下</a>'```
    + 使用：```<h2 v-html="url"></h2>```
+ 不解析——**v-pre**
    + 解释：希望符合Mustache变量解析规则的字符串不解析只是作为字符串输出
    + 使用：```<h2 v-pre>{{message}}</h2>```
+ 解析完显示——**v-cloak**
    + 当dom中的变量还没被解析时可能会首先将变量名显示出来，为了只有解析完成时才显示从而使用v-cloak
    + 使用：
        ```html
        <style>
            [v-cloak]{
                display: none;
            }
        </style>
        <div id="app" v-cloak>
            <h2>{{message}}</h2>
        </div>
        ```
+ 属性绑定——**v-bind**
### vue属性
#### 生命周期
+ 通过一些自带的钩子在某些生命周期完成用户特殊要求
#### el
+ 通过id获取DOM控件
#### data
+ 声明数据
    ```
    message:'hello',
    movies: ['海贼王','大话西游','星际穿越'],
    baseStyleColor:{color: "red"}
    ```
#### computed
+ 计算属性，通过上面的数据声明可以来最后得到一个计算属性
```js
fullName: function (){
    return this.firstName + ' ' + this.lastName;
}
```
#### methods
+ 编写方法
```js

getFullName: function (){
    return this.firstName + ' ' + this.lastName;
}
 getStyles: function (){
    //控制台打印该log
    console.log('getStyles()被执行');
    return {fontSize: this.finalSize + 'px',color: this.finalColor}
}

```
