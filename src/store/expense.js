export default{
    namespaced: true,
    state(){
        return {
            expense: [
                {
                    id: Math.random().toString().replace("0.", ""),
                    expenseReason: "House Rent",
                    expenseDate: "2022-01-04",
                    expenseAmount: "25.00",
                },
                {
                    id: Math.random().toString().replace("0.", ""),
                    expenseReason: "Electricity Bill",
                    expenseDate: "2022-01-04",
                    expenseAmount: "05.00",
                },
            ],
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