export default{
    namespaced: true,
    state(){
        return {
            income: [
                {
                    id: Math.random().toString().replace("0.", ""),
                    incomeReason: "Monthly Salary",
                    incomeDate: "2022-01-01",
                    incomeAmount: "100.00",
                },
                {
                    id: Math.random().toString().replace("0.", ""),
                    incomeReason: "Freelance",
                    incomeDate: "2022-01-02",
                    incomeAmount: "50.00",
                },
            ],
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