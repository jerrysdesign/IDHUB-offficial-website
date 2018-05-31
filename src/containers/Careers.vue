<template lang="pug">
div(v-bind:class='pageName')
  .cover
    Headbar
    .container
      .section__header
        h2 {{ $t('careers_page.title') }}
        h3 {{ $t('careers_page.subtitle') }}
  .section-careers
    .container.careers-container
      ul
        li.careers-item
          h4 # ENGINEERING
          h5 # Software Engineer - Frontend
          h6 Develop high quality website for IDHub
          ul
            li Develop high quality website for IDHub
            li 2+ years of front end working experience
            li Solid knowledge on HTML5, CSS3, JavaScript (ES6+), and webpack
            li Familiar with React and Redux
            li Familiar with RESTful APIs and WebSocket
            li Experience in SVG, canvas graphics, and D3.js (optional)
            li Experience in reactive programming, RxJS (optional)
            li Experience in Web UI/UX design (optional)
            li Passionate with new technologies
        li.careers-item
          h4 # ENGINEERING
          h5 # Software Engineer - Frontend
          h6 Develop high quality website for IDHub
          ul
            li Develop high quality website for IDHub
            li 2+ years of front end working experience
            li Solid knowledge on HTML5, CSS3, JavaScript (ES6+), and webpack
            li Familiar with React and Redux
            li Familiar with RESTful APIs and WebSocket
            li Experience in SVG, canvas graphics, and D3.js (optional)
            li Experience in reactive programming, RxJS (optional)
            li Experience in Web UI/UX design (optional)
            li Passionate with new technologies

</template>

<script>
import Headbar from '@/components/Header'

export default {
  name: 'careers',
  data: () => {
    return {
      pageName: 'page-careers'
    }
  },
  components: {
    Headbar
  }
}
</script>


<style lang="scss" scoped>
@import '../stylesheets/_abstracts/_variables';
@import '../stylesheets/_abstracts/_mixin';
@import '../stylesheets/_abstracts/_grid';
.page-careers {
  .cover {
    height: auto;
    background-image: url(../assets/page-cover-bg.svg);
    background-position: 0 center;
    background-color: $color-primary-dark;
    background-repeat: no-repeat;
    .header {
      background: none;
    }
    .section__header {
      h2, h3 {
        color: $color-gray-ligtest;
      }
      text-align: center;
      padding-top: 80px;
      padding-bottom: 80px;
      @include tablet {
        padding-top: 120px;
        padding-bottom: 120px;
      }
      @include laptop  {
        padding-top: 150px;
        padding-bottom: 150px;
      }
    }
  }
}
.section-careers {
  /* background: */
  background-image: linear-gradient(-180deg, #061843 0%, #05112E 100%);
  @include clearfix;
  ul {
    @include clear_list;
  }
}
.careers {
  &-container {
    @include tablet {
      @include span(6 of 8);
      @include push(1);
    }
    @include laptop {
      @include span(8 of 12);
      @include push(2);
    }
  }
  &-item {
    text-align: left;
    margin-bottom: 3rem;
    h4 {font-size: 36px; color: #1A47B0; margin-bottom: .5rem;}
    h5 {font-size: 24px; color: #1A47B0; margin-bottom: .5rem;}
    h6 {color: $color-gray-light; margin-bottom: 1em;}
    li {color: $color-gray-light;}
  }
}
</style>
