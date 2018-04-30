<template lang="pug">
#header
  Sitemenu
  nav.header
    .container.header__container
      .header__left_box
        a.header__logo_box(href='#', title='Home')
          //- img.header__logo_img(src='img/etc/logo--circle--white.svg', alt='logo')
      .header__right_box
        ul.header__menu_list.header__item--desktop
          li.header__menu_item(v-for='link in links')
            router-link.header__menu_link.header__menu_link--white(:to='link.to')
              | {{ link.text }}
      .header__right_box
        button.header__burger_button.js-open-menu.header__item--mobile(type='button')
</template>


<script>
const overlay = document.querySelector('.js-overlay');
const menu = document.querySelector('.js-menu');
const body = document.querySelector('body');
import Sitemenu from '@/components/Menu'
export default {
  name: 'headbar',
  data: () => {
    return {
      links: [
        { to: 'home', text: 'Home' },
        { to: 'tech', text: '技术' },
        { to: 'news', text: '媒体报导' },
        { to: 'news', text: '最新活动' },
        { to: 'team', text: '团队' },
        { to: 'contact', text: '联络我们' }
      ]
    }
  },
  components: {
    Sitemenu
  }
}
</script>


<style lang='scss' scoped>


</style>
