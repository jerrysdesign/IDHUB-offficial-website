<template lang="pug">
mixin footer__menu__link(text, url)
  li.footer__menu__item
    router-link.footer__menu__link(to= url)
      | #{text}
footer.footer
  .footer__main_box
    .container.footer__container
      .footer__left_box
        a.footer__logo_box(href='javascript:;')
          img.footer__logo(src='img/etc/logo--circle--white.svg')
          span.footer__logo_text
            | IDHub
        span.footer__copyright
          | &copy; IDHUB. All Rights Reserved.
        ul.social.footer__social.footer__social_box
          li.social__item
            a.social__link.social__link--rounded.social__link--facebook(target='_blank', href='https://www.facebook.com/IdhubOfficial', title='Say hello in Facebook!')
          li.social__item
            a.social__link.social__link--rounded.social__link--twitter(target='_blank', href='https://twitter.com/IDHUBOFFICIAL', title='Say hello in Twitter!')
          li.social__item
            a.social__link.social__link--rounded.social__link--slack(target='_blank', href='https://idhubnetwork.herokuapp.com', title='Say hello in Slack')
          li.social__item
            a.social__link.social__link--rounded.social__link--github(target='_blank', href='https://github.com/idhubnetwork', title='Say hello in Github!')
          li.social__item
            a.social__link.social__link--rounded.social__link--telegram(target='_blank', href='https://t.me/joinchat/GwYlyA8g8aNQCBElmAk1Dw', title='Say hello in Telegram!')
          li.social__item
            a.social__link.social__link--rounded.social__link--wechat(target='_blank', href='javascript:;', title='Say hello in Wechat!')
          li.social__item
            a.social__link.social__link--rounded.social__link--qq(target='_blank', href='javascript:;', title='Say hello in QQ!')
          li.social__item
            a.social__link.social__link--rounded.social__link--reddit(target='_blank', href='javascript:;', title='Say hello in Reddit!')
      .footer__right_box
        ul.footer__menu.footer__menu
          li.footer__menu__item.footer__menu__title 产品
          +footer__menu__link('技术','tech')
          +footer__menu__link('App','app')
          +footer__menu__link('合作夥伴','cooperate')
        ul.footer__menu.footer__menu
          li.footer__menu__item
            span.footer__menu__title 消息
          +footer__menu__link('新闻','news')
          +footer__menu__link('活动','news')
          +footer__menu__link('报导','news')
        ul.footer__menu.footer__menu
          li.footer__menu__item
            span.footer__menu__title 关于我们
          +footer__menu__link('团队','team')
          +footer__menu__link('招聘','careers')
        ul.footer__menu.footer__menu
          li.footer__menu__item
            span.footer__menu__title 保持联系
          +footer__menu__link('idhub.network','contact')
          +footer__menu__link('hello@idhub.network','contact')
          +footer__menu__link('+86 123 456 789','contact')
</template>


<script>
export default {
  name: 'footer'
}
</script>


<style lang="scss" scoped>

@import '../stylesheets/_abstracts/_variables';
@import '../stylesheets/_abstracts/_mixin';
@import '../stylesheets/_abstracts/_grid';

.footer {
  &__ {
    &container {
      position: relative;
    }
    &main_box {
      padding: 35px 0;
      border-bottom: 1px solid rgba($cloud, .12);
      background-image: linear-gradient(-180deg, #123075 0%, #092056 100%);
      @media (#{$max_tablet}) {
        text-align: center;
      }
      @media (#{$min_tablet}) {
        padding: 50px 0;
      }
      @media (#{$min_laptop}) {
        padding: 80px 0;
      }
      @media (#{$min_desktop}) {
        padding: 100px 0;
      }
    }
    &left_box {
      margin-right: 10%;
      @media (#{$min_tablet}) {
        float: left;
      }
      @media (#{$max_tablet}) {
        margin-bottom: 50px;
      }
    }
    &right_box {
      @media (#{$min_tablet}) {
        float: right;
      }
    }
    &logo_box {
      @include clear_link;
      display: block;
      height: 60px;
      line-height: 60px;
      margin-bottom: 20px;
      img {
        height: 100%;
      }
    }
    &logo {
      margin-right: 10px;
    }
    &social_box {
      margin-top: 16px;
    }
    &nav__item {
      display: inline-block;
    }
    &nav__link {
      @include clear_link;
    }
    &logo_text {
      @include font_loader($montserrat, 4, 'n');
      position: relative;
      top: 2px;
      font-size: 48px;
      color: rgba(white, .3);
      letter-spacing: .05em;
    }
    &description {
      @include font_loader($montserrat, 1, 'n');
      color: white;
      font-size: 11px;
      line-height: 1.6;
      letter-spacing: .05em;
      display: inline-block;
      max-width: 260px;
    }
    &copyright {
      @include font_loader($montserrat, 1, 'n');
      color: rgba(white, .3);
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: .05em;
    }
    &menu {
      @include clear_list;
      @media (#{$min_tablet}) {
        display: inline-block;
        vertical-align: top;
        margin-right: 65px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    &menu__item {
      margin-bottom: 15px;
      @media (#{$min_tablet}) {
        &:last-child {
          margin-bottom: 0;
        }
      }
      @media (#{$max_tablet}) {
        float: left;
        margin-right: 20px;
      }
    }
    &menu__title {
      @include font_loader($montserrat, 4, 'n');
      color: white;
      font-size: 14px;
      letter-spacing: .05em;
      text-transform: uppercase;
      @media (#{$min_tablet}) {
        font-size: 18px;
      }
    }
    &menu__link {
      @include font_loader($montserrat, 4, 'n');
      color: $color-primary-light;
      font-size: 14px;
      letter-spacing: .05em;
      &:hover, &:focus {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
