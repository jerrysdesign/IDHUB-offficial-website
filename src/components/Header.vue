<template lang="pug">
#header
  nav.header
    .container.header__container
      .header__left_box
        a.header__logo_box(href='#', title='Home')
          .header__logo_img
          .header__logo_text
            | IDHub
          //- li.header__menu_item(v-for="lan in lang")
          //-   button(@click='changeLang')
          //-     | {{lan}}
      .header__right_box
        ul.header__menu_list.header__item--desktop
          li.header__menu_item(v-for='link in links')
            router-link.header__menu_link.header__menu_link--white(:to='link.to')
              | {{ $t(link.text) }}
      .header__right_box
        button.header__burger_button.header__item--mobile(type='button', @click='openMenu')
</template>


<script>
const body = document.querySelector('body')
import { store } from '@/store/header'
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'headbar',
  data: () => {
    return {
      lang: ['en','cn','zh'],
      links: [
        { to: 'home', text: 'home' },
        { to: 'tech', text: 'tech' },
        { to: 'news', text: 'news' },
        { to: 'activities', text: 'activities' },
        { to: 'team', text: 'team' },
        { to: 'contact', text: 'contact' }
      ]
    }
  },
  components: {
  },
  store,
  methods: {
    ...mapActions(['openMenu']),
    changeLang(target){
      target.preventDefault()
      const locale = target.target.textContent
      Vue.config.lang = locale
      this.$i18n.locale = locale
    },
  }
}
</script>


<style lang='scss' scoped>
@import '../stylesheets/_abstracts/_variables';
.header__left_box {
  button {
    color: white;
  }
}
.page-tech, .page-activities, .page-careers {
  .cover {
    .header {
      background: none;
    }
  }
}
</style>
