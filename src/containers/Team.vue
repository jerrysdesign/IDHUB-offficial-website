<template lang="pug">
div(v-bind:class='pageName')
  Headbar
  .team
    .container
      .section-team(v-for='content in contents')
        .team__title-box
          h2.team__title
            | {{ $t(content.title) }}
          h3.team__desction
            | {{ $t(content.subtitle) }}
        ul.team__box
          li.team__item-wrapper(v-for='member in content.members')
            .ratio-1-1
              .team__item
                div {{ $t(member.name) }}
                div {{ $t(member.job) }}
                div {{ $t(member.experience) }}
</template>


<script>
import Headbar from '@/components/Header'
export default {
  name: 'team',
  data: () => {
    let numberOfAdvisor = 2
    let numberOfPerson = 11
    let advisor = []
    let person = []
    for(let i = 1; i <= numberOfAdvisor; i++){
      advisor.push({
        name: `advisor.name-${i}`,
        job: `advisor.job-${i}`,
        experience: `advisor.experience-${i}`
      })
    }
    for(let i = 1; i <= numberOfPerson; i++){
      person.push({
        name: `person.name-${i}`,
        job: `person.job-${i}`,
        experience: `person.experience-${i}`
      })
    }
    return {
      pageName: 'page-team',
      contents: [{
        title: 'team_page.title-1',
        subtitle: 'team_page.subtitle-1',
        members: advisor}, {
        title: 'team_page.title-2',
        subtitle: 'team_page.subtitle-2',
        members: person}
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
    @include tablet {
      @include gallery(4);
      &:nth-last-child(-n+3) {
        margin-bottom: 0;
      }
    }
    @include desktop {
      @include gallery(3);
      &:nth-last-child(-n+4) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
