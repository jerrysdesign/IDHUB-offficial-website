<template lang="pug">
.page.page-app
    h1 {{ pageName }}
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      pageName: 'App'
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
