import {createStore} from "vuex";
import {cardModule} from "../store/cardModule";
import {cardsSortedModule} from "../store/cardsSortedModule";
import {currencyModule} from "../store/currencyModule";




export default createStore({
    modules:{
        card: cardModule,
        cardSorted: cardsSortedModule,
        currency: currencyModule
    }
})