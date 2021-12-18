<template>
  <div class="container">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    TheHeader,
  }
}
</script>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css');
  
  body{
    background-color: #F8FAFC;
  }

  .required{
    color: red;
  }

  .invalid{
    border: 1px solid red;
  }
</style>