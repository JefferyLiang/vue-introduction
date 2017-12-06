# vue-introduction

> A Vue.js introduction plugins

This is the simple vue introduction plugins in vue.js

This plugin was uesd in my company project, I will update the advanced features soon.

## README LANGUAGE

[中文文档](https://github.com/JefferyLiang/vue-introduction/doc/README.zh.md)

## Demo

the live [demo](https://jsfiddle.net/JefferyLiang/39soL0ar/)

## Install

```bash
npm i vue-introduction -S
```

## Quick Start

import the `vue-introduction`

```js
import Vue from 'vue'
import VueIntroduction from 'vue-introduction'

Vue.use(VueIntroduction)
```

use in `.vue` file

```
<div>
  <div class="logo-container">
    ...
  </div>
  ...
  <fb-intro :active="active" :steps-list="list" @intro-end="active = false"></fb-intro>
  ...
</div>

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

| Parameter | Description | type | optional value | default value |
| --- | --- | --- | --- | --- |
| active | begin the vue-introduction or not | Boolean | true/false | - |
| steps-list | the introduction steps list<br> `className` item is the dom class name<br>.<br> `content` item is the introduction description. | Array | Array<Object> | [] |
