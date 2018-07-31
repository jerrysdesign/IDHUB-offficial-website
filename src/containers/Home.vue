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
        .cover__description_box
          span.cover__description_text
            | {{ $t('nav.desc') }}
        a.cover__link(href='/static/IDHub_whitepaper_v0.5.0_en.pdf' target='_blank')
          | {{$t('whitepaper')}}
      .cover__pic_box
        img.cover__img(src='@/assets/page-home__cover-img.svg')
    .cover__footer
      .cover__footer_left_box
        //- h3.cover__footer_title
        //-   | {{$t('home-cover-footer')}}
        span.cover__footer_text
          | {{$t('info.tokenAddress')}}
  .section-vision
    .container.section-vision__container
      .section__header
        h2 {{ $t('vision.title') }}
        <!-- h3 {{ $t('home-vision-subtitle') }} -->
        router-link.btn(to='tech', title='tech', replace) {{$t('nav.learnMore')}}
      ul.vision__list
        li.vision__list-item
          img.vision__list-item__icon(src='@/assets/icon--vision-service.svg')
          h5.vision__list-item__title ID as a Service
          p.vision__list-item__text {{$t('vision.service')}}
        li.vision__list-item
          img.vision__list-item__icon(src='@/assets/icon--vision-digiasset.svg')
          h5.vision__list-item__title ID as a Digital Asset
          p.vision__list-item__text {{$t('vision.asset')}}
        li.vision__list-item
          img.vision__list-item__icon(src='@/assets/icon--vision-digilife.svg')
          h5.vision__list-item__title ID as a Digital Life
          p.vision__list-item__text {{$t('vision.life')}}
  //- .section-case
  //-   .container
  //-     .section__header
  //-       h2 {{ $t('case-title') }}
  //-     .case-box
  //-       .world-map
  //-         img(src='@/assets/world-map.svg')
  .section-roadmap
    .section__header
      h2 {{ $t('roadmap') }}
    .timeline-box
      .container
        .timeline-graph
          img(src='@/assets/tlimeline-graph.png')
    .timeline-line
  .section-team
    .container
      .section__header.left-box
        h2 {{ $t('nav.team') }}
        //- h4 {{ $t('home-team-text') }}
        router-link.btn(to='/team', title='tech') {{$t('nav.learnMore')}}
      .right-box
        ul.team__list
          li.team__list-item(v-for="(item, key, index) in $t('members')" v-if='index < 2')
            //- p {{key}}
            img(:src="require('@/assets/team_' + key + '.png')")
            .team__list-item__text-box
              .team__list-item__name
                | {{ item.name }}
              .team__list-item__title
                | {{ item.desc }}
              .team__list-item__title(v-if='item.desc2')
                | {{ item.desc2 }}
              .team__list-item__title(v-if='item.desc3')
                | {{ item.desc3 }}
  //- .section-download
  //-   .container
  //-     .section__header
  //-       h2 {{ $t('home-download-title') }}
  //-       h3 {{ $t('home-download-text') }}
  //-       button(type="button", class="btn btn-danger")
  //-         |{{$t('download')}}
  .section-social
    .container
      .section__header.left-box
        h2 {{ $t('community') }}
        //- h4 {{ $t('home-social-text') }}
      .right-box
        ul.social__list
          li.social__list-item(v-for='social in socials')
            .social__list-item-wrapper(:style="'background-color: '+ social.background ")
              .social__list-item__logo
                img(:src='social.img' )
              .social__list-item__name
                | {{ social.name }}
              a.btn(:href='social.url' target='_blank' rel='noopener noreferrer')
  .section-news
    .container
      .section__header
        h2 {{ $t('nav.news') }}
        //- h3 {{ $t('home-media-text') }}
      ul.news__list
        li.news__list-item(v-for='item in news')
          a(:href='item.url' target='_blank' rel='noopener noreferrer')
            .img
              img(:src='item.img')
            .news__list-item__text-box
              .news__list-item__date
                | {{ item.newsDate }}
              .news__list-item__text
                | {{ item.newsTitle }}
</template>

<script>
import Headbar from '@/components/Header'
export default {
  name: 'home',
  data: () => {
    return {
      pageName: 'page-home',
      socials:[
        { img:require('@/assets/community_facebook.svg'), name: 'facebook', url: 'https://www.facebook.com/IdhubOfficial', background: '#34579A' },
        { img:require('@/assets/community_twitter.svg'), name: 'twitter', url: 'https://twitter.com/IDHUBOFFICIAL', background: '#009FF4' },
        { img:require('@/assets/community_github.svg'), name: 'github', url: 'https://github.com/idhubnetwork', background: '#303030' },
        { img:require('@/assets/community_slack.svg'), name: 'slack', url: 'https://idhubnetwork.herokuapp.com/', background: '#FF496B' },
        { img:require('@/assets/community_medium.svg'), name: 'medium', url: 'https://medium.com/@IDHUBOFFICIAL', background: '#00B871' },
        { img:require('@/assets/community_telegram.svg'), name: 'telegram', url: 'https://t.me/joinchat/GwYlyA8g8aNQCBElmAk1Dw', background: '#00AADF' }
      ],
      news:[
        { url: 'https://www.coindesk.com/local-government-china-trials-blockchain-public-services/', img:require('@/assets/news_coindesk.svg'), newsDate: '2017-06-23', newsTitle: 'Local Government in China Trials Blockchain for Public Services...' },
        { url: 'http://chainb.com/?P=Cont&id=4910', img:require('@/assets/news_chainb.png'), newsDate: '2017-07-24', newsTitle: '光载无限助力佛山禅城打造全国首个区块链政务应用，市民办事...' },
        { url: 'https://blockcast.it/2018/03/27/blcokchain-based-digital-identity-idhub/', img:require('@/assets/news_blockcast.png'), newsDate: '2018-03-27', newsTitle: '發展區塊鏈數位身份 IDHub 讓你於社群與商業展現個人價值...' },
        { url: 'http://software.it168.com/a2018/0515/3203/000003203255.shtml', img:require('@/assets/news_it168.png'), newsDate: '2018-05-15', newsTitle: 'IDHub助力全国首个“区块链+社区矫正”应用禅城发布...' },
        { url: 'https://markets.businessinsider.com/news/stocks/china-s-blockchain-community-correction-application-bestows-a-human-touch-1025068125', img:require('@/assets/news_businessinsider.png'), newsDate: '2018-05-21', newsTitle: "China's Blockchain Community Correction application bestows a human touch..." },
        { url: 'https://finance.yahoo.com/news/chinas-blockchain-community-correction-application-161300613.html', img:require('@/assets/news_yahoo.png'), newsDate: '2018-05-22', newsTitle: "China's Blockchain Community Correction application bestows a human touch..." },
        { url: 'https://medium.com/theacoplatform/build-a-better-world-with-aco-idhub-to-be-the-%EF%AC%81rst-use-case-on-aco-platform-f1ebf42d1c62', img:require('@/assets/news_medium.svg'), newsDate: '2018-05-29', newsTitle: '“Build a better world with ACO.” IDHub to be the ﬁrst use case on ACO platform...' },
        { url: 'https://mp.weixin.qq.com/s/qUD97Q5EW5lPqQQC4DD68A', img:require('@/assets/news_chainbs.png'), newsDate: '2018-05-30', newsTitle: "拆解IDHub：如何成为未来价值互联网的基石？..." },
        { url: 'https://mp.weixin.qq.com/s/yWeebwVxsU_vNKc512vtkQ', img:require('@/assets/news_wechat.png'), newsDate: '2018-06-03', newsTitle: "IDHub与Hivelocity达成战略合作，为60万用户提供身份验证服务..." },
        { url: 'https://blog.csdn.net/dev_csdn/article/details/80559351', img:require('@/assets/news_csdn.png'), newsDate: '2018-06-03', newsTitle: "IDHub创始人曲明：数字身份将是下一个万亿市场..." },
        { url: 'http://biz.ifeng.com/a/20180606/45015468_0.shtml', img:require('@/assets/news_ifeng.png'), newsDate: '2018-06-06', newsTitle: "IDHub创始人曲明出席以太坊技术大会 破解数字身份的基因密码..." },
        { url: 'https://www.jinse.com/blockchain/201058.html', img:require('@/assets/news_jinse.png'), newsDate: '2018-06-08', newsTitle: "IDHub正式加入企業以太坊聯盟(EEA)，開啓國際化新征程..." }
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
  display: flex;
  flex-direction: column;
  justify-content:space-between;
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
    margin-bottom: 15px;
    @include tablet {
      margin-bottom: 20px;
    }
    @include desktop {
      margin-bottom: 35px;
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
  &__container {
    position: relative;
  }
  .vision {
    &__list {
      @include clear_list;
      margin-top: 80px;
      &-item {
        padding: 0 30px;
        margin-bottom: gutter();
        @include tablet {
          padding: 0;
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
    .world-map {
      img {
        max-width: 100%;
      }
    }
  }
}
.section-roadmap {
  background-color: white;
  .section__header {
    margin-bottom: 80px;
    float: none;
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
  .team__list {
    @include clear_list;
    &-item {
      background: #FFFFFF;
      box-shadow: 20px 20px 40px 0 rgba(0,0,0,0.10);
      border-radius: 5px;
      padding: 30px;
      @include span(1 of 1);
      margin-bottom: gutter();
      @include phone {
        @include span(1 of 2);
        margin-bottom: gutter();
      }
      @include tablet  {
        @include span(2 of 4);
        margin-bottom: gutter();
      }
      @include desktop  {
        margin-bottom: gutter();
      }
      &:hover {
        background: #1A47B0;
        box-shadow: 0 10px 30px 0 rgba(23,33,51,0.20);
      }
      &__name {
        color: $color-primary;
      }
      &__title {
        color: $color-gray-dark;
      }
      img {
        width: 160px;
        height: 160px;
        background: #D7DDED;
        border-radius: 200px;
        margin-bottom: 28px;
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
        @include span(2 of 6);
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
.section-news {
  background-color: $color-gray-ligtest;
  .section__header {}
}
.news {
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
  color: white;
  background: #FA274F;
  padding-left: 4em;
  padding-right: 4em;
}
</style>
