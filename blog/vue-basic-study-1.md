
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
+ 循环遍历——**v-for**
    + 解释：为了利用for循环将列表数据输出
    + data中定义：movies = ['海贼王','大话西游','星际穿越']
    + 使用：
    ```js
        <ui><li v-for="item in movies">{{item}}</li></ui>
        <ui><li v-for="（item， index） in movies">{{index + ": " item}}</li></ui>
        <ui><li v-for="(item, key, index) in movies">{{item}}</li></ui>
    ```
    + 通过循环遍历时添加key属性减少DOM渲染次数,key值不要重复
        ```js
            <li v-for="item in letters" :key="item">{{item}}</li>
        ```
+ 事件监听——**v-on**
    + 解释：为某个动作添加函数例如点击
    + 使用：```<button v-on:click="add()">+</button>```
    + 使用（语法糖）：```<button @:click="add()">+</button>``` 
    + 事件监听需要注意参数问题
        + 1.当绑定方法后面不加括号，声明参数有一个参数时，默认传递原生事件event参数
            ```html
                <button @:click="btnClick">+</button>
            ```
            ```js
                btnClick(event){
                    console.log(event)  
                }
            ```
        + 2.当传递多个参数同时需要传递event事件时,event传递为$event
            ```html
                <button @:click="btnClick(10,$event)">+</button>
            ```
            ```js
                btnClick(num, event){
                    console.log(event)  
                }
            ```
    + 同时可以加一些修饰符
        + **.stop**:停止冒泡,当div-A定义在div-B内部，两个都有点击函数，那么div-A点击函数触发时div-B函数必然被触发，.stop可以阻止这种传递
        + **.prevent**：阻止默认行为
        + **.keyCode**：监听某个键帽
        + **.once**：只触发一次
    
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
    + 用于绑定一个或多个属性值或者向另一个组件传递props值
    + 语法糖：**:**
    + 绑定属性值
        ```html
        <a v-bind:href="link"> 百度一下</a>

        data:{
            link: 'www.baidu.com'
        }

        ```
    + 绑定类
        ```html
            .active{
                color: red;
            }
            <h2 v-bind:class="{active: isActive, line: isLine}">{{message}}</h2>
            data: {
                message:"hello",
                isActive: true,
                isLine: true
            }
        ```
    + 同时也可以直接绑定类
        ```html
            getStyles: function (){
                return {fontSize: this.finalSize + 'px',color: this.finalColor}
            }

            <h2 :style="getStyles()">{{message}}</h2>

        ```
+ v-show：表示是否显示该dom

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
### ES6补充
+ const、let关键字具有块限制
+ 对象增强写法
    ```js
        let name = 'why'
        let age = 18

        let obj1 = {
            name,age
        }

    ```

### 表单绑定-v-model