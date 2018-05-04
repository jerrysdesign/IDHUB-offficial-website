<template lang="pug">
div(v-bind:class='pageName')
  Headbar
  .team
    .container
      .section-team(v-for='content in contents')
        .team__title-box
          h2.team__title
            | {{ content.title }}
          h3.team__desction
            | {{ content.subtitle }}
        ul.team__box
          li.team__item-wrapper(v-for='member in content.members')
            .ratio-1-1
              .team__item
                div {{ member.name }}
                div {{ member.job }}
                div {{ member.experience }}
</template>


<script>
import Headbar from '@/components/Header'
export default {
  name: 'team',
  data: () => {
    return {
      pageName: 'page-team',
      contents: [{
        title: '顧問團隊',
        subtitle: '我們的顧問群',
        members: [
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' }
        ]}, {
        title: '顧問團隊',
        subtitle: '我們的顧問群',
        members: [
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' },
          { name: 'name', job: 'job', experience: 'experience' }
        ]}
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
.section-team + .section-team {
  padding-top: 0;
}
.team {
  &__item-wrapper {
    @include clear_list;
    .ratio-1-1 {
      width: 100%;
      padding-top: 100%;
      position: relative;
    }
  }
  &__box {
    @include clearfix;
    margin: 0;
    padding:  0;
  }
  &__item {
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color:$color-gray-light;
    border-radius: 5px;
    transition: box-shadow 0.4s ease;
    &:hover {
      background-image: linear-gradient(-180deg, #1B47AD 0%, #0D2F80 100%);
      box-shadow: 30px 30px 60px 0 rgba($color-gray-darkest, .3);
    }
    @media (#{$max_phone}) {
      padding: 20px 15px 20px;
    }
  }
}
.team__title-box {
  padding-bottom: 100px;
}
// grid
.team {
  background-color: white;
  &__item-wrapper {
    @include gallery(6);
    margin-bottom: gutter();
    &:nth-last-child(-n+2) {
      margin-bottom: 0;
    }
    @media (#{$min_tablet}) {
      @include gallery(4);
      &:nth-last-child(-n+3) {
        margin-bottom: 0;
      }
    }
    @media (#{$min_desktop}) {
      @include gallery(3);
      &:nth-last-child(-n+4) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
