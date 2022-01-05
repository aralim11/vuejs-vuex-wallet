<template>
  <base-card>
    <base-head title="Income" buttonName="Add Income" v-on:openModal="openModal"></base-head>
    <base-modal :myModal="isModalOpen" title="Add Income" v-on:closeModal="closeModal">
      <div class="modal-body">
        <div class="form-group">
          <label>Enter Reason <span class="required">*</span></label>
          <input type="text" class="form-control" v-bind:class="{invalid: !incomeReason.isValid}" v-model.trim="incomeReason.val" />
        </div>

        <div class="form-group">
          <label>Enter Date <span class="required">*</span></label>
          <input type="date" class="form-control" v-bind:class="{invalid: !incomeDate.isValid}" v-model.trim="incomeDate.val" />
        </div>

        <div class="form-group">
          <label>Enter Amount <span class="required">*</span></label>
          <input type="number" class="form-control" v-bind:class="{invalid: !incomeAmount.isValid}" v-model.number="incomeAmount.val" />
        </div>

        <br />
        <div align="center">
          <input type="button" class="btn btn-success btn-xs" value="Submit" v-on:click.prevent="saveInocme" />
        </div>
      </div>
    </base-modal>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Reason</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="income in incomes" :key="income.id">
          <th scope="row">{{ income.incomeReason }}</th>
          <td>{{ income.incomeDate }}</td>
          <td>{{ income.incomeAmount }}</td>
        </tr>
      </tbody>
    </table>
  </base-card>
</template>

<script>
  export default {
    data(){
      return{
        isModalOpen: false,
        incomeReason: {val: '', isValid: true},
        incomeDate: {val: '', isValid: true},
        incomeAmount: {val: null, isValid: true},
        formIsValid: true,
      }
    },
    methods: {
      validate(){
        this.formIsValid = true;

        if(this.incomeReason.val === ''){
          this.incomeReason.isValid = false;
          this.formIsValid = false;
        }

        if(this.incomeDate.val === ''){
          this.incomeDate.isValid = false;
          this.formIsValid = false;
        }

        if(!this.incomeAmount.val || this.incomeAmount.val < 0){
          this.incomeAmount.isValid = false;
          this.formIsValid = false;
        }
      },

      saveInocme(){
        this.validate();

        if (!this.formIsValid) {
          return;
        }

        const incomeData = {
          id: Math.random().toString().replace("0.", ""),
          incomeReason: this.incomeReason.val,
          incomeDate: this.incomeDate.val,
          incomeAmount: this.incomeAmount.val.toFixed(2),
        }

        this.$store.dispatch('income/addIncome', incomeData);
        this.isModalOpen = false;
      },

      openModal(){
        this.isModalOpen = true;
      },

      closeModal(){
        this.isModalOpen = false;
      }
    },

    computed: {
      incomes(){
        return this.$store.getters['income/income'];
      }
    }
  }
</script>