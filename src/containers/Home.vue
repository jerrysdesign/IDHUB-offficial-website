<template lang="pug">
div(v-bind:class='pageName')
  .cover
    Headbar
    .container.cover__container
      .cover__text_box
        h3.cover__sub-title
          span.cover__sub-title_text
            | {{ $t('nav.heading1') }}
        h2.cover__title
          span.cover__title_text
            | {{ $t('nav.heading2') }}
        a.cover__link(href='/static/IDHub_whitepaper_v0.5.0_en.pdf' target='_blank')
          | {{$t('whitepaper')}}
      .cover__pic_box
        img.cover__img(src='@/assets/page-home__cover-img.svg')
    .cover__footer
      .cover__footer_left_box
        span.cover__footer_text
          | {{$t('info.tokenAddress')}}
  .section-vision
    .container.section-vision__container
      .section__header
        h2 {{ $t('vision.title') }}
        h4 {{ $t('vision.subtitle') }}
        router-link.btn(to='tech', title='tech', replace) {{$t('nav.learnMore')}}
      HomeSectionVisionList
  .section-roadmap
    .section__header
      h2 {{ $t('roadmap') }}
    HomeSectionRoadMap
  .section-download
    .container
      .section__header
        h2 {{ $t('whitepaper') }}
        h3 {{ $t('download-whitepaper-text') }}
        a.btn.btn-danger(href='/static/IDHub_whitepaper_v0.5.0_en.pdf' target='_blank')
          |{{$t('download')}}
  .section-social
    .container
      .section__header.left-box
        h2 {{ $t('community') }}
        //- h4 {{ $t('home-social-text') }}
      .right-box
        HomeSectionSocialList
  .section-news
    .container
      .section__header
        h2 {{ $t('nav.news') }}
        //- h4 {{ $t('home-media-text') }}
      HomeSectionNewsList(v-bind:order='6')
</template>


<script>
import Headbar from '@/components/Header'
import HomeSectionVisionList from '@/containers/HomeSectionVisionList'
import HomeSectionRoadMap from '@/containers/HomeSectionRoadMap'
import HomeSectionTeamList from '@/containers/HomeSectionTeamList'
import HomeSectionSocialList from '@/containers/HomeSectionSocialList'
import HomeSectionNewsList from '@/containers/HomeSectionNewsList'
export default {
  name: 'home',
  data: () => {
    return {
      pageName: 'page-home',

    }
  },
  components: {
    Headbar,
    HomeSectionVisionList,
    HomeSectionRoadMap,
    HomeSectionTeamList,
    HomeSectionSocialList,
    HomeSectionNewsList
  }
}
</script>


<style lang="scss" scoped>
@import '../stylesheets/_abstracts/_variables';
@import '../stylesheets/_abstracts/_mixin';
@import '../stylesheets/_abstracts/_grid';
.cover {
  overflow: hidden;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  @include tablet {
    text-align: left;
    background-color: white;
    background-position: center top;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100vh;
    @include tablet {
      background-image: url(../assets/home-cover-1440-bg.svg);
    }
    @include desktop {
      background-image: url(../assets/home-cover-1920-bg.svg);
    }
  };
  &__container {
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 0 15px;
    min-height: 640px;
    @include tablet {
      flex-direction: row;
      margin-top: -50px;
      padding: 0;
    }
    @include laptop {
    }
  }
  .center-v {
    @include clearfix;
    transform: translateY(-100px);
  }
  &__text_box {
    order: 2;
    color: $color-gray-lighter;
    padding-bottom: 30px;
    @include tablet {
      @include span(6 of 6);
      order: 1;
      color: $color-gray-dark;
    }
  }
  &__pic_box {
    order: 1;
    @include tablet {
      @include span(6 of 6 end);
      order: 2;
    }
  }
  &__img {
    width: 90%;
    @include tablet {
      width: 120%;
    }
  }
  &__link {
    @include font_loader($montserrat, 7, 'n');
    display: inline-block;
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
    font-size: 42px;
    @include tablet {
      font-size: 60px;
    }
    @include desktop {
      font-size: 72px;
    }
  }
  &__sub-title {
    margin-bottom: 10px;
    @include tablet {
      margin-bottom: 15px;
    }
  }
  &__sub-title_text {
    @include font_loader($montserrat, 1, 'n');
    font-size: 24px;
    @include tablet {
      font-size: 36px;
    }
    @include desktop {
      font-size: 48px;
    }
  }
  &__footer {
    line-height: 20px;
    padding: 20px 0;
    background-image: linear-gradient(-180deg, #FA2B56 0%, #F91C3D 100%);
  }
  &__footer_left_box {
    @extend .container;
  }
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
  @include desktop {
    color: #000;
  }
  .header {
    background: none;
  }
}
// section
%section-background--primary {
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
}
.section-vision {
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
    z-index: 0;
  }
  &:before {
    opacity: 0.05;
    left: 40%;
    top: -30%;
  }
  &:after {
    opacity: 0.03;
    left: 40%;
    bottom: -60%;
  }
  .section__header {
    @include tablet {
      @include span(6);
      @include push(1);
    }
    @include laptop {
      @include span(10);
      @include push(1);
    }
  }
  &__container {
    position: relative;
  }

}
.section-roadmap {
  background-color: white;
  .section__header {
    margin-bottom: 80px;
    float: none;
  }
}
.section-team {
  background-color: $color-gray-ligtest;
  .section__header {}
  .left-box {
    @include span(12 of 12);
    @include tablet {
      @include span(5 of 12);
      text-align: left;
    }
  }
  .right-box {
    @include span(12 of 12);
    @include tablet  {
      @include span(7 of 12);
    }
  }
}
.section-download {
  @extend %section-background--primary;
  .section__header {}
  .container {
    z-index: 1;
    position: inherit;
  }
  &:before {
    left: 50%;
    top: -10%;
  }
  &:after {
    left: 55%;
    bottom: 10%;
  }
}
.section-social {
  background-color: white;
  .section__header {}
  .left-box {
    @include span(12 of 12);
    @include tablet  {
      @include span(5 of 12);
      text-align: left;
    }
  }
  .right-box {
    @include span(12 of 12);
    @include tablet  {
      @include span(7 of 12);
    }
  }
}
.section-news {
  background-color: $color-gray-ligtest;
  .section__header {}
}
.h1.title {
  color: #1F2D51;
}
.btn {
  color: white;
  background: #FA274F;
  padding-left: 4em;
  padding-right: 4em;
}
</style>
