<template lang="pug">
#app
  main.page_wrapper
    Sitemenu
    router-view
    Footbar
</template>

<script>
import Vue from 'vue'
import Sitemenu from '@/components/Menu'
import BootstrapVue from 'bootstrap-vue'
import Footbar from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueI18n from 'vue-i18n';
import i18n from '@/i18n';
import { store } from '@/store/header'
Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.config.productionTip = false

export default {
  name: 'App',
  i18n,
  components: {
    Sitemenu,
    Footbar
  },
  store,
}
</script>
<style lang="scss">
  @import './stylesheets/main';
</style>
