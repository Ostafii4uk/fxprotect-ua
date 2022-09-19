<template>
  <Header />
  <Preview />
  <AboutProduct />
  <SelectedProjects />
</template>

<style lang='scss' rel='stylesheet/scss' src='./assets/scss/main.scss' />

<script>
  import Header from './components/header/Header.vue'
  import Preview from './components/preview/Preview.vue'
  import AboutProduct from './components/about-product/AboutProduct.vue'
  import SelectedProjects from './components/selected-projects/SelectedProjects.vue'
  
  export default {
    name: 'App',
    components: { Header, Preview, AboutProduct, SelectedProjects }
  }
</script>
