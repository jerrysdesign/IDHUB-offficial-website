<template lang="pug">
div(v-bind:class='pageName')
  .cover
    Headbar
    .container
      .row
        .section__header
          h2 {{ $t('component.title') }}
          //- h3 IDHub 平台提供以下组件，智能合约定义”标示符”、实现身分与标示符的软体开发工具、基于区块链的身分应用钱包和原生的代币系统
      .row
        ul.component-list
          li.component-list-item
            .icon-component--01
              img(src='@/assets/icon-tech-01.svg')
            .text
              h6 {{ $t('component.smartContract.note') }}
              h5 {{ $t('component.smartContract.name') }}
          li.component-list-item
            .icon-component--02
              img(src='@/assets/icon-tech-02.svg')
            .text
              h6 {{ $t('component.sdk.note') }}
              h5 {{ $t('component.sdk.name') }}
          li.component-list-item
            .icon-component--03
              img(src='@/assets/icon-tech-03.svg')
            .text
              h6 {{ $t('component.wallet.note') }}
              h5 {{ $t('component.wallet.name') }}
          li.component-list-item
            .icon-component--04
              img(src='@/assets/icon-tech-04.svg')
            .text
              h6 {{ $t('component.token.note') }}
              h5 {{ $t('component.token.name') }}
  .section-operation-flow
    .container
      .row
        .section__header
          h2 操作流程
      .row
        ol.optration-flow-nav
          li
            .num 01
            .title 创建
            .step Step 1
          li
            .num 02
            .title 认证
            .step Step 2
          li
            .num 03
            .title 查询
            .step Step 4
          li
            .num 04
            .title 授权
            .step Step 4
        swiper(:options='swiperOption')
          swiper-slide
            .icon
              img(src='@/assets/icon--optration-success.svg')
            .title 创建
            .decstion 用户享受自由权力，通过私钥签名，用户可授权第三方调用数字存储模块的接口查询和使用身分信息。
          swiper-slide
            .icon
              img(src='@/assets/icon--optration-success.svg')
            .title 认证
            .decstion 用户享受自由权力，通过私钥签名，用户可授权第三方调用数字存储模块的接口查询和使用身分信息。
          swiper-slide
            .icon
              img(src='@/assets/icon--optration-success.svg')
            .title 查询
            .decstion 用户享受自由权力，通过私钥签名，用户可授权第三方调用数字存储模块的接口查询和使用身分信息。
          swiper-slide
            .icon
              img(src='@/assets/icon--optration-success.svg')
            .title 授权
            .decstion 用户享受自由权力，通过私钥签名，用户可授权第三方调用数字存储模块的接口查询和使用身分信息。
          div(class='swiper-pagination swiper-pagination-bullets', slot='pagination')
  .section-key-tech
    .container
      .row
        .section__header
          h2 {{ $t('techs.title') }}
        ul.key-tech-list
          li.key-tech-list-item
            .icon-box
              img(src='@/assets/icon-key-tech-01.svg')
              h5 Solidity
              //- h6 面向智能合約
            .text-box
              p {{ $t('techs.solidity') }}
          li.key-tech-list-item
            .icon-box
              img(src='@/assets/icon-key-tech-02.svg')
              h5 Merkle Tree
              //- h6 葉節點數據塊
            .text-box
              p {{ $t('techs.merkle') }}
          li.key-tech-list-item
            .icon-box
              img(src='@/assets/icon-key-tech-03.svg')
              h5 OpenPDS
              //- h6 用戶個人數據存儲
            .text-box
              p {{ $t('techs.openPDS') }}
          li.key-tech-list-item
            .icon-box
              img(src='@/assets/icon-key-tech-04.svg')
              h5 Kademlia
              //- h6 分布式哈希表
            .text-box
              p {{ $t('techs.kademlia') }}
          li.key-tech-list-item
            .icon-box
              img(src='@/assets/icon-key-tech-05.svg')
              h5 JSON Web Token
              //- h6 身份屬性认证
            .text-box
              p {{ $t('techs.jwt') }}
          li.key-tech-list-item
            .icon-box
              img(src='@/assets/icon-key-tech-06.svg')
              h5 Identity Graph
              //- h6 身份圖
            .text-box
              p {{ $t('techs.graph') }}
</template>

<script>
import Headbar from '@/components/Header'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'tech',
  data: () => {
    return {
      pageName: 'page-tech',
      swiperOption: {
        pagination: {
          el: '.optration-flow-nav',
          clickable: true,
          renderBullet(index, className) {
            return `<li class="${className} swiper-pagination-bullet-custom"><div class='num'>0${index + 1}</div><div class='title'> 创建 </div><div class='step'> Step 1 </div></li>`
          }
        }
      }
    }
  },
  components: {
    Headbar,
    swiper,
    swiperSlide
  }
}
</script>


<style lang="scss">
@import '../stylesheets/_abstracts/_variables';
@import '../stylesheets/_abstracts/_mixin';
@import '../stylesheets/_abstracts/_grid';
@import '../../node_modules/swiper/dist/css/swiper.css';
.page-tech {
  .cover {
    height: auto;
    background-image: url(../assets/page-cover-bg.svg);
    background-position: 0 center;
    background-color: $color-primary-dark;
    background-repeat: no-repeat;
    .header {
      background: none;

    }
    .section__header {
      h2, h3 {
        color: $color-gray-ligtest;
      }
      text-align: center;
      @include pt60;
      @include pb60;
      @include tablet {
        @include pt80;
        @include pb80;
      }
      @include laptop {
        @include pt100;
        @include pb100;
      }
      @include desktop {
        @include pt120;
        @include pb120;
      }
      @include fhd {
        @include pt150;
        @include pb150;
      }
    }
  }
  .component-list {
    width: 100%;
    @include clear_list;
    margin-top: -50px;
    margin-bottom: 150px;
    &-item {
      @include span(1 of 1);
      margin-bottom: 30px;
      border: 2px solid #D7DDED;
      box-shadow: 40px 40px 80px 0 rgba(2,8,22,0.30);
      border-radius: 5px;
      color: $color-gray-light;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items:center;
      text-align: center;
      [class^='icon-component'] + .text{
        margin-top: 20px;
      }
      h5 { font-size: 24px; }
      h6 { font-size: 16px; }
      @include tablet {
        @include span(6 of 12);
        flex-direction: row;
        text-align: left;
        [class^='icon-component'] {
          margin-right: 24px;
        }
      }
      @include laptop {
         padding: 30px 90px 30px;
      }
    }
  }
  .optration-flow-nav,
  .swiper-pagination {
    @include clear_list;
    display: flex;
    width: 100%;
    margin-bottom: 50px;
    li {
      &:focus {
        outline-style: none;
        box-shadow: none;
        border-color: transparent;
      }
    }
    .num {
      border: 1px solid #B4BFD9;
      border-radius: 100%;
      line-height: 67px;
      width: 67px;
      height: 67px;
      font-size: 36px;
      font-weight: 900;
      color: $color-gray-light;
      float: left;
      margin-right: 12px;
    }
    .title {text-align: left;}
    .step {text-align: left;}
  }
  .section-operation-flow {
    background-color: white;
    .section__header h2 {
      color: $color-gray-dark;
    }
  }
  .optration-flow-content,
  .swiper-slide {
    @include clear_list;
    background-image: linear-gradient(-180deg, #123075 0%, #092056 100%);
    box-shadow: 20px 20px 40px 0 rgba(0,0,0,0.10);
    border-radius: 5px;
    color: white;
    padding: 100px 25%;
    text-align: center;
    .icon {
      margin-bottom: 40px;
    }
    .title {
      font-size: 48px;
      font-weight: 700;
      letter-spacing: -1px;
      margin-bottom: 30px;
    }
  }
  .section-key-tech {
    background-color: $color-gray-ligtest;
    .section__header {
      padding-bottom: 60px;
      margin-bottom: 0;
      h2 {
        color: $color-gray-dark;
      }
    }
  }
  .key-tech-list {
    @include clear_list;
    &-item {
      display: flex;
      flex-direction: column;
      .icon-box {
        padding: 56px 0;
        background-image: linear-gradient(-225deg, #FA2B56 0%, #F91C3D 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: $color-gray-ligtest;
        h5 {font-size: 32px; margin-top: 10px;}
        h6 {font-size: 18px;}
        img {
          width: 96px;
          height: 96px;
        }
      }
      .text-box {
        background-color: white;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5%;
      }
      @include phone {
        flex-direction: row;
        &:nth-child(even) {.icon-box{order:1;}.text-box{order:2;}}
        &:nth-child(odd) {.icon-box{order:2;}.text-box{order:1;}}
        .icon-box {
          width: 50%;
          padding: 48px 0;
          h5 {font-size: 36px; margin-top: 20px;}
        }
        .text-box {
          width: 50%;
        }
      }
      @include tablet {
        .icon-box {
          h5 {font-size: 42px;}
          img {
            width: 128px;
            height: 128px;
          }
        }
      }
      @include fhd {
        .icon-box {
          h5 {font-size: 48px;}
        }
      }
    }
  }

  .swiper-pagination-bullet-custom {
    display: inline-block;
    width: 25%;
    height: auto;
    background: transparent;
    opacity: 1;
  }
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    .num {
      background-image: linear-gradient(-180deg, #123075 0%, #092056 100%);
      box-shadow: 10px 10px 40px 0 rgba(0,0,0,0.40);
      border-radius: 100%;
      color: #fff;
    }
  }
}

</style>
