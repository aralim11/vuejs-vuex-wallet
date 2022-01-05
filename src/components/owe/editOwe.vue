<template>
    <div class="modal-body">
        <div class="form-group">
            <label>Enter Date <span class="required">*</span></label>
            <input type="date" class="form-control" v-bind:class="{invalid: !oweDate.isValid}" v-model.trim="oweDate.val"/>
        </div>

        <div class="form-group">
            <label>Enter Amount <span class="required">*</span></label>
            <input type="number" class="form-control" v-bind:class="{invalid: !oweAmount.isValid}" v-model.number="oweAmount.val" placeholder="Enter Amount"/>
        </div>

        <br/>
        <div align="center" class="submit-Btn">
            <input type="button" class="btn btn-success btn-xs" value="Submit" v-on:click.prevent="editOwe"/>
        </div>

        <div>
            <table class="table table-bordered historyTable">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <owe-history-list v-for="oweHistory in oweHistoryById" v-bind:key="oweHistory.oweHistoryId"
                    v-bind:id="oweHistory.oweHistoryId"
                    v-bind:oweHistoryDate="oweHistory.oweHistoryDate"
                    v-bind:oweHistoryamount="oweHistory.oweHistoryamount"
                    ></owe-history-list>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import oweHistoryList from './oweHistoryList.vue';

    export default {
        components: {
            'owe-history-list': oweHistoryList
        },

        props:['editId'],
        data(){
            return{
                oweDate: {val: new Date().toISOString().slice(0, 10), isValid: true},
                oweAmount: {val: null, isValid: true},
                formIsValid: true,
            }
        },

        methods: {
            validate(){
                this.formIsValid = true;

                if(this.oweDate.val === ''){
                    this.oweDate.isValid = false;
                    this.formIsValid = false;
                }

                if(!this.oweAmount.val || this.oweAmount.val < 0){
                    this.oweAmount.isValid = false;
                    this.formIsValid = false;
                }
            },

            editOwe(){
                this.validate();

                if (!this.formIsValid) {
                    return;
                }

                const oweData = {
                    oweHistoryId: Math.random().toString().replace("0.", ""),
                    oweHistoryDate: this.oweDate.val,
                    oweHistoryamount: this.oweAmount.val.toFixed(2),
                }

                this.$store.dispatch('owe/editOwe', {oweData: oweData, oweId: this.editId});
                this.$emit('hideEditModal');
            }
        },

        computed: {
            oweHistoryById(){
                const owes = this.$store.getters['owe/owe'];
                const oweData = owes.findIndex(res => {return res.id === this.editId});
                return owes[oweData]['oweHistory'];  
            }
        }
    }
</script>

<style scoped>
    .historyTable{
        margin-top: 10px;
    }
</style>