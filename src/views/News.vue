<template lang="pug">
div(v-bind:class='pageName')
  Headbar
  .section-news
    .container
      .section__header
        h2 {{ $t('nav.news') }}
      SectionNewsList(v-bind:order='999')
</template>


<script>
import Headbar from '@/components/Header'
import SectionNewsList from '@/views/section/NewsList'
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
    SectionNewsList
  },
}
</script>


<style lang="scss" scoped>
</style>
