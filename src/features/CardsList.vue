<template>
  <div class="block" v-if="cards.length > 0">
    <transition-group name="cards-list">
      <card-item
          v-for="card in cards"
          :card="card"
          :key="card.id"
          @remove="removeCard"/>
    </transition-group>

  </div>

  <h2 v-if="cards.length <= 0" style="color: red; margin: 20px">Cards not found =)</h2>
</template>

<script>
import CardItem from "../features/CardItem.vue";
import MyDialog from "../common/UI/MyDialog.vue";
import Card from "../features/Card.vue";

export default {
  components: {Card, MyDialog, CardItem},
  props: {
    cards: {
      type: Array,
      required: true,
    }
  },
  methods:{
    removeCard(card){
      this.$emit('removeCard', card)
    }
  }

}
</script>

<style scoped>
.block {
  width: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cards-list-item {
  display: inline-block;
  margin-right: 10px;
}
.cards-list-enter-active,
.cards-list-leave-active {
  transition: all 0.3s ease;
}
.cards-list-enter-from,
.cards-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.cards-list-move {
  transition: transform 0.8s ease;
}
</style>