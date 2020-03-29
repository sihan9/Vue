<template>
  <div id="app">
    <Nav/>
    <Topbar/>
    <div id="routerView">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav/Nav" 
import Topbar from "./components/Topbar/Topbar" 

export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components:{
    Nav,
    Topbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
}
body{
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
#routerView{
  float: right;
  width: 85%;
  height: 92%;
  background-color: rgb(1, 71, 104);
}
</style>
