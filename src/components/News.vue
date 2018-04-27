<template lang="pug">
.page.page-news
    h1 {{ pageName }}
</template>

<script>
export default {
  name: 'news',
  data: () => {
    return {
      pageName: 'News'
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
