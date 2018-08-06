<template lang="pug">
div
  .timeline-box
    .container
      .timeline-graph
        img(src='@/assets/tlimeline-graph.png')
  .timeline-line
</template>

<script>
export default {
  name: 'section-roadmap'
}
</script>

<style lang="scss" scoped>
.timeline-box {
  position: relative;
  height: auto;
  height: 365px;
  overflow-x: scroll;
  .timeline-graph {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
    img {
      width: 1011px;
    }
  }
}
.timeline-line {
  margin-top: -16px;
  width: 100%;
  border-top: 4px solid #0F358E;
  height: 8px;
}
</style>
