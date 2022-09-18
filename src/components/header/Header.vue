<template src='./Header.html' />
<style lang='scss' rel='stylesheet/scss' scoped src='../../assets/scss/header/header.scss' />

<script>
export default {
  name: 'Header',
  data() {
    return {
      navItems: [{
        keyword: 'Products',
        mouseVisibleFlag: false
      }, {
        keyword: 'ForClients',
        mouseVisibleFlag: false
      }]
    }
  },
  methods: {
    mouseOverNavItem(keyword) {
      if (!keyword) {
        this.navItems.forEach(navItem => navItem.mouseVisibleFlag = false)
      } else {
        this.navItems.forEach(navItem => navItem.mouseVisibleFlag = false)
        this.navItems.find(navItem => navItem.keyword === keyword).mouseVisibleFlag = true
      }
    },
    mouseLeaveNavItem(keyword) {
      this.navItems.find(navItem => navItem.keyword === keyword).mouseVisibleFlag = false
    },
    getItemVisibleFlage(keyword) {
      return this.navItems.find(navItem => navItem.keyword === keyword).mouseVisibleFlag
    }
  }
}
</script>
