<template>
  <input
      :value="modelValue"
      class="input"
      @input="updateInput"
  >
</template>

<script>
export default {
  name: "universal-input",
  props: {
    modelValue: [Number, String]
  },
  methods:{
    updateInput(e){
      this.$emit("update:modelValue", e.target.value)
    }
  }
}
</script>


<style scoped>
.input {
  height: 40px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.44);
  border: solid black 1px;
  border-radius: 5px;
  width: 100%;
  padding-left: 20px;
}
</style>