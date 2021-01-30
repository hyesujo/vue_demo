<template>
  <div class="main" :click="main" :style="mainWidth">
    <SideNav/>
    <TopNav/>
  </div>
</template>

<script>
import {store, mutations } from '@/store.js'
import TopNav from '@/components/TopNav';
import SideNav from '@/components/SideNav';
export default {
  methods : {
    main: mutations.toggleNav
  },
  components: {
    TopNav,
    SideNav
  }, 
  computed: {
    mainWidth() {
      return {
        width: store.isNavOpen ? "20%" : "0%"
      }
    }
  }
}
</script>

<style scoped>
* {
    box-sizing:border-box;
    padding: 0;
    margin: 0;
}

body,html {
    font-size: 0;
    overflow-x: hidden;
}
.main {
    overflow: hidden;
    min-width: 1150px;
    width: 100%;
}
</style>