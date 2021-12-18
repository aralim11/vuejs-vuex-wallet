<template>
  <base-card>
    <div class="row w-100 mt-3">
      <div class="col-md-3">
        <div class="card border-info mx-sm-1 p-3">
          <div class="card border-info shadow text-info p-3 my-card">
            <span class="fa fa-calculator" aria-hidden="true"></span>
          </div>
          <div class="text-info text-center mt-3">
            <h4>Total Income</h4>
          </div>
          <div class="text-info text-center mt-2"><h1>{{ totalIncome }}</h1></div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card border-danger mx-sm-1 p-3">
          <div class="card border-danger shadow text-danger p-3 my-card">
            <span class="fa fa-calculator" aria-hidden="true"></span>
          </div>
          <div class="text-danger text-center mt-3">
            <h4>Total Expense</h4>
          </div>
          <div class="text-danger text-center mt-2"><h1>{{ totalExpense }}</h1></div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card border-success mx-sm-1 p-3">
          <div class="card border-success shadow text-success p-3 my-card">
            <span class="fa fa-calculator" aria-hidden="true"></span>
          </div>
          <div class="text-success text-center mt-3">
            <h4>Total Owe</h4>
          </div>
          <div class="text-success text-center mt-2"><h1>{{ totalOwe }}</h1></div>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
  export default {
    computed: {
      totalIncome() {
        return this.$store.getters['income/totalIncome'];
      },

      totalExpense() {
        return this.$store.getters['expense/totalExpense'];
      },

      totalOwe() {
        return this.$store.getters['owe/totalOwe'];
      },
    }
  }
</script>

<style scoped>
  .margin_left_right_20 {
    margin-left: 20px;
    margin-right: 20px;
  }

  .my-card {
    position: absolute;
    left: 40%;
    top: -20px;
    border-radius: 50%;
  }
</style>
