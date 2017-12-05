<template>
  <div id="app">
    <div class="logo-img">
      <img src="./assets/logo.png">
    </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul class="doc-list">
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2 class="plugin-title">Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <fb-intro :active="active" :steps-list="list" @intro-end="active = false"></fb-intro>
    <button class="go-btn" @click="active = !active">Go!</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [{
        className: 'logo-img',
        content: 'this is logo image.'
      }, {
        className: 'doc-list',
        content: 'this is doc list ul.'
      },{
        className: 'go-btn',
        content: 'this is button'
      }],
      active: false
    }
  }
}
</script>

<style lang="scss">
html, body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo-img{
  padding-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
