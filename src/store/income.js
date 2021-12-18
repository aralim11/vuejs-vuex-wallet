export default{
    namespaced: true,
    state(){
        return {
            income: [],
        }
    },

    mutations: {
        storeIncome(state, payload){
            state.income.push(payload);
        }
    },

    actions: {
        addIncome(context, payload){
            context.commit('storeIncome', payload);
        }
    },

    getters: {
        income(state){
            return state.income;
        },

        totalIncome(state){
            var total = 0;
    
            state.income.forEach(item => {
                total += parseFloat(item.incomeAmount);
            });
    
            return total.toFixed(2);
        }
    }
}