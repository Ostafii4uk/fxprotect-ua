<template>
  <Header />
</template>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
</style>

<script>
  import Header from './components/header/Header.vue'
  
  export default {
    name: 'App',
    components: { Header }
  }
</script>
