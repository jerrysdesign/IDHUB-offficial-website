<template lang="pug">
.section-joinus
  .container
    .row
      .text-box
        h4 加入我们,
        h5 发展区块链数位身份 IDHub 让你于社群与商业展现个人价值
      .btn-box
        .btn
          | 职务清单
</template>


<script>
export default {
  name: 'section-joinus'
}
</script>


<style lang="scss" scoped>

@import '../stylesheets/_abstracts/_variables';
@import '../stylesheets/_abstracts/_mixin';
@import '../stylesheets/_abstracts/_grid';
.section-joinus {
  background-image: url(../assets/bg-joinus.png);
  background-size: cover;
  .row {
    display: flex;
    align-items: center;
  }
  .text-box {
    @include span(5);
    @include push(2);
    text-align: left;
    color: $color-gray-ligtest;
    h4 {
      font-size: 48px;
      font-weight: 700;
    }
    h5 {
      font-size: 18px;
      font-weight: 100;
    }
  }
  .btn-box {
    @include span(4);
    .btn {
      background: #FFFFFF;
      box-shadow: 20px 20px 60px 0 rgba(0,0,0,0.40);
      border-radius: 5px;
      padding: 15px 30px;
      color: $color-primary-dark;
    }
  }
}
</style>
