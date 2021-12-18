<template>
  <base-card>
    <base-head title="Owe" buttonName="Add Owe" v-on:openModal="openModal"></base-head>
    <base-modal :myModal="isModalOpen" title="Add Owe" v-on:closeModal="closeModal">
      <div class="modal-body">
        <div class="form-group">
          <label>Enter Reason <span class="required">*</span></label>
          <input type="text" class="form-control" v-bind:class="{invalid: !oweReason.isValid}" v-model.trim="oweReason.val"/>
        </div>

        <div class="form-group">
          <label>Enter Date <span class="required">*</span></label>
          <input type="date" class="form-control" v-bind:class="{invalid: !oweDate.isValid}" v-model.trim="oweDate.val"/>
        </div>

        <div class="form-group">
          <label>Enter Amount <span class="required">*</span></label>
          <input type="number" class="form-control" v-bind:class="{invalid: !oweAmount.isValid}" v-model.number="oweAmount.val"/>
        </div>

        <br/>
        <div align="center">
          <input type="button" class="btn btn-success btn-xs" value="Submit" v-on:click.prevent="saveOwe"/>
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
        <tr v-for="owe in owes" v-bind:key="owe.id">
          <th scope="row">{{ owe.id }}</th>
          <td>{{ owe.oweReason }}</td>
          <td>{{ owe.oweDate }}</td>
          <td>{{ owe.oweAmount }}</td>
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
        oweReason: {val: '', isValid: true},
        oweDate: {val: '', isValid: true},
        oweAmount: {val: null, isValid: true},
        formIsValid: true,
      }
    },

    methods: {
      validate(){
        this.formIsValid = true;

        if(this.oweReason.val === ''){
          this.oweReason.isValid = false;
          this.formIsValid = false;
        }

        if(this.oweDate.val === ''){
          this.oweDate.isValid = false;
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
          id: 1,
          oweReason: this.oweReason.val,
          oweDate: this.oweDate.val,
          oweAmount: this.oweAmount.val.toFixed(2),
        }

        this.$store.dispatch('owe/addOwe', oweData);
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
      owes(){
         return this.$store.getters['owe/owe'];
      }
    }
  }
</script>
