import MainPage from '../pages/MainPage.vue'
import {createRouter, createWebHistory} from "vue-router";
import Card from "../features/Card.vue";
import CardsPageWithVuex from "../pages/CardsPage.vue";
import CardsPageLand from "../pages/CardsPageLand.vue";
import CardsPageAll from "../pages/CardsPageAll.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/land',
        component: CardsPageLand
    },
    {
        path: '/tree',
        component: CardsPageWithVuex
    },
    {
        path: '/all',
        component: CardsPageAll
    },
    {
        path: '/cards/:id',
        component: Card
    },
]


const router = createRouter({
    routes,
    history: createWebHistory("https://google.com")
})

export default router