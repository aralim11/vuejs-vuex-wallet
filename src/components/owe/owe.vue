<template>
  <base-card>
    <base-head title="Owe/Loan" buttonName="Add Owe/Loan" v-on:openModal="openModal"></base-head>
    <base-modal :myModal="isModalOpen" title="Add Owe/Loan" v-on:closeModal="closeModal">
      <add-owe @hideModal="closeModal"></add-owe>
    </base-modal>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">Reason</th>
          <th scope="col">Date</th>
          <th scope="col">Status</th>
          <th scope="col">Amount</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <owe-lists v-for="owe in owes" v-bind:key="owe.id"
        :id="owe.id"
        :oweType="owe.oweType"
        :oweDate="owe.oweDate"
        :oweAmount="owe.oweAmount"
        :oweReason="owe.oweReason"
        @openEditModal="openEditModal"
        ></owe-lists>
      </tbody>
    </table>

    <base-modal :myModal="isEditModalOpen" title="Edit Owe/Loan" v-on:closeModal="closeEditModal">
      <edit-owe :editId="editId" @hideEditModal="closeEditModal"></edit-owe>
    </base-modal>
  </base-card>
</template>

<script>
  import oweLists from './oweLists.vue';
  import addOwe from './addOwe.vue';
  import editOwe from './editOwe.vue';

  export default {
    components:{
      'owe-lists': oweLists,
      'add-owe': addOwe,
      'edit-owe': editOwe,
    },

    data(){
      return{
        isModalOpen: false,
        isEditModalOpen: false,
        editId: '',
      }
    },

    methods: {
      openModal(){
        this.isModalOpen = true;
      },

      closeModal(){
        this.isModalOpen = false;
      },

      openEditModal(id){
        this.editId = id;
        this.isEditModalOpen = true;
      },

      closeEditModal(){
        this.isEditModalOpen = false;
      },
    },

    computed: {
      owes(){
        return this.$store.getters['owe/owe'];
      }
    }
  }
</script>

<style scoped>
  .progress {
    margin-top: 6px;
  }
</style>
