<template>
  <div class="app__btns">
    <button class="btn" @click="$emit('showDialog',true)">Dodaj nowy towar</button>
    <universal-input
        v-focus
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        :placeholder="`Szukaj po nazwie w kategorii ${title || 'Na drzewie'}`"
        class="search"
    ></universal-input>

    <universal-select
        :title="'Sortuj'"
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"></universal-select>
    <button class="btn"
        @click="setSortUp(!sortUp)"
    >{{ sortUp ? "Malejąco" : "Rosnąco" }}
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "optionalBar",
  props:{
    title: {
      type:String
    }
  },
  data() {
    return {
      sortOptions: [
        {value: "title", name: "Nazwa"},
        {value: "body", name: "Opis"},
        {value: "prise", name: "Cena"},
      ],
    }
  },
  methods: {
    ...mapActions({
      setSortUp: 'cardSorted/setSortUp',
      setSelectedSort: 'cardSorted/setSelectedSort',
      setSearchQuery: 'cardSorted/setSearchQuery',
    }),
  },
  computed: {
    ...mapState({
      selectedSort: state => state.cardSorted.selectedSort,
      sortUp: state => state.cardSorted.sortUp,
      searchQuery: state => state.cardSorted.searchQuery,
    }),
    ...mapGetters({
      sortedAndSearchedCards: 'cardSorted/sortedAndSearchedCards',
    }),
  },
}


</script>

<style scoped>
.app__btns {
  display: flex;
  justify-content: space-between;
  width: 1100px;
}

.search {
  display: block;
  min-width: 300px;
  color: white !important;
}


</style>