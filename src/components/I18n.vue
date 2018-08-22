<template lang="pug">
  .language-list
    ul.flages
      li(v-for='lang in langs')
        a(@click='changeLang(lang)', href='javascript:;')
          span.flag(:style="{ backgroundImage: 'url(' + lang.image + ')' }")
          span.text {{ lang.display }}
</template>

<script>
import Vue from 'vue'
// import { mapState, mapActions } from 'vuex'

export default {
  name: 'i18n-switch',
  data: function(){
    return {
      showModal: false,
      langs: [
        {'target': 'cn', 'display': '中文-简体', 'image': './zh-hans.png'},
        {'target': 'tw', 'display': '中文-繁體', 'image': './zh-hant.png'},
        {'target': 'en', 'display': 'English', 'image': './en.png'}
      ]
    }
  },
  methods: {
    changeLang(target){
      const locale = target.target
      Vue.config.lang = locale
      this.$i18n.locale = locale
      this.$emit('closeHook')
    }
  }
}

</script>

<style lang='scss' scoped>
@import '../stylesheets/_abstracts/_variables';
@import '../stylesheets/_abstracts/_mixin';
@import '../stylesheets/_abstracts/_grid';
.flages {
  @include clear_list;
  text-align: center;
  li {
    display: inline-block;
    padding: 15px;
    .state-opened & {
      display: block;
      padding: 5px 15px;
      text-align: left;
    }
    a {
      text-decoration: none;
      vertical-align: middle;
      display: inline-block;
      cursor: pointer;
      color: rgba(white, .8);
      position: relative;
      &:hover {
        color: rgba(white, 1);
      }
      span {
        display: inline-block;
        vertical-align: middle;
        line-height: 40px;
        .state-opened & {
          line-height: 24px;
        }
      }
      .flag {
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        border: 2px solid rgba(white, 1);
        .state-opened & {
          width: 24px;
          height: 24px;
        }
      }
      .text {
        padding-left: 50px;
        float: left;
        display: block;
        position: relative;
        z-index: 2;
        .state-opened & {
          padding-left: 34px;
        }
      }
    }
  }
  .hide {
    @include hide;
  }
}
</style>
