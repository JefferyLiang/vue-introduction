# vue-introduction

> 用于vue的使用引导/介绍插件

一个能用于vue.js的简单的页面介绍/使用引导的模块。

这个插件是由于[intro.js](https://introjs.com/)无法满足我们使用的邀请，于是就有了这个插件的诞生。

插件使用的是`velociaty-aniamte`的动画库，是[velocity.js](http://www.mrfront.com/docs/velocity.js/index.html)的npm包库。

如果有后续的需要，我将会继续维护插件。

## Demo

在线[例子](https://jsfiddle.net/JefferyLiang/39soL0ar/)

## Install

```bash
npm i vue-introduction -S
```

## Quick Start

引入 `vue-introduction`

```js
import Vue from 'vue'
import VueIntroduction from 'vue-introduction'

Vue.use(VueIntroduction)
```

在`.vue`文件中使用

```vue
<template>
  <div>
    <div class="logo-container">
      ...
    </div>
    ...
    <fb-intro :active="active" :steps-list="list" @intro-end="active = false"></fb-intro>
    ...
  </div>
</template>

<script>
  export default{
    data () {
      active: false,
      list: [{
        className: 'logo-container',
        content: 'This is logo container'
      }]
    }
  }
</script>
```

### Attributes

| 参数 | 描述 | 数据类型 | 配置值 | 默认值 |
| --- | --- | --- | --- | --- |
| active | 决定插件是否开始启动 | Boolean | true/false | - |
| steps-list | 介绍的步骤的配置数组<br>`className`项，用于捕捉介绍步骤高亮的位置。<br>`content`项，该步骤中的介绍文字信息 | Array | - | [] |