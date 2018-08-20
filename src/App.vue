<template lang="pug">
#app.page_wrapper
  Sitemenu
  router-view
  Footbar
</template>

<script>
import Vue from 'vue'
import Sitemenu from '@/components/Menu'
import Footbar from '@/components/Footer'
import VueI18n from 'vue-i18n'
import i18n from '@/i18n'
import { store } from '@/store/header'
Vue.use(VueI18n)
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
