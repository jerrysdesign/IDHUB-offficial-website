<template lang="pug">
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
</template>

<script>
export default {
  name: 'section-team'
}
</script>

<style lang="scss" scoped>
@import '../stylesheets/_abstracts/_variables';
@import '../stylesheets/_abstracts/_mixin';
@import '../stylesheets/_abstracts/_grid';
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
</style>
