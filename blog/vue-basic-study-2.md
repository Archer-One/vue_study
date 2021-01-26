+ 主要讲述组件开发、前端模块化
# 组件
## 使用步骤
### 创建组件构造器
```js
const cpnC = Vue.extend({
    template:`
      <div>
        <h2>我是标题</h2>
        <p>我是内容，哈哈哈哈</p>
        <p>我是内容，呵呵呵呵</p>
      </div>>
    `
  })
```
### 注册组件
```js
Vue.component('my-cpn',cpnC);
```
+ 注册组件语法糖,省去Vue.extend部分
```js
Vue.component('cpn1',{
    template:`
      <div>
        <h2>我是标题</h2>
        <p>我是内容，哈哈哈哈</p>
      </div>
    `
  })
```
+ 模块分离写法
```html
<template id="cpn">
  <div>
    <h2>我是标题</h2>
    <p>我是内容，哈哈哈哈</p>
  </div>
</template>
```
```js
Vue.component('cpn',{
    template:'#cpn'
  })
```
### 使用组件
+ 组件必须挂载在某个实例下面
```html
<my-cpn></my-cpn>
```
## 全局和局部组件
+ 全局组件是指任意vue实例下都可以使用
```js
Vue.component('my-cpn',cpnC);
```
+ 局部组件是指只有在注册的实例下才可以使用
```js
component:{
  my-cpn: cpnC
}
```
---
+ 组件存储数据需要用函数来返回对象，是因为每使用一个组件需要产生一个新的对象
```js
Vue.component('cpn',{
    template:'#cpn',
    data(){
      return {
        title: 'abc'
      }
    }
  })
```

## 父子组件数据传递
### 父组件----->子组件(props)
+ 基础用法，此外还可以使用对象，并对其进行类型验证、赋默认值
```html
<div id="app">
  <mycpn :cmovies="movies" :cmessage="message"></mycpn>
</div>

<template id="cpn">
  <div>
    <p>{{cmovies}}</p>
    <p>{{cmessage}}</p>
  </div>
</template>
```
```js
const cpnC ={
    template:'#cpn',
    props: ['cmovies','cmessage'],

  }

  // Vue.component('cpn1',cpn)

  const app = new Vue({
    el: "#app",
    data: {
      message:"hello",
      movies: ['海贼王','一拳超人']
    },
    components:{
      mycpn:cpnC
    }
  })
```
### 子组件----->父组件(v-on&emit)
+ 基础用法
```html
<div id="app">
  <cpn @itemclick="cpnClick"></cpn>
</div>
<template id="cpn">
  <div>
    <button v-for="item in categories" @click="btnClick(item)">{{item.name}}</button>
  </div>
</template>
```
```js
//子组件发射时间
btnClick(item){
  this.$emit('itemclick',item)
}

// 父组件接受事件
cpnClick(item){
  console.log('+++++'+item);
}

```
## 父子组件访问
### 父组件----->子组件(refs)
+ 基础用法
```html
<cpn ref="aaa"></cpn>
```
```js
const app = new Vue({
    el: "#app",
    data: {
      message:"hellos"
    },
    methods: {
      btnClick(){
        // 1. $.children
        console.log(this.$children);
        this.$children[0].showMessage();
        // 2.ref 属性
        console.log( this.$refs)
        this.$refs.aaa.showMessage();
      }
    },
    components:{
      cpn:{
        template:'#cpn',
        methods:{
          showMessage(){
            console.log('showMessage');
          }
        }
      }
    }
  })
```
## slot-插槽
+ 父组件使用子组件时可以自由选择内容
## 模块化
### CommonJS
#### 模块
+ 导出
```js
// moduleA.js
flag = true
add(a,b){
  return a+b
}

module.export = {
  flag,add
}
```
+ 导入
```js
let {flag,add} = require('moduleA.js')
// 等同于
let _mA = require('moduleA.js')
let flag = _mA.flag
let add = _mA.add
```
#### 变量
+ 导出
```js
// info.js
let name = 'why'
let age = 18
function test(){
  console.log('test')
}
export {name,age,test}

// 导出某些可以让调用者来命名的方法,只能有一个
export default function(){
  console.log('default function')
}
```
+ 导入
+ 首先html代码里面引入两个js文件设置为moudle
```html
<script src="info.js" type="module"></scirpt>
<script src="main.js" type="module"></scirpt>
```
+ js文件中使用
```js
import {name,age,test} from './info.js'
// 或者直接导入全部
import * as info as './info.js'
console.log(info.name, info.age,info.test())
```