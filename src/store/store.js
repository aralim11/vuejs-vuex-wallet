import { createStore } from "vuex";
import income from './income.js';
import expense from './expense.js';
import owe from './owe.js';

const store = createStore({
    modules: {
        income: income,
        expense: expense,
        owe: owe,
    },

    state(){
        return {
            title: 'Wallet',
        }
    }
});

export default store;