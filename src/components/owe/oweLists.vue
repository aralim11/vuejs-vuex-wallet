<template>
    <tr>
        <th scope="row">{{ oweType }}</th>
        <td>{{ oweReason }}</td>
        <td>{{ oweDate }}</td>
        <td><base-progress v-bind:percentage="percentage"></base-progress></td>
        <td>{{ oweAmount }}</td>
        <td>
            <button type="button" class="btn btn-info btn-sm" v-on:click="openEditModal(id, oweType)">{{restOwe}}</button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['id', 'oweType', 'oweDate', 'oweAmount', 'oweReason'],
        data(){
            return{
                // percentage: 100,
            }
        },

        methods: {
            openEditModal(id, oweType){
                this.$emit('openEditModal', id, oweType);
            },
        },

        computed: {
            restOwe(){
                const owes = this.$store.getters['owe/owe'];
                const oweData = owes.findIndex(res => {return res.id === this.id});
                const totalOwe = owes[oweData]['oweAmount'];
                const history = owes[oweData]['oweHistory'];
                var totalHistoryAmount = 0;

                for(let i = 0; i < history.length; i++){
                    totalHistoryAmount = totalHistoryAmount + parseInt(history[i]['oweHistoryamount']);
                }

                if(parseInt(totalHistoryAmount) == parseInt(totalOwe)){
                    return "View";
                }
                return "Edit";
            },

            percentage(){
                const owes = this.$store.getters['owe/owe'];
                const oweData = owes.findIndex(res => {return res.id === this.id});
                const totalOwe = owes[oweData]['oweAmount'];
                const history = owes[oweData]['oweHistory'];
                var totalHistoryAmount = 0;

                for(let i = 0; i < history.length; i++){
                    totalHistoryAmount = totalHistoryAmount + parseInt(history[i]['oweHistoryamount']);
                }

                if(parseInt(totalHistoryAmount) === 0){
                    return 100;
                }

                const backPercentage = ((parseInt(totalHistoryAmount)/parseInt(totalOwe))*100)
                if (backPercentage > 0) {
                    return backPercentage.toFixed(0);
                }
                return 0;
            }
        }
    }
</script>