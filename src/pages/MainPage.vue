<template>
  <div class="main">
    <h2 class="main__title">Cześć, tu kupisz domek dla zwieżąt, których chciałbyś zachować</h2>

    <div class="houses">

      <div class="houses__card hover-shadow">
        <span v-if="visibleTitle === true">Domek na drzewie</span>
        <div class="houses__house-on-tree"
             @click="changeStateToTree"
        ></div>
      </div>

      <div class="houses__card hover-shadow">
        <span v-if="visibleTitle === true">Domek na ziemie</span>
        <div class="houses__house-on-land"
             @click="changeStateToLand"></div>
      </div>

    </div>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "MainPage",
  data() {
    return {
      visibleTitle: false
    }
  },
  methods: {
    ...mapActions({
      setChangedState: "card/setChangedState"
    }),
    changeStateToLand() {
      this.$router.push('/land')
      this.setChangedState('land')

    },
    changeStateToTree() {
      this.$router.push('/tree')
      this.setChangedState('tree')
    },
    visibleTitleChange(){
      this.visibleTitle = !this.visibleTitle
    }
  }
}
</script>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
  width: 70%;
}

.main__title {
  text-align: center;
  font-size: 50px;
  margin-top: 100px;
}

.houses {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  width: 100%;
}


.houses__card {
  padding: 20px 20px 0 20px;

}


@keyframes hover {
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(-6px);
  }
}

@keyframes hover-shadow {
  0% {
    transform: translateY(6px);
    opacity: 0.4;
  }
  50% {
    transform: translateY(3px);
    opacity: 1;
  }
  100% {
    transform: translateY(6px);
    opacity: 0.4;
  }
}

.hover-shadow {
  display: inline-block;
  position: relative;
  transition-duration: 0.3s;
  transition-property: transform;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}

.hover-shadow:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: '';
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.53) 0%, rgba(0, 0, 0, 0) 80%);
  transition-duration: 0.3s;
}

.hover-shadow:hover {
  transform: translateY(-6px);
  animation-name: hover;
  animation-duration: 1.5s;
  animation-delay: 0.3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.hover-shadow:hover:before {
  opacity: 0.4;
  transform: translateY(6px);
  animation-name: hover-shadow;
  animation-duration: 1.5s;
  animation-delay: 0.3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}


.houses__card span {
  display: block;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
}

.houses__house-on-tree {
  background-image: url("../../src/assets/images/house-on-tree.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 350px;
}

.houses__house-on-land {
  background-image: url("../../src/assets/images/house-on-land.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 350px;
}

</style>