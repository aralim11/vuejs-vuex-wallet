<template>
  <base-card>
    <base-head title="Expense" buttonName="Add Expense" v-on:openModal="openModal"></base-head>
    <base-modal :myModal="isModalOpen" title="Add Expense" v-on:closeModal="closeModal">
      <div class="modal-body">
        <div class="form-group">
          <label>Enter Reason <span class="required">*</span></label>
          <input type="text" class="form-control" v-bind:class="{invalid: !expenseReason.isValid}" v-model.trim="expenseReason.val"/>
        </div>

        <div class="form-group">
          <label>Enter Date <span class="required">*</span></label>
          <input type="date" class="form-control" v-bind:class="{invalid: !expenseDate.isValid}" v-model.trim="expenseDate.val"/>
        </div>

        <div class="form-group">
          <label>Enter Amount <span class="required">*</span></label>
          <input type="number" class="form-control" v-bind:class="{invalid: !expenseAmount.isValid}" v-model.number="expenseAmount.val"/>
        </div>

        <br/>
        <div align="center">
          <input type="button" class="btn btn-success btn-xs" value="Submit" v-on:click.prevent="saveExpense"/>
        </div>
      </div>
    </base-modal>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Reason</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in expenses" v-bind:key="expense.id">
          <th scope="row">{{ expense.id }}</th>
          <td>{{ expense.expenseReason }}</td>
          <td>{{ expense.expenseDate }}</td>
          <td>{{ expense.expenseAmount }}</td>
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
        expenseReason: {val: '', isValid: true},
        expenseDate: {val: '', isValid: true},
        expenseAmount: {val: null, isValid: true},
        formIsValid: true,
      }
    },

    methods: {
      validate(){
        this.formIsValid = true;

        if(this.expenseReason.val === ''){
          this.expenseReason.isValid = false;
          this.formIsValid = false;
        }

        if(this.expenseDate.val === ''){
          this.expenseDate.isValid = false;
          this.formIsValid = false;
        }

        if(!this.expenseAmount.val || this.expenseAmount.val < 0){
          this.expenseAmount.isValid = false;
          this.formIsValid = false;
        }
      },

      saveExpense(){
        this.validate();

        if (!this.formIsValid) {
          return;
        }

        const expenseData = {
          id: 1,
          expenseReason: this.expenseReason.val,
          expenseDate: this.expenseDate.val,
          expenseAmount: this.expenseAmount.val.toFixed(2),
        }

        this.$store.dispatch('expense/addExpense', expenseData);
        this.isModalOpen = false;
      },

      openModal(){
        this.isModalOpen = true;
      },

      closeModal(){
        this.isModalOpen = false;
      },
    },

    computed: {
      expenses(){
         return this.$store.getters['expense/expense'];
      }
    }
  }
</script>
