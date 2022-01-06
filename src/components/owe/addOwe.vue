<template>
    <div class="modal-body">
        <div class="form-group">
            <label>Enter Reason <span class="required">*</span></label>
            <input type="text" class="form-control" placeholder="Enter Reason" v-bind:class="{invalid: !oweReason.isValid}" v-model.trim="oweReason.val"/>
        </div>

        <div class="form-group">
            <label>Select Type <span class="required">*</span></label>
            <select class="form-control" v-bind:class="{invalid: !oweType.isValid}" v-model.trim="oweType.val">
            <option value="">Select Type</option>
            <option value="Loan">Loan</option>
            <option value="Owe">Owe</option>
            </select>
        </div>

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
            <input type="button" class="btn btn-success btn-sm" value="Submit" v-on:click.prevent="saveOwe"/>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                oweDate: {val: new Date().toISOString().slice(0, 10), isValid: true},
                oweAmount: {val: null, isValid: true},
                oweType: {val: '', isValid: true},
                oweReason: {val: '', isValid: true},
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

                if(this.oweType.val === ''){
                    this.oweType.isValid = false;
                    this.formIsValid = false;
                }

                if(this.oweReason.val === ''){
                    this.oweReason.isValid = false;
                    this.formIsValid = false;
                }

                if(!this.oweAmount.val || this.oweAmount.val < 0){
                    this.oweAmount.isValid = false;
                    this.formIsValid = false;
                }
            },

            saveOwe(){
                this.validate();

                if (!this.formIsValid) {
                    return;
                }

                const oweData = {
                    id: Math.random().toString().replace("0.", ""),
                    oweDate: this.oweDate.val,
                    oweAmount: this.oweAmount.val.toFixed(2),
                    oweType: this.oweType.val,
                    oweReason: this.oweReason.val,
                    oweHistory:[
                        {
                            oweHistoryId: Math.random().toString().replace("0.", ""),
                            oweHistoryDate: this.oweDate.val,
                            oweHistoryamount: this.oweAmount.val.toFixed(2),
                        }
                    ]
                }

                this.$store.dispatch('owe/addOwe', oweData);
                this.$emit('hideModal');
            },
        }
    }
</script>