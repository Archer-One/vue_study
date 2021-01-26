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
## 模块分离写法
## 父子组件数据传递

