<template>
  <button
      class="btn"
  >
    <slot></slot>
  </button>

</template>
<script>
export default {
  name: "universal-button",

}
</script>

<style scoped>
.btn {
  min-width: 150px;
  padding: 0 10px;
  background: none;
  border-radius: 10px;
  height: 40px;
  border: solid black 1px;
  font-size: 15px;
  text-transform: uppercase;
  z-index: 0;
  margin: 0 10px;
}

.btn:hover {
  background: rgba(157, 157, 157, 0.62);
  color: white;
  border: solid rgba(157, 157, 157, 0.62) 1px;

}
</style>