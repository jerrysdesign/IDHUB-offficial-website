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
            | {{ $t('home-cover-subtitle') }}
        h2.cover__title
          span.cover__title_text
            | {{ $t('home-cover-title') }}
        .cover__description_box
          span.cover__description_text
            | {{ $t('home-cover-content') }}
        a.button.button--border-white.button--icon-downliad(href='javascript:;')
          | {{$t('whitepaper')}}{{$t('download')}}
        a.cover__link(href='javascript:;')
          | {{$t('seemore')}}
    .cover__footer.cover__footer
      .cover__footer_left_box
        a.cover__footer_button.button.button--blue.button--blue-shadow.button--extra-small
          | {{$t('home-cover-footer')}}
        span.cover__footer_text
          | {{$t('home-cover-footer-content')}}
  .section-version
    .container
      h3 {{ $t('home-version-title') }}
      h4 {{ $t('home-version-subtitle') }}
      div
        .btn {{$t('seemore')}}
      ul
        li
          h5 {{$t('home-version-list-1-title')}}
          p {{$t('home-version-list-1-text')}}
        li
          h5 {{$t('home-version-list-2-title')}}
          p {{$t('home-version-list-2-text')}}
        li
          h5 {{$t('home-version-list-3-title')}}
          p {{$t('home-version-list-3-text')}}
  .section-case
    .container
      h3 {{ $t('home-case-title') }}
  .section-roadmap
    .container
      h3 {{ $t('home-roadmap-title') }}
  .section-advisors
    .container
      h3 {{ $t('home-advisors-title') }}
      p
        | {{ $t('home-advisors-text') }}
      div
        button(type="button", class="btn btn-danger")
          |{{$t('buttn-seemore')}}
  .section-download
    .container
      h3 {{ $t('home-download-title') }}
      p
        | {{ $t('home-download-text') }}
      div
        button(type="button", class="btn btn-danger")
          |{{$t('download')}}
  .section-social
    .container
      h3 {{ $t('home-social-title') }}
      p
        | {{ $t('home-social-text') }}
  .section-media
    .container
      h3 {{ $t('home-media-title') }}
      p
        | {{ $t('home-media-text') }}
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
.h1.title {
  color: #1F2D51;
}

.btn {
  background: #FA274F;
  padding-left: 4em;
  padding-right: 4em;
}
</style>
