<template>
  <Header />
  <Preview />
</template>

<style lang='scss' rel='stylesheet/scss' src='./assets/scss/main.scss' />

<script>
  import Header from './components/header/Header.vue'
  import Preview from './components/preview/Preview.vue'
  
  export default {
    name: 'App',
    components: { Header, Preview }
  }
</script>
