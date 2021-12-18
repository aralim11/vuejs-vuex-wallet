export default{
    namespaced: true,
    state(){
        return{
            owe: [],
        }
    },

    mutations: {
        storeOwe(state, payload){
            state.owe.push(payload);
        }
    },

    actions: {
        addOwe(context, payload){
            context.commit('storeOwe', payload);
        }
    },

    getters: {
        owe(state){
            return state.owe;
        },

        totalOwe(state){
            var total = 0;
    
            state.owe.forEach(item => {
                total += parseFloat(item.oweAmount);
            });
    
            return total.toFixed(2);
        }
    }
}