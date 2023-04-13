import store from "../store/index";

export const cardsSortedModule = {
    state: () => ({
        isCardsLoading: false,
        selectedSort: '',
        sortUp: true,
        searchQuery: '',
        formError: false,
    }),
    actions: {
        setSortUp({state, commit}, value) {
            commit('setSortUp', value)
        },
        setSelectedSort({state, commit}, selectedSort) {
            commit('setSelectedSort', selectedSort)
        },
        setSearchQuery({state, commit}, searchQuery) {
            commit('setSearchQuery', searchQuery)
        },
        setFormError({state, commit}, error) {
            commit('setFormError', error)
        }
    },
    getters: {
        sortedCards(state, getters) {
            const result = [...store.state.card.cards].sort((a, b) => {
                    if (typeof a[state.selectedSort] !== 'string' && typeof b[state.selectedSort] !== 'string') {
                        return a[state.selectedSort] - b[state.selectedSort];
                    }
                    return a[state.selectedSort]?.toString().localeCompare(b[state.selectedSort]?.toString());
                }
            )
            if (state.sortUp) {
                return result
            }
            return result.reverse()
        },
        sortedAndSearchedCards(state, getters) {
            return getters.sortedCards.filter(card => card.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setSortUp(state, sortUp) {
            state.sortUp = sortUp
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setChangedState(state, changedState) {
            state.changedState = changedState
        },
        setFormError(state, error) {
            state.formError = error
        },
    },
    namespaced: true
}