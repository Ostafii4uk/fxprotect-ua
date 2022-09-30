<template>
  <Header />
  <Preview />
  <AboutProduct />
  <SelectedProjects />
  <SecurityType />
  <Footer />
  <Instagram />
</template>

<style lang='scss' rel='stylesheet/scss' src='./assets/scss/main.scss' />

<script>
  import Header from './components/header/Header.vue'
  import Preview from './components/preview/Preview.vue'
  import AboutProduct from './components/about-product/AboutProduct.vue'
  import SelectedProjects from './components/selected-projects/SelectedProjects.vue'
  import SecurityType from './components/security-type/SecurityType.vue'
  import Footer from './components/footer/Footer.vue'
  import Instagram from './components/instagram/Instagram.vue'
  
  export default {
    name: 'App',
    components: { Header, Preview, AboutProduct, SelectedProjects, SecurityType, Footer, Instagram }
  }
</script>
