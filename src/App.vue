<template lang="pug">
#app
  main.page_wrapper
    Headbar
    router-view
    Footbar
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Headbar from '@/components/Header'
import Footbar from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueI18n from 'vue-i18n';
import i18n from '@/i18n';
Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.config.productionTip = false

export default {
  name: 'App',
  i18n,
  components: {
    Headbar,
    Footbar,
  }
}
</script>

<style lang="scss">
  @import './stylesheets/main';
</style>
