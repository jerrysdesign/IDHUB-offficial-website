<template lang="pug">
ul.news__list
  li.news__list-item(v-for='(item, index) in news', v-if='index < order')
    a(:href='item.url', target='_blank')
      .news__list-item__photo.ratio-1-1
        img(:src='item.img')
      .news__list-item__text-box
        .news__list-item__date
          | {{ item.newsDate }}
        .news__list-item__text
          | {{ item.newsTitle }}
</template>

<script>
export default {
  name: 'section-news',
  props: ['order'],
  data: () => {
    return {
      news:[
        { url: 'https://www.jinse.com/blockchain/201058.html', img:require('@/assets/20180608-jinse.png'), newsDate: '2018-06-08', newsTitle: "IDHub正式加入企業以太坊聯盟(EEA)，開啓國際化新征程..."},
        { url: 'http://biz.ifeng.com/a/20180606/45015468_0.shtml', img:require('@/assets/20180606-ifeng.png'), newsDate: '2018-06-06', newsTitle: 'IDHub创始人曲明出席以太坊技术大会 破解数字身份的基因密码...'},
        { url: 'https://blog.csdn.net/dev_csdn/article/details/80559351', img:require('@/assets/20180603-csdn.png'), newsDate: '2018-06-03', newsTitle: "IDHub创始人曲明：数字身份将是下一个万亿市场..." },
        { url: 'https://mp.weixin.qq.com/s/yWeebwVxsU_vNKc512vtkQ', img:require('@/assets/20180603-wechat.png'), newsDate: '2018-06-03', newsTitle: "IDHub与Hivelocity达成战略合作，为60万用户提供身份验证服务..." },
        { url: 'https://medium.com/theacoplatform/build-a-better-world-with-aco-idhub-to-be-the-%EF%AC%81rst-use-case-on-aco-platform-f1ebf42d1c62', img:require('@/assets/20180529-medium.png'), newsDate: '2018-05-29', newsTitle: '“Build a better world with ACO.” IDHub to be the ﬁrst use case on ACO platform...' },
        { url: 'https://finance.yahoo.com/news/chinas-blockchain-community-correction-application-161300613.html', img:require('@/assets/20150522-yahoofinace.png'), newsDate: '2018-05-22', newsTitle: "China's Blockchain Community Correction application bestows a human touch..." },
        { url: 'https://markets.businessinsider.com/news/stocks/china-s-blockchain-community-correction-application-bestows-a-human-touch-1025068125', img:require('@/assets/20180521-marketsinsider.png'), newsDate: '2018-05-21', newsTitle: "China's Blockchain Community Correction application bestows a human touch..." },
        { url: 'https://mp.weixin.qq.com/s/qUD97Q5EW5lPqQQC4DD68A', img:require('@/assets/20180530-weixin.png'), newsDate: '2018-05-30', newsTitle: '拆解IDHub：如何成为未来价值互联网的基石？...' },
        { url: 'http://software.it168.com/a2018/0515/3203/000003203255.shtml', img:require('@/assets/20180515-it168.png'), newsDate: '2018-05-15', newsTitle: 'IDHub助力全国首个“区块链+社区矫正”应用禅城发布...' },
        { url: 'https://blockcast.it/2018/03/27/blcokchain-based-digital-identity-idhub/', img:require('@/assets/20180327-blockcast.png'), newsDate: '2018-03-27', newsTitle: '發展區塊鏈數位身份 IDHub 讓你於社群與商業展現個人價值...' },
        { url: 'http://chainb.com/?P=Cont&id=4910', img:require('@/assets/20170623-coindesk.png'), newsDate: '2017-07-24', newsTitle: '光载无限助力佛山禅城打造全国首个区块链政务应用，市民办事...' },
        { url: 'https://www.coindesk.com/local-government-china-trials-blockchain-public-services/', img:require('@/assets/20170623-coindesk.png'), newsDate: '2017-06-23', newsTitle: 'Local Government in China Trials Blockchain for Public Services...'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../stylesheets/_abstracts/_variables';
@import '../../stylesheets/_abstracts/_mixin';
@import '../../stylesheets/_abstracts/_grid';
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
        text-decoration: none;
      }
      @include span(1 of 1);
      margin-bottom: gutter();
      @include tablet  {
        @include span(2 of 4);
        margin-bottom: gutter();
        height: 550px;
      }
      @include laptop  {
        @include span(2 of 6);
        margin-bottom: gutter();
        height: 450px;
      }
      @include desktop  {
        @include span(4 of 12);
        margin-bottom: gutter();
        height: 445px;
      }
      a {
        &:hover {
          text-decoration: none;
        }
      }
      &__photo {
        background-image: linear-gradient(-225deg, #FA2B56 0%, #F91C3D 100%);
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
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
</style>
