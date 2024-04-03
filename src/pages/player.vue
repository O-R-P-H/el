<script>
import {router} from "@/router/router";
import SearchBar from "@/components/searchbar.vue";

export default {
  name:'AudiPlayerPage',
  components: {SearchBar},
  data(){
    return{
      searchbarvisible:false,
      animate:true
    }
  },
  mounted() {
    document.addEventListener('keydown',this.handlePressKey)
    setTimeout(()=>{
      this.animate = false
    },900)
  },
  beforeUnmount(){
    document.removeEventListener('keydown',this.handlePressKey)
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
<div class="main_titles">
  <transition name="fade">
    <p v-if="searchbarvisible===true" @click="searchbarvisible = !searchbarvisible" class="backbutton">back ←</p>
  </transition>

  <h1>Player</h1>
  <p class="author_name">made by O_R_P_H</p>
</div>

<transition name="fade">
  <div>
      <div v-if="searchbarvisible ===false" class="main_container">
        <div :class="{ 'animate':animate }" class="block">
          <img src="../../public/img/my_library.svg" alt="library">
          <p class="subtitles">my library</p>
        </div>
        <div @click="searchbarvisible = !searchbarvisible" :class="{ 'animate':animate }" class="block">
          <img src="../../public/img/search.svg" alt="search">
          <p class="subtitles">search</p>
        </div>
        <div :class="{ 'animate':animate }" class="block">
          <img src="../../public/img/random.svg" alt="random">
          <p class="subtitles">random</p>
        </div>
      </div>
  </div>
</transition>
<div class="play_block">
  <div class="buttons">
    <img id="play" src="../../public/img/play.svg">
    <img id="back" src="../../public/img/next.svg">
    <img id="next" src="../../public/img/next.svg">
  </div>

    <div class="line">
    </div>

  <div class="song">
    Beatles - Yesterday
  </div>
</div>
  <transition  name="slide" appear>
    <search-bar v-if="searchbarvisible === true"></search-bar>
  </transition>

</div>

</template>

<style scoped>
.song{
  text-indent: 40px;
  width: 30vw;
  font-family: "Anonymous Pro", sans-serif;
  font-size: 24px;
  color: #FFFF;
}
.buttons{
  width: 30vw;
}
.line{
  width: 40vw;
  height: 0px;
  border: 3px solid #FFFF;
}

#next{
  rotate: 180deg;
}
#play{
  margin-left: 20px;
  margin-right: 2vw;
}

.play_block{
  align-items: center;
  background-color: #1A1919;
  position: fixed;
  display: flex;
  border-radius: 8px 8px 0 0;
  bottom: 0;
  height: 90px;
  width: 100vw;
}

@keyframes scaleAnimation {
  0% { transform: scale(0.9); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #212121;
  justify-content: center;
}

h1 {
  color: #E6E6E6;
  font-family: "Anonymous Pro", sans-serif;
  font-size: 36px;
  margin-top: 5px;
  font-weight: 200;
}

.subtitles {
  transition: all 1s;
  color: #E6E6E6;
  font-family: "Anonymous Pro", sans-serif;
  font-size: 28px;
  font-weight: 200;
  margin-top: 5px;
}

.main_container {
  display: flex;
  justify-content: space-between;
  width: 71.8vw;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s;
}

.block:hover {
  cursor: pointer;
  animation: none; /* Отключаем анимацию при наведении */
  transform: scale(1.2);
}
.block:hover .subtitles{
  transform: translateY(5px);
}
.animate{
  animation: scaleAnimation 1s ease forwards;
}
.main_titles{
  position: fixed;
  top: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.author_name{
  color: #E6E6E6;
  margin-top: 5px;
  font-size: 10px;
  font-family: "Anonymous Pro", sans-serif;
}
.backbutton {
  cursor: pointer;
  color: #E6E6E6;
  position: fixed;
  top: 50px;
  left: 203px;
  font-family: "Anonymous Pro", sans-serif;
  font-size: 24px;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(400px);
  opacity: 0;
}
.slide-enter-to, .slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>