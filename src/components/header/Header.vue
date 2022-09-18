<template src='./Header.html' />
<style lang='scss' rel='stylesheet/scss' scoped src='../../assets/scss/header/Header.scss' />

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

export default {
  name: 'Header',
  components: {
    FontAwesomeIcon
  },
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
