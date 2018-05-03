<template lang="pug">
div(v-bind:class='pageName')
  .cover
    Headbar
    .container.cover__container
      .cover__pic_box
        img.cover__img(src='img/')
      .cover__text_box
        h3.cover__sub-title
          span.cover__sub-title_text
            | 基于开放原则的去中心化
        h2.cover__title
          span.cover__title_text
            | 安全数字身份生态系统
        .cover__description_box
          span.cover__description_text
            | IDHub 是建立在开放原则之上，基于区块链技术的去中心化数字身份应用平台，具备良好的技术兼容性与功能拓展性。以安全、自主、可信的身份管理机制，最终实现以数字身份链接一切 (社会服务、数字资产、数字生活等) 的愿景。
        a.button.button--border-white.button--icon-downliad(href='javascript:;')
          | 白皮書下載
        a.cover__link(href='javascript:;')
          | 更多
    .cover__footer.cover__footer
      .cover__footer_left_box
        a.cover__footer_button.button.button--blue.button--blue-shadow.button--extra-small
          | new
        span.cover__footer_text
          | IDHub token 已发行，ERC20 合约地址为 0x29F20242051AccDA50D52a7E272A5F23237e4696。请核对合约地址，避免受骗。
  .section-version
  .section-case
  .section-roadmap
  .section-advisors
  .section-download
  .section-social
  .section-media
</template>

<script>
import Headbar from '@/components/Header'
export default {
  name: 'home',
  data: () => {
    return {
      pageName: 'page-home'
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
.cover {
  overflow: hidden;
  background-color: white;
  @media (#{$max_phone}){
    height: auto;
    // padding-top: 80px;
    padding-bottom: 60px;
    text-align: center;
  }
  &__container {
    z-index: 1;
    position: relative;
    height: 100%;
  }
  &__pic_box {
    position: absolute;
    height: 80%;
    right: $container_side_margin;
    top: 58%;
    transform: translateY(-50%);
    @media (#{$max_tablet}){
      top: 50%;
      height: 500px;
      right: 0;
    }
    @media (#{$max_phone}){
      transform: none;
      position: static;
      height: 240px;
      margin-bottom: 40px;
    }
  }
  &__img {
    height: 100%;
  }
  &__text_box {
    position: absolute;
    left: $container_side_margin;
    top: 53%;
    transform: translateY(-50%);
    @include span(6 of 12);
    @media (#{$max_tablet}){
      @include span(8 of 12);
      top: 50%;
    }
    @media (#{$max_phone}){
      @include span(12 of 12);
      position: static;
      transform: none;
      padding-bottom: 50px;
    }
  }
  &__link {
    @include font_loader($montserrat, 7, 'n');
    margin-left: 40px;
    color: white;
    font-size: 10px;
    text-transform: uppercase;
    &:hover{
      color: white;
      text-decoration: none;
    }
  }
  &__title {
    margin-bottom: 35px;
  }
  &__title_text {
    @include font_loader($montserrat, 1, 'n');
    color: $color-gray-dark;
    font-size: 42px;
    @media (#{$min_tablet}){
      font-size: 60px;
    }
    @media (#{$min_desktop}){
      font-size: 72px;
    }
  }
  &__sub-title {
    margin-bottom: 35px;
  }
  &__sub-title_text {
    @include font_loader($montserrat, 1, 'n');
    color: $color-gray-dark;
    font-size: 24px;
    @media (#{$min_tablet}){
      font-size: 36px;
    }
    @media (#{$min_desktop}){
      font-size: 48px;
    }
  }
  &__description_box {
    margin-bottom: 70px;
  }
  &__description_text {
    @include font_loader($playfair, 1, 'i');
    display: inline-block;
    font-style: italic;
    color: $color-gray-dark;
    font-size: 18px;
  }
  &__footer {
    height: 60px;
    line-height: 60px;
    background-image: linear-gradient(-180deg, #FA2B56 0%, #F91C3D 100%);
  }
  &__footer_left_box {
    @extend .container;
  }
  &__footer_button {
    position: relative;
    z-index: 1;
    top: -2px;//to make it visually look centered
  }
  &__footer_text {
    @include font_loader($playfair, 7, 'i');
    margin-left: 30px;
    font-size: 13px;
    font-style: italic;
    @media (#{$max_phone}){
      margin-left: 10px;
      font-size: 11px;
    }
  }
}
// section
.section-version {
  background-color: $color-gray-ligtest;
}
.section-case {
  background-image: linear-gradient(-180deg, #123075 0%, #092056 100%);
}
.section-roadmap {
  background-color: white;
}
.section-advisors {
  background-color: $color-gray-ligtest;
}
.section-download {
  background-image: linear-gradient(-180deg, #123075 0%, #092056 100%);
}
.section-social {
  background-color: white;
}
.section-media {
  background-color: $color-gray-ligtest;
}
</style>
