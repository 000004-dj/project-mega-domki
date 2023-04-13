<template>
  <div class="nav">
    <div class="nav__btns">
      <universal-select
          style="width: 75px; font-size: 16px"
          :title="'PLN'"
          :model-value="selectedCurrency"
          @update:model-value="setCurrencyFunc"
          :options="currencyOptions"
      ></universal-select>
      <universal-button @click="$router.push('/')">Główna</universal-button>
      <universal-button @click="changeStateToTree">Na Drzewie</universal-button>
      <universal-button @click="changeStateToLand">Na Ziemie</universal-button>
      <universal-button @click="changeStateAll">Wszystko</universal-button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "main-navbar",
  data() {
    return {
      currencyOptions: [
        {value: "zl", name: "PLN"},
        {value: "$", name: "USD"},
        {value: "€", name: "EURO"},
      ]
    }
  },
  computed: {
    ...mapState({
      selectedCurrency: state => state.cardSorted.selectedCurrency,

    }),
  },
  methods: {
    ...mapActions({
      getCurrencyCoefficient: "currency/getCurrencyCoefficient",
      setCurrency: 'currency/setCurrencyA'
    }),
    ...mapMutations({
      setChangedState: "card/setChangedState"
    }),
    changeStateToLand() {
      this.$router.push('/land')
      this.setChangedState('land')
    },
    changeStateToTree() {
      this.$router.push('tree')
      this.setChangedState('tree')
    },
    changeStateAll() {
      this.$router.push('all')
      this.setChangedState('all')
    },
    setCurrencyFunc(curr) {
      this.getCurrencyCoefficient(curr)
      this.setCurrency(curr)
    },

  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-self: end;
  margin: 0 auto;
  height: 80px;
  background: rgba(0, 255, 255, 0.75);
}


.nav__btns {
  margin: auto;
}
</style>