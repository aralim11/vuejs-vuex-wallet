export default{
    namespaced: true,
    state(){
        return {
            expense: [],
        }
    },

    mutations: {
        storeExpense(state, payload){
            state.expense.push(payload);
        }
    },

    actions: {
        addExpense(context, payload){
            context.commit('storeExpense', payload);
        }
    },

    getters: {
        expense(state){
            return state.expense;
        },

        totalExpense(state){
            var total = 0;
    
            state.expense.forEach(item => {
                total += parseFloat(item.expenseAmount);
            });
    
            return total.toFixed(2);
        }
    }
}