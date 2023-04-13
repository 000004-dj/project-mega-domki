<template>
  <select :value="modelValue" @input="changeOption" class="select">
    <option disabled value="">
        {{title}}
    </option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "universal-select",
  props: {
    modelValue: {
      type: [String, Number],
    },
    options: {
      type: Array,
      default: () => []
    },
    title:{
      type:String,
      required: true
    }
  },
  methods: {
    changeOption(e) {
      this.$emit("update:modelValue", e.target.value)
    }
  },
}
</script>

<style scoped>
.select {
  height: 40px;
  margin: 0 10px;
}
</style>
