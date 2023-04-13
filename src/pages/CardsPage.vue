<template>
  <div class="appContainer">
    <h2 class="appContainer__title">{{ title || "Na Drzewie" }}</h2>
    <br/>

    <optional-bar :title="title" @showDialog="showDialog"></optional-bar>

    <my-dialog v-model:show="dialogVisible">
      <cards-form @create="addingCard"/>
    </my-dialog>

    <cards-list :cards="sortedAndSearchedCards" @removeCard="removeCard"
                v-if="!isCardsLoading"/><div v-if="isCardsLoading">Loading...</div>

  </div>
</template>

<script>
import CardsList from "../features/CardsList.vue";
import CardsForm from "../features/CardsForm.vue";
import {mapState, mapActions, mapGetters} from 'vuex'
import OptionalBar from "../features/OptionalBar.vue";

export default {
  components: {
    OptionalBar,
    CardsList,
    CardsForm,
  },
  props: {
    title: {
      type: String,
    }
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapActions({
      fetchCardsHousesOnTree: 'card/fetchCardsHousesOnTree',
      fetchCardsHousesOnLand: 'card/fetchCardsHousesOnLand',
      fetchCardsHousesAll: 'card/fetchCardsHousesAll',
      deleteCard: "card/deleteCard",
      addCard: "card/addCard",
      setFormError: 'cardSorted/setFormError',
    }),
    addingCard(card) {
      this.dialogVisible = false
      this.addCard(card)
    },
    removeCard(card) {
      this.deleteCard(card.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },

  },
  computed: {
    ...mapState({
      isCardsLoading: state => state.card.isCardsLoading,
      changedState: state => state.card.changedState,
    }),
    ...mapGetters({
      sortedAndSearchedCards: 'cardSorted/sortedAndSearchedCards',
    }),
  },
  mounted() {
    switch (this.changedState) {
      case "tree":
        this.fetchCardsHousesOnTree()
        break;
      case "land":
        this.fetchCardsHousesOnLand()
        break;
      case "all":
        this.fetchCardsHousesAll()
        break;
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.appContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.appContainer__title{
  margin: 40px 0 20px 0;
  font-size: 30px;
  text-transform: uppercase;
}
</style>