<template>
  <div class="card">
    <div class="card__button_block">
      <universal-button
          @click="$emit('remove', card)"
          class="card__button_block__btn-remove">
        X
      </universal-button>
    </div>

    <div class="card__info">
      <div class="card__info__title">{{ card.title }}</div>
      <div class="card__info__image">
        <img :src="cardImage" alt="img">
      </div>
      <div class="card__info__body"><span>Opis towaru:</span> {{ card.body }}</div>
      <div>{{ setVisibleCurrency === 0 ? card.prise : setVisibleCurrency }} {{ currency }}</div>
    </div>

    <universal-button
        @click="dialogVisible = true"
        class="card__button_block__btn-more">
      Więcej
    </universal-button>

    <my-dialog v-model:show="dialogVisible">
      <card :card="card"></card>
    </my-dialog>

  </div>
</template>

<script>
import Card from "../features/Card.vue";
import {mapState} from 'vuex'

export default {
  components:{
    Card
  },
  data() {
    return {
      cardImage: this.card.image,
      dialogVisible: false,
    }
  },
  props: {
    card: {
      type: Object,
      required: true,
    }
  },
  computed: {
    ...mapState({
      currency: state => state.currency.selectedCurrency,
      coefficientUSD: state => state.currency.coefficientUSD,
      coefficientEUR: state => state.currency.coefficientEUR,
    }),
    setVisibleCurrency() {
      switch (this.currency) {
        case "$":
          return Math.round(this.card.prise * +this.coefficientUSD)
        case "€":
          return Math.round(this.card.prise * +this.coefficientEUR)
        default:
          return this.card.prise
      }
    },
  },
}
</script>


<style scoped>
.card {
  border: solid 1px black;
  border-radius: 5px;
  min-height: 100px;
  min-width: 250px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-top: 10px;
  text-align: left;
  padding: 20px;
  background: white;
}

.card__info {
  width: 100%;
}

.card__info__title {
  align-self: center;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
  min-height: 60px;
  width: 100%;
}

.card__info__image img {
  width: 100%;
  height: 200px;
}

.card__info__body {
  align-self: center;
  text-align: center;
  min-height: 100px;
  max-width: 100%;
}

.card__info__body span {
  text-transform: uppercase;
}

.card__button_block {
  display: flex;
  flex-direction: column;
  align-self: end;
  position: relative;
  right: -15px;
  top: -15px;
}

.card__button_block__btn-remove {
  min-width: 20px !important;
  height: 30px !important;
  margin: 0 !important;
}

.card__button_block__btn-more {
  align-self: center;
  margin-top: 10px;
}


</style>