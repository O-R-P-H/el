<script>
import {router} from "@/router/router";

export default {
  name:'AudiPlayerPage',
  created() {
    document.addEventListener('keydown',this.handlePressKey)
  },
  methods:{
    handlePressKey(event){
      if(event.keyCode === 27){
        router.push({path:"/"})
      }
    },

  }
}
</script>

<template>
<div class="wrapper">

  <h1>Player</h1>

  <div class="main_container">
    <div class="block">
      <img src="../../public/img/my_library.svg" alt="library">
      <p class="subtitles">my library</p>
    </div>
    <div class="block">
      <img src="../../public/img/search.svg" alt="search">
      <p class="subtitles">search</p>
    </div>
    <div class="block">
      <img src="../../public/img/random.svg" alt="random">
      <p class="subtitles">random</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #212121;
  justify-content: center;
}
h1{
  position: fixed;
  top: 0;
  color: #E6E6E6;
  font-family: "Anonymous Pro", sans-serif;
  font-size: 36px;
  margin-top: 5px;
  font-weight: 200;
}
.subtitles{
  color: #E6E6E6;
  font-family: "Anonymous Pro", sans-serif;
  font-size: 28px;
  font-weight: 200;
  margin-top: 5px;
}
.main_container{
  display: flex;
  justify-content: space-between;
  width: 71.8vw;
}
.block{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>