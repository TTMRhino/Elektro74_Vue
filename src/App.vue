<template>
  <div id="app"> 
    <menu-header></menu-header>
    <router-view>      
    </router-view>
  </div>
</template>

<script>
import Header from "./pages/components/Header.vue"

export default {
  name: 'App',
  components: {
   'menu-header': Header
  }
}
</script>

<style>

</style>
