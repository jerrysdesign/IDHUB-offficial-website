<template lang="pug">
div(v-bind:class='pageName')
  .cover
    Headbar
    .container
      .section__header
        h2 {{ $t('careers_page.title') }}
        h3 {{ $t('careers_page.subtitle') }}
  .careers
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
</style>
