<template lang="pug">
#header
  Sitemenu
  nav.header
    .container.header__container
      .header__left_box
        ul.header__menu_list.header__item--desktop
          li.header__menu_item
            a.header__logo_box(href='#', title='Home')
            //- img.header__logo_img(src='img/etc/logo--circle--white.svg', alt='logo')
          li.header__menu_item(v-for="lan in lang")
            button(@click='changeLang')
              | {{lan}}
      .header__right_box
        ul.header__menu_list.header__item--desktop
          li.header__menu_item(v-for='link in links')
            router-link.header__menu_link.header__menu_link--white(:to='link.to')
              | {{ $t(link.text) }}
      .header__right_box
        button.header__burger_button.js-open-menu.header__item--mobile(type='button', @click='openMenu')
</template>


<script>
const overlay = document.querySelector('.js-overlay');
const menu = document.querySelector('.js-menu');
const body = document.querySelector('body');
import Sitemenu from '@/components/Menu';
import { store } from '@/store/header';
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'headbar',
  data: () => {
    return {
      lang: ['en','cn','zh'],
      links: [
        { to: 'home', text: 'home' },
        { to: 'tech', text: 'tech' },
        { to: 'news', text: 'news' },
        { to: 'news', text: 'activities' },
        { to: 'team', text: 'team' },
        { to: 'contact', text: 'contact' }
      ]
    }
  },
  components: {
    Sitemenu
  },
  store,
  methods: {
    ...mapActions(['openMenu']),
    changeLang(target){
      target.preventDefault()
      const locale = target.target.textContent
      Vue.config.lang = locale
      this.$i18n.locale = locale
      // this.$store.dispatch('setLang', setLang)
    },
  }
}
</script>


<style lang='scss' scoped>
.header__left_box {
  button {
    color: white;
  }
}

</style>
