<template lang="pug">
.page(v-bind:class='pageName')
    h1 {{ pageName }}
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      pageName: 'page-app'
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
