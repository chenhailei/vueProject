<template>
  <div class="hello">
    <ul>
      <li v-for="(item, key) in data">{{item}}-{{key}}</li>
    </ul>
    <button @click="getdata">点击出数据</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: [],
      _host:window.devApiHost ? window.devApiHost : window.apiHost
    }
  },
  created () {
    this.data = ['c', 'd']
  },
  methods: {
      getdata () {
        this.$http.get(window.devApiHost + "/api/data").then(res => {
          this.data = res.data.name

          console.log(res)
          console.log(typeof res.data.name)
          console.log(res.data.name.length)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
