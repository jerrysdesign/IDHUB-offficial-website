<template lang="pug">
#app
  router-view
  Foot
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Foot from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

export default {
  name: 'App',
  components: {
    Foot
  }
}
</script>

<style lang="scss">
  @import './stylesheets/main';
</style>
