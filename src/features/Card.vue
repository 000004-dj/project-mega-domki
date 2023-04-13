<template>
  <div class="changedCard">
    <p><span>Nazwa towaru: </span>{{ card.title }}</p>
    <p><span>Opis: </span>{{ card.body }}</p>
    <p><span>Cena towaru: </span>{{ card.prise }}{{currency}}</p>
    <img :src="card.image" alt="img">
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "card",
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed:{
    ...mapState({
      currency: state => state.currency.selectedCurrency
    })
  }

}
</script>

<style scoped>
.changedCard{
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  border: none;
}
img{
  max-width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
}
span{
  font-weight: bold;
}
p{
  margin: 10px 0;
}
</style>