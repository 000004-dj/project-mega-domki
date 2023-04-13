<template>
  <CardsPageWithVuex :title="'Wszystko'"/>
</template>

<script>


import CardsPageWithVuex from "../pages/CardsPage.vue";
import {mapMutations} from "vuex";
export default {
  components: {CardsPageWithVuex},
  mounted() {
    this.setChangedState('all')
  },
  methods:{
    ...mapMutations({
      setChangedState: 'card/setChangedState'
    })
  }
}

</script>

<style>

</style>