<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        MyWallet
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><router-link class="nav-link" to="/income">Income</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/expense">Expense</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/owe">Owe/Loan</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
    nav {
        margin-top: 2rem;
    }

    .router-link-active{
        color: black!important;
    }
</style>