export default{
    namespaced: true,
    state(){
        return{
            owe: [
                {
                    id: Math.random().toString().replace("0.", ""),
                    oweDate: "2022-01-04",
                    oweAmount: "12.00",
                    oweType: "Loan",
                    oweReason: "Hasibur",
                    oweHistory: [
                        {
                            oweHistoryId: Math.random().toString().replace("0.", ""),
                            oweHistoryDate: "2022-01-04",
                            oweHistoryamount: "02.00",
                        },
                        {
                            oweHistoryId: Math.random().toString().replace("0.", ""),
                            oweHistoryDate: "2022-01-05",
                            oweHistoryamount: "03.00",
                        },
                    ]
                },
                {
                    id: Math.random().toString().replace("0.", ""),
                    oweDate: "2022-01-01",
                    oweAmount: "05.00",
                    oweType: "Owe",
                    oweReason: "Abdul Alim",
                    oweHistory: [
                        {
                            oweHistoryId: Math.random().toString().replace("0.", ""),
                            oweHistoryDate: "2022-01-04",
                            oweHistoryamount: "01.00",
                        },
                        {
                            oweHistoryId: Math.random().toString().replace("0.", ""),
                            oweHistoryDate: "2022-01-05",
                            oweHistoryamount: "03.00",
                        },
                        {
                            oweHistoryId: Math.random().toString().replace("0.", ""),
                            oweHistoryDate: "2022-01-05",
                            oweHistoryamount: "02.00",
                        },
                    ]
                },
            ],
        }
    },

    mutations: {
        storeOwe(state, payload){
            state.owe.push(payload);
        },

        editStoreOwe(state, payload){
            const oweData = state.owe.findIndex(res => {return res.id === payload.oweId});
            state.owe[oweData]['oweHistory'].push(payload.oweData);
        }
    },

    actions: {
        addOwe(context, payload){
            context.commit('storeOwe', payload);
        },

        editOwe(context, payload){
            context.commit('editStoreOwe', payload);
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