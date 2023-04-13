import {houses} from "../store/AppOfflineSgate";
import {universalFetch} from "../utils/universalFetch";

export const cardModule = {
    state: () => ({
        cards: [],
        isCardsLoading: false,
        changedState: "tree",
    }),
    actions: {
        fetchCardsHousesOnTree({state, commit}) {
            universalFetch(houses, commit, "onTree")
        },
        fetchCardsHousesOnLand({state, commit}) {
            universalFetch(houses, commit, "onLand")
        },
        fetchCardsHousesAll({state, commit}) {
            universalFetch(houses, commit, "all")
        },
        deleteCard({state, commit}, cardId){
            commit('deleteCard', cardId)
        },
        addCard({state, commit}, card){
            card.prise = +card.prise
            commit('addCard', card)
        },
        setChangedState({state, commit}, changedState){
            commit('setChangedState', changedState)
        }
    },
    mutations: {
        setCards(state, cards) {
            state.cards = cards
        },
        setLoading(state, isCardsLoading) {
            state.isCardsLoading = isCardsLoading
        },
        setChangedState(state, changedState) {
            state.changedState = changedState
        },
        deleteCard(state, cardId){
        state.cards = state.cards.filter(f=>f.id !== cardId)
        },
        addCard(state, card){
            state.cards.unshift(card)
        }
    },
    namespaced: true
}