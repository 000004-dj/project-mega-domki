<template>
  <div class="appContainer">
    <main-navbar></main-navbar>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Dosis', sans-serif;;
}
body{
  background: rgba(9, 100, 9, 0.76);
}

.appContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
select{
  background: none;
  border-radius: 5px;
  border: black 1px solid;
}
</style>