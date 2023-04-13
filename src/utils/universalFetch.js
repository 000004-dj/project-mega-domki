

export const universalFetch = (response, commit, changedData) =>{
    try {
        let returnedState;
        commit('setLoading', true)
        if(changedData === "onLand"){
            returnedState = response.data.onLand
        }else if(changedData === "onTree"){
            returnedState = response.data.onTree
        }else if(changedData === "all"){
            returnedState = [...response.data.onLand, ...response.data.onTree]
        }
        commit('setCards', returnedState)
    } catch (e) {
        alert("ERROR")
    } finally {
        commit('setLoading', false)
    }
}