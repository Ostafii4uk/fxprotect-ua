<template src='./Header.html' />
<style lang='scss' rel='stylesheet/scss' scoped src='../../assets/scss/header/header.scss' />

<script>
export default {
  name: 'Header',
  data() {
    return {
      navItems: [{
        keyword: 'AboutUs',
        mouseVisibleFlag: false,
        dropdownVisibleFlag: false
      }, {
        keyword: 'Products',
        mouseVisibleFlag: false,
        dropdownVisibleFlag: false
      }, {
        keyword: 'ForClients',
        mouseVisibleFlag: false,
        dropdownVisibleFlag: false
      }, {
        keyword: 'ForPartner',
        mouseVisibleFlag: false,
        dropdownVisibleFlag: false
      }, {
        keyword: 'InternetShop',
        mouseVisibleFlag: false,
        dropdownVisibleFlag: false
      }],
      navMobileVisibleFlag: false
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
    },
    onClickNavMobileVisibleFlag() {
      this.navMobileVisibleFlag = !this.navMobileVisibleFlag
    },
    onClickNavItemDropdownVisibleFlag(navItemKeyword) {
      const navItem = this.navItems.find(navItem => navItem.keyword === navItemKeyword)
      navItem.dropdownVisibleFlag = !navItem.dropdownVisibleFlag
    },
    getNavItemMobileDropdownVisibleFlag(navItemKeyword) {
      const navItem = this.navItems.find(navItem => navItem.keyword === navItemKeyword)
      return  navItem.dropdownVisibleFlag
    }
  }
}
</script>
