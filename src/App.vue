<template lang="pug">
#app
  main.page_wrapper
    router-view
    Footbar
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Footbar from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

export default {
  name: 'App',
  components: {
    Footbar,
  }
}
</script>

<style lang="scss">
  @import './stylesheets/main';
</style>
