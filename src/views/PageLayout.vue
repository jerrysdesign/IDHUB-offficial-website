<template lang="pug">
div(v-bind:class='pageName')
  .cover
    Headbar
    slot(name='header')
  slot(name='body')
  slot(name='footer')
</template>

<script>
import Headbar from '@/components/Header'

export default {
  name: 'page-layout',
  data: () => {
    return {
      pageName: 'page-layout'
    }
  },
  components: {
    Headbar
  }
}
</script>


<style lang="scss" scoped>
</style>
