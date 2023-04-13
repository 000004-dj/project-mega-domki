<template>
  <div class="nav">
    <div class="nav__links">
      <universal-select
          style="width: 75px; font-size: 16px"
          :title="'PLN'"
          :model-value="selectedCurrency"
          @update:model-value="setCurrencyFunc"
          :options="currencyOptions"
      ></universal-select>
      <router-link to="/" active-class="active">Główna</router-link>
      <router-link to="tree" @click="changeStateToTree" active-class="active">Na Drzewie</router-link>
      <router-link to="land" @click="changeStateToLand" active-class="active">Na Ziemie</router-link>
      <router-link to="all" @click="changeStateAll" active-class="active">Wszystko</router-link>
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
    isActive(){
      return true
    }

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

.nav__links {
  margin: auto;
}

.nav__links a {
  margin-left: 10px;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
}

.nav__links a:hover {
  color: white;
}

.active{
  color: white !important;
}

</style>