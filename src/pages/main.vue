<script>
import {router} from "@/router/router";

export default {
  name:"MainPage",
  created() {
    document.addEventListener('keydown',this.handlePressKey)
  },
  beforeUnmount(){
    document.removeEventListener('keydown',this.handlePressKey)
  },
  methods:{
    handlePressKey(event){
      if(event.key === "Enter"){
        const button = document.querySelector(".enter_button");
        button.click();
      }
    },
    routerPushToMain(){
      router.push({path:"/Player"})
    }

  }
}

</script>

<template>

    <div class="wrapper">
      <h1>WELCOME</h1>
      <button @click="routerPushToMain" class="enter_button">Enter</button>
    </div>


</template>

<style scoped>
.wrapper{
  justify-content: center;
  position: fixed;
  z-index: 1;
  background-size: cover;
   background-position: center center;
  background-image: url("../../public/img/IMG_2535 1.png");
  align-items: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
button{
  font-family: "Anonymous Pro",sans-serif;
  align-items: center;
  display: flex;
  height: 40px;
  border: solid 1px;
  background-color: transparent;
  color: white;
  border-color: white;
  justify-content: center;
  font-size: 24px;
  width: 200px;
  border-radius: 16px;
  margin-top:40px;
  letter-spacing: 5px;
}
h1{
  font-weight: 100;
  font-family: "Anonymous Pro",sans-serif;
  letter-spacing: 10px;
  font-size: 62px;
  color: white;
}
</style>