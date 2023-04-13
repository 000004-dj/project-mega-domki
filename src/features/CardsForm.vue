<template>
  <form class="form" @submit.prevent>
    <h2>Nowy towar:</h2>
    <br>
    <span v-if="v$.card.title.$error">{{ v$.card.title.$errors[0].$message }}</span>
    <universal-input
        v-focus
        v-model="card.title"
        :class="{error: v$.card.title.$error, input: true}"
        type="text"
        placeholder="Post name"/>
    <span v-if="v$.card.body.$error">{{ v$.card.body.$errors[0].$message }}</span>
    <universal-input
        v-model="card.body"
        :class="{error: v$.card.body.$error, input: true}"
        type="text"
        placeholder="Description"/>
    <span v-if="v$.card.prise.$error">{{ v$.card.prise.$errors[0].$message }}</span>
    <universal-input
        v-model="card.prise"
        :class="{error: v$.card.prise.$error, input: true}"
        type="text"
        placeholder="Prise"/>
    <span v-if="v$.card.image.$error">{{ v$.card.image.$errors[0].$message }}</span>
    <universal-input
        :class="{error: v$.card.image.$error, input: true}"
        v-model="card.image"
        type="text"
        placeholder="Image URL"
    ></universal-input>

    <button class="btn"
        @submit="addCard"
        @click="addCard"
    >Dodaj</button>

  </form>
</template>

<script>
import {useVuelidate} from '@vuelidate/core'
import {required, url, minLength, maxLength, numeric} from '@vuelidate/validators'

export default {
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      card: {
        title: "",
        body: "",
        prise: "",
        image: "",
      }
    }
  },
  validations() {
    return {
      card: {
        title: {required, minLength: minLength(4), maxLength: maxLength(50)},
        body: {required, maxLength: maxLength(500), minLength: minLength(10)},
        prise: {required, numeric},
        image: {required, url},
      }
    }
  },
  methods: {
    addCard() {
      this.v$.$validate()
      if (!this.v$.$error) {
        this.card.id = Date.now();
        this.$emit('create', this.card)
        this.card = {
          title: '',
          body: '',
          prise: '',
        }
      } else {
        console.error(this.v$.$errors[0].$message)
      }
    },

  },

}

</script>

<style scoped>


.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
}

span {
  color: red;
  font-size: 15px;
  margin-top: -5px;
}

.error {
  border: red 2px solid;
}
.input{
  height: 60px;
  width: 100%;
}
.form__btn{
  height: 60px;
}

</style>