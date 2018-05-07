<template lang="pug">
div(v-bind:class='pageName')
  .cover
    Headbar
    .container.cover__container
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
        a.cover__link(href='javascript:;')
          | {{$t('whitepaper')}}{{$t('download')}}
      .cover__pic_box
        img.cover__img(src='@/assets/page-home__cover-img.svg')
    .cover__footer
      .cover__footer_left_box
        h3.cover__footer_title
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
      .section__header
        h3 {{ $t('home-case-title') }}
  .section-roadmap
    .container
      .section__header
        h3 {{ $t('home-roadmap-title') }}
  .section-advisors
    .container
      .section__header
      h3 {{ $t('home-advisors-title') }}
      p
        | {{ $t('home-advisors-text') }}
      div
        button(type="button", class="btn btn-danger")
          |{{$t('seemore')}}
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
      .row
        ul.media__list
          li.media__list-item(v-for='media in medias')
            .img
              img(src='')
            .media__list-item__text-box
              .media__list-item__date
                | {{ media.mediaDate }}
              .media__list-item__text
                | {{ media.mediaText }}

</template>

<script>
import Headbar from '@/components/Header'
export default {
  name: 'home',
  data: () => {
    return {
      pageName: 'page-home',
      medias:[
        { mediaDate: 'dd mm yyy', mediaText: 'lorem lorem lorem lorem lorem lorem' },
        { mediaDate: 'dd mm yyy', mediaText: 'lorem lorem lorem lorem lorem lorem' },
        { mediaDate: 'dd mm yyy', mediaText: 'lorem lorem lorem lorem lorem lorem' }
      ]
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
  background-image: url(../assets/home-cover-bg.svg);
  background-position: 50% 120%;
  background-color: white;
  background-repeat: no-repeat;
  @media (#{$max_phone}){
    height: auto;
    text-align: center;
  }
  &__container {
    display:flex;
    align-items: center;
    height: 100%;
  }
  .center-v {
    @include clearfix;
    transform: translateY(-100px);
  }
  &__text_box {
    @include span(12);
    @media (#{$min_laptop}){
      @include span(6);
    }
  }
  &__pic_box {
    @include span(12);
    @media (#{$min_laptop}){
      @include span(6 end);
    }
  }
  &__img {
    width: 120%;
  }
  &__link {
    @include font_loader($montserrat, 7, 'n');
    text-transform: uppercase;
    padding: 15px 100px;
    border-radius: 5px;
    background: linear-gradient(225deg, #FA2B56 0%, #F91C3D 100%);
    box-shadow: 10px 10px 30px 0 rgba($color-gray-darkest,0.3);
    color: white;
    &:hover{
      text-decoration: none;
      box-shadow: 10px 10px 40px 0 rgba($color-gray-darkest,.5);
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
  // &__footer_button {
  //   position: relative;
  //   z-index: 1;
  //   top: -2px;//to make it visually look centered
  // }
  &__footer_title {
    @include font_loader($montserrat, 4, 'n');
    display: inline-block;
    color: white;
    @media (#{$max_phone}){
      margin-left: 10px;
      font-size: 11px;
    }
  }
  &__footer_text {
    @include font_loader($playfair, 4, 'i');
    margin-left: 30px;
    font-size: 13px;
    font-style: italic;
    color: white;
    @media (#{$max_phone}){
      margin-left: 10px;
      font-size: 11px;
    }
  }
}

.page-home {
  .header {
    background: none;
  }
}
// section
.section-version {
  background-color: $color-gray-ligtest;
  position: relative;
  overflow: hidden;
  &:before, &:after {
    background-image: linear-gradient(-180deg, #123075 0%, #092056 100%);
    border-radius: 100px;
    content: '';
    display: block;
    width: 1000px;
    height: 1000px;
    position: absolute;
    transform: rotate(45deg);
  }
  &:before {
    opacity: 0.05;
    left: 45%;
    top: -100%;
  }
  &:after {
    opacity: 0.03;
    left: 40%;
    bottom: -100%;
  }
}
.section-case {
  background-image: linear-gradient(-180deg, #123075 0%, #092056 100%);
  position: relative;
  overflow: hidden;
  color: $color-gray-ligtest;
  &:before, &:after {
    background:  #1A47B0;
    width: 1000px;
    height: 1000px;
    border-radius: 100px;
    content: '';
    display: block;
    position: absolute;
    transform: rotate(45deg);
    opacity: .15;
  }
  &:before {
    left: 35%;
    top: -20%;
  }
  &:after {
    left: -5%;
    bottom: 10%;
  }
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
.media {
  &__list {
    @include container;
    @include clear_list;
    margin-top: 100px;
    width: 100%;
    &-item {
      background: white;
      box-shadow: 20px 20px 60px 0 rgba($color-gray-darkest,.1);
      border-radius: 5px;
      padding: 15px;
      @include gallery(6);
      margin-bottom: gutter();
      @media (#{$min_tablet}) {
        @include gallery(4);
      }
      .img {
        width: 100%;
        height: 300px;
        background-image: linear-gradient(-225deg, #FA2B56 0%, #F91C3D 100%);
        box-shadow: 10px 10px 30px 0 rgba(0,0,0,0.3);
        border-radius: 5px;
      }
      &__text-box {
        margin-top: 30px;
        margin-bottom: 5px;
        text-align: left;
      }
      &__date {
        font-size: 12px;
        color: $color-gray-dark;
      }
      &__text {
        font-size: 18px;
        color: $color-gray-darker;
      }
    }
  }
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
