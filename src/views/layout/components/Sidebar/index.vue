<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      text-color="#91949D"
      active-text-color="#02B7DF"
      class="sidebar-menu"
    >
      <div class="logo-wrapper">
        <img src="../../../../assets/img/logo.png" alt="富森LOGO" class="logo">
      </div>
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style scoped lang="scss">
  .logo-wrapper{
    width: 100%;
    .logo{
      transition: all .5s linear;
      width: 208px;
      height: 69px;
    }
  }
  .sidebar-menu{
    background: #242C3E;
  }
</style>
