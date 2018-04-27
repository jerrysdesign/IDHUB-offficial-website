<template lang="pug">
  #app
    router-view
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Footer from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

export default {
  name: 'App',
  }
}
</script>

<style lang="scss">
  @import './stylesheets/main';
</style>
