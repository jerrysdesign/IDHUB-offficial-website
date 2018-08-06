<template lang="pug">
div(v-bind:class='pageName')
  Headbar
  .section-news
    .container
      .section__header
        h2 {{ $t('nav.news') }}
      HomeSectionNewsList(v-bind:order='999')
</template>


<script>
import Headbar from '@/components/Header'
import HomeSectionNewsList from '@/containers/HomeSectionNewsList'
export default {
  name: 'news',
  data: () => {
    return {
      pageName: 'page-news',
      contents: []
    }
  },
  components: {
    Headbar,
    HomeSectionNewsList
  },
}
</script>


<style lang="scss" scoped>
</style>
