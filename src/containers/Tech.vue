<template lang="pug">
div(v-bind:class='pageName')
  .cover
    Headbar
    .container
      .row
        .section__header
          h2 IDHub 平台组件
          h3 IDHub 平台提供以下组件，智能合约定义”标示符”、实现身分与标示符的软体开发工具、基于区块链的身分应用钱包和原生的代币系统
      .row
        ul.component-list
          li.component-list-item
            .icon-component--01
              img(src='@/assets/icon-tech-01.svg')
            .text
              h6 智能合约定义
              h5 标识符
          li.component-list-item
            .icon-component--02
              img(src='@/assets/icon-tech-02.svg')
            .text
              h6 连接现实身份与标识符的
              h5 软件开发工具
          li.component-list-item
            .icon-component--03
              img(src='@/assets/icon-tech-03.svg')
            .text
              h6 基于区块链的
              h5 身份应用钱包
          li.component-list-item
            .icon-component--04
              img(src='@/assets/icon-tech-04.svg')
            .text
              h6 稳定高效的
              h5 原生代币系统
    .optration-flow
      .container
        .row.section-optration-flow
          .section__header
            h2 操作流程
    .key-tech
      .container
        .row.section-key-tech
          .section__header
            h2 IDHub 關鍵技術
          ul.key-tech-list
            li.key-tech-list-item
              .icon-box
                img(src='@/assets/icon-key-tech-01.svg')
                h5 Solidity
                h6 面向智能合約
              .text-box
                p Solidity 是面向智能合約、語法類似 JavaScript 的高級編程語言。基於智能合約的數字身份可以採取多種形式：個人、設備、實體或機構。用例廣泛，如聲明、動作或交易進行數字簽名和驗證。由於可與區塊鏈互動，亦可控制數字資產如數字貨幣或代幣化的資產
            li.key-tech-list-item
              .icon-box
                img(src='@/assets/icon-key-tech-02.svg')
                h5 Merkle Tree
                h6 葉節點數據塊
              .text-box
                p Merkle 樹是一種每個葉節點都標有數據塊，而每個非葉節點用其子節點標記的加密散列算法進行標記的樹，通過提供適當的散列來實現最低限度的信息披露，從而只公開所需要的數據。這樣可以幫助身份系統保持隱私，並減輕信息披露的潛在副作用
            li.key-tech-list-item
              .icon-box
                img(src='@/assets/icon-key-tech-03.svg')
                h5 OpenPDS
                h6 用戶個人數據存儲
              .text-box
                p OpenPDS 可讓用戶存儲個人數據，而用戶以外的所有應用或服務只能獲取有限或所需的部分數據。OpenPDS 為用戶隱私及使用體驗提供了一個雙贏的解決方案，並且能在數字身份的應用場景扮演 Oracle 的角色。Oracle 是區塊鏈上自動取得數據的一個可信任節點
            li.key-tech-list-item
              .icon-box
                img(src='@/assets/icon-key-tech-04.svg')
                h5 Kademlia
                h6 分布式哈希表
              .text-box
                p Kademlia 是一個點對點分布式哈希表，哈希表記錄了不同哈希值進行異或運算的結果 (XOR) 。由於是基於異或運算的新型度量拓撲，Kademlia 具有可靠的穩定性及性能，且具有延遲最小化路由、無延遲故障恢復和對稱單向拓撲等優勢和特點
            li.key-tech-list-item
              .icon-box
                img(src='@/assets/icon-key-tech-05.svg')
                h5 JSON Web Token
                h6 身份屬性认证
              .text-box
                p 身份屬性的有效性通過由 JSON Web Token (JWT) 實現的認證來保證。JWT 是一種開放標準 (RFC 7519)，定義了一種緊湊且獨立的方式，以在各方之間以 JSON 對象的形式安全傳遞信息。該信息可以通過數字簽名驗證和授信，簽名用於驗證JWT的發行者，確保該消息在傳輸過程中保持完整
            li.key-tech-list-item
              .icon-box
                img(src='@/assets/icon-key-tech-06.svg')
                h5 Identity Graph
                h6 身份圖
              .text-box
                p 身份圖是身份之間行為的一種表示。在圖中，節點就是身份，而邊界就是行為。行為包括以好友身份添加、認可、評論和交易等。在區塊鏈上，我們將這些行為轉變為交易。IDHub系統中身份的聲明和證明存儲在 Merkle 樹中，與其他身份的交互則以身份圖的形式存儲
</template>

<script>
import Headbar from '@/components/Header'

export default {
  name: 'tech',
  data: () => {
    return {
      pageName: 'page-tech'
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
      @include tablet {
      }
      @include laptop  {
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
  .section__header {
    margin: 0 auto;
  }
  .optration-flow {
    background-color: white;
  }
  .key-tech {
    background-color: $color-gray-ligtest;
  }
  .section-optration-flow {
    .section__header h2 {
      color: $color-gray-dark;
    }
  }
  .section-key-tech {
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
        h5 {font-size: 48px; margin-top: 20px;}
        h6{font-size: 18px;}
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
          padding: 56px 0;
        }
        .text-box {
          width: 50%;
        }
      }
    }
  }
}
</style>
