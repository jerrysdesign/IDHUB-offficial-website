<template lang="pug">
div(v-bind:class='pageName')
  .cover
    Headbar
    .container
      .section__header
        h2 {{ $t('home-media-title') }}
        h3 {{ $t('home-media-text') }}
  .news
    .container
      .section-team
        ul.news__box
          li.news__item(v-for='content in contents')
            .item_img
              img(:src='content.image.url')
            .item_date
              | {{content.publishedDate}}
            .item_short_content(v-html="content.content.brief")
</template>

<script>
import Headbar from '@/components/Header'

export default {
  name: 'news',
  data: () => {
    return {
      pageName: 'page-activities',
      contents: []
    }
  },
  mounted() {
    this.getContext()
  },
  methods: {
    getContext(){
      const ifetch = new Promise((resolve, reject) => {
        fetch("http://localhost:3001/fake_api/v1/blogs/5af108a30907a14760940f95").then(resp => {
          resp.json().then(d =>
            resolve(d.data)
          )
        }).catch(err =>
          reject(err)
        )
      })
      return ifetch.then(data =>{
        this.contents = data
      })
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
@import '../stylesheets/_abstracts/_variables';
@import '../stylesheets/_abstracts/_mixin';
@import '../stylesheets/_abstracts/_grid';

.page-activities {
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
      color: white;
      text-align: center;
      padding-top: 80px;
      padding-bottom: 80px;
      @include tablet {
        padding-top: 120px;
        padding-bottom: 120px;
      }
      @include laptop  {
        padding-top: 150px;
        padding-bottom: 150px;
      }
    }
  }
}

.section-team + .section-team {
  padding-top: 0;
}
.news {
  position: relative;
  &__box {
    margin: 0;
    padding:  0;
    @include clearfix;
    @include clear_list;
  }
  &__item {
    background-color: white;
    border-radius: 5px;
    transition: box-shadow 0.4s ease;
    padding: 15px;
    box-shadow: 20px 20px 60px 0 rgba($color-gray-darkest,.1);
    &:hover {
      box-shadow: 20px 20px 60px 0 rgba($color-gray-darkest,.3);
      .item_img {
        background-image: linear-gradient(-225deg, #FA2B56 0%, #F91C3D 100%);
      }
    }
    .item_img {
      position: relative;
      background-color: #000;
      overflow-x: hidden;
      display:flex;
      align-items:center;
      justify-content:center;
      height: 300px;
      border-radius: 5px;
      margin-bottom: 30px;
      img {
        height: 300px;
        @media (#{$min_laptop}){
        }
      }
    }
    .item_date {
      text-align: left;
      font-size: 12px;
      color: $color-gray-dark;
    }
    .item_short_content {
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 18px;
      line-height: 27px;
      height: 4.5em;
    }
    .item_date + .item_short_content {
      margin-top: 4px;
    }
  }
}
.news__title-box {
  padding-bottom: 100px;
}
// grid
.news {
  background-color: $color-gray-ligtest;
  &__item-wrapper {
  }
}
.news {
  &__box {
    @include clearfix;
    margin: 0;
    padding:  0;
  }
  &__item {
    @include span(12 of 12);
    margin-bottom: gutter();
    @include tablet {
      @include span(2 of 4);
    }
    @include laptop  {
      @include span(4 of 12);
    }
  }
}
</style>
