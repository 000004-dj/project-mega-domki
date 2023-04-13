import axios from "axios";


export const currencyModule = {
    state: () => ({
        selectedCurrency: "zl",
        coefficientUSD: 0,
        coefficientEUR: 0,
        coefficientPLN: 0,

    }),
    actions: {
        async getCurrencyCoefficient({state, commit}, curr) {
            const key = "uSIvOFYUWW1cUsrQu7xCimPErdcEb6Ks5C5IT7Ai"
            try {
                const res = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=${key}&currencies=EUR%2CUSD%2CPLN&base_currency=PLN`)
                if (curr === "€") {
                    commit('setCoefficientEUR', res.data.data.EUR.value)
                } else if (curr === "$") {
                    commit('setCoefficientUSD', res.data.data.USD.value)
                } else if (curr === "zl") {
                    commit('setCoefficientPLN', res.data.data.PLN.value)
                }
            } catch (e) {
                console.error('Bank not available')
            }
        },
        setCurrencyA({state, commit}, currency) {
            commit('setCurrency', currency)
        }
    },
    mutations: {
        setCoefficientUSD(state, coefficientUSD) {
            state.coefficientUSD = coefficientUSD
        },
        setCoefficientEUR(state, coefficientEUR) {
            state.coefficientEUR = coefficientEUR
        },
        setCoefficientPLN(state, coefficientPLN) {
            state.coefficientPLN = coefficientPLN
        },
        setCurrency(state, currency) {
            state.selectedCurrency = currency
        },
    },

    namespaced: true
}