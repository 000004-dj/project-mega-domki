<template>
  <div class="appContainer">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./common/Navbar.vue"
export default {
  name: "App",
  components:{
    Navbar
  }
}
</script>

<style>


.appContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>