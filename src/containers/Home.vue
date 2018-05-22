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
      .section__header
        h2 {{ $t('home-version-title') }}
        h3 {{ $t('home-version-subtitle') }}
      div
        .btn {{$t('seemore')}}
      ul.version__list
        li.version__list-item
          img.version__list-item__icon(src='@/assets/icon--version-service.svg')
          h5.version__list-item__title {{$t('home-version-list-1-title')}}
          p.version__list-item__text {{$t('home-version-list-1-text')}}
        li.version__list-item
          img.version__list-item__icon(src='@/assets/icon--version-digiasset.svg')
          h5.version__list-item__title {{$t('home-version-list-2-title')}}
          p.version__list-item__text {{$t('home-version-list-2-text')}}
        li.version__list-item
          img.version__list-item__icon(src='@/assets/icon--version-digilife.svg')
          h5.version__list-item__title {{$t('home-version-list-3-title')}}
          p.version__list-item__text {{$t('home-version-list-3-text')}}
  .section-case
    .container
      .section__header
        h2 {{ $t('home-case-title') }}
      .case-box
        .world-map
          img(src='@/assets/world-map.svg')
  .section-roadmap
    .section__header
      h2 {{ $t('home-roadmap-title') }}
    .timeline-box
      .container
        .timeline-graph
          img(src='@/assets/tlimeline-graph.png')
    .timeline-line
  .section-advisors
    .container
      .section__header
        h2 {{ $t('home-advisors-title') }}
        h4 {{ $t('home-advisors-text') }}
      div
        button(type="button", class="btn btn-danger")
          |{{$t('seemore')}}
  .section-download
    .container
      .section__header
        h2 {{ $t('home-download-title') }}
        h3 {{ $t('home-download-text') }}
      div
        button(type="button", class="btn btn-danger")
          |{{$t('download')}}
  .section-social
    .container
      .section__header.left-box
        h2 {{ $t('home-social-title') }}
        h4 {{ $t('home-social-text') }}
      .right-box
        ul.social__list
          li.social__list-item(v-for='social in socials')
            .social__list-item-wrapper(:style="'background-color: '+ social.background ")
              .social__list-item__logo
                img(:src='social.img' )
              .social__list-item__name
                | {{ social.name }}
              a.btn(:href='social.socialLink')
  .section-media
    .container
      .section__header
        h2 {{ $t('home-media-title') }}
        h3 {{ $t('home-media-text') }}
      ul.media__list
        li.media__list-item(v-for='media in medias')
          .img
            img(:src='media.img')
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
      socials:[
        { img:'@/assets/logo--social--facebook.svg', name: 'facebook', socialLink: 'http://google.com', background: '#34579A' },
        { img:'@/assets/logo--social--twitter.svg', name: 'twitter', socialLink: 'javascript:;', background: '#009FF4' },
        { img:'@/assets/logo--social--github.svg', name: 'github', socialLink: 'javascript:;', background: '#303030' },
        { img:'@/assets/logo--social--slack.svg', name: 'slack', socialLink: 'javascript:;', background: '#FF496B' },
        { img:'@/assets/logo--social--medium.svg', name: 'medium', socialLink: 'javascript:;', background: '#00B871' },
        { img:'@/assets/logo--social--telegram.svg', name: 'telegram', socialLink: 'javascript:;', background: '#00AADF' }
      ],
      medias:[
        { img:'@/assets/logo--media--coindesk.svg', mediaDate: '23 Jun 2017', mediaText: 'Local Government in China Trials Blockchain for Public Services...' },
        { img:'@/assets/logo--media--medium.svg', mediaDate: '5 Jan 2017', mediaText: 'An Exclusive Interview with Mr. Quming — the Founder of IDHub Project...' },
        { img:'@/assets/logo--media--chainb.png', mediaDate: '24 Jul 2017', mediaText: '光载无限助力佛山禅城打造全国首个区块链政务应用，市民办事...”' }
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
  height: auto;
  text-align: center;
  @include tablet {
    text-align: left;
    background-color: white;
    background-position: 50% 120%;
    background-image: url(../assets/home-cover-bg.svg);
    background-repeat: no-repeat;
    height: 100vh;
  };
  &__container {
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 0 15px;
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
    padding: 30px 0;
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
    // @include laptop {
    //   width: 120%;
    // }
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
    margin-bottom: 35px;
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
  &__description_box {
    margin-bottom: 70px;
  }
  &__description_text {
    @include font_loader($playfair, 1, 'i');
    display: inline-block;
    font-style: italic;
    font-size: 18px;
  }
  &__footer {
    line-height: 20px;
    padding: 20px 0;
    background-image: linear-gradient(-180deg, #FA2B56 0%, #F91C3D 100%);
    @include tablet {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
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
    left: 40%;
    top: -30%;
  }
  &:after {
    opacity: 0.03;
    left: 40%;
    bottom: -60%;
  }
  .section__header {
    margin-bottom: 50px;
  }
  .version {
    .section__header {}
    &__list {
      @include clear_list;
      margin-top: 80px;
      &-item {
        @include span(12 of 12);
        margin-bottom: gutter();
        @include tablet  {
          @include span(1 of 3);
        }
        &__icon {
          margin-bottom: 24px;
        }
        &__title {
          font-size: 18px;
          color: $color-primary-dark;
          margin-bottom: 12px;
        }
        &__text {
          font-size: 14px;
          line-height: 21px;
          color: $color-gray-darker;
          @include font_loader($notosans, 4, 'n');
        }
      }
    }
  }
}
.section-case {
  @extend %section-background--primary;
  .section__header {}
  .container {
    z-index: 1;
    position: inherit;
  }
  &:before {
    left: 35%;
    top: -20%;
  }
  &:after {
    left: -5%;
    bottom: 10%;
  }
  .case-box {
    margin-top: 80px;
  }
}
.section-roadmap {
  background-color: white;
  .section__header {
    margin-bottom: 80px;
  }
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
    }
  }
  .timeline-line {
    margin-top: -16px;
    width: 100%;
    border-top: 4px solid #0F358E;
    height: 8px;
  }
}
.section-advisors {
  background-color: $color-gray-ligtest;
  .section__header {}
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
      @include span(6 of 12);
    }
  }
  .right-box {
    @include span(12 of 12);
    @include tablet  {
      @include span(6 of 12);
    }
  }
  .social__list {
    @include clear_list;
    &-item {
      @include span(1 of 1);
      margin-bottom: gutter();
      @include phone {
        @include span(1 of 2);
        margin-bottom: gutter();
      }
      @include tablet  {
        @include span(4 of 8);
        margin-bottom: gutter();
      }
      @include desktop  {
        @include span(4 of 12);
        margin-bottom: gutter();
      }
      &-wrapper {
        padding: 25px 15px;
        border-radius: 5px;
        box-shadow: 0 30px 70px 0 rgba($color-gray-darkest, .1);
        &:hover {
          box-shadow: 0 10px 70px 0 rgba($color-gray-darkest, .5);
        }
      }
      &__name {
        color: $color-gray-ligtest;
        margin-top: 8px;
        margin-bottom: 8px;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
      }
      .btn {
        line-height: 42px;
        height: 42px;
        border-radius: 21px;
        border: 2px solid $color-gray-ligtest;
        background-color: transparent;
        background-image: url(../assets/icon--social-item-go.svg);
        background-position: center;
        background-repeat: no-repeat;
        &:hover {
          $btn-color: #FA2B56;
          border: 2px solid $btn-color;
          background-color: $btn-color;
        }
      }
    }
  }
}
.section-media {
  background-color: $color-gray-ligtest;
  .section__header {}
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
      &:hover {
        box-shadow: 20px 20px 60px 0 rgba($color-gray-darkest,.3);
      }
      @include span(1 of 1);
      margin-bottom: gutter();
      @include tablet  {
        @include span(2 of 4);
        margin-bottom: gutter();
      }
      @include laptop  {
        @include span(2 of 6);
        margin-bottom: gutter();
      }
      @include desktop  {
        @include span(4 of 12);
        margin-bottom: gutter();
      }
      .img {
        width: 100%;
        height: 300px;
        background-image: linear-gradient(-225deg, #FA2B56 0%, #F91C3D 100%);
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          box-shadow: 10px 10px 30px 0 rgba($color-gray-darkest,.3);
        }
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
        @include font_loader($notosans, 4, 'n');
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
