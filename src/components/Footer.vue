<template lang="pug">
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
            a.social__link.social__link--rounded.social__link--facebook(href='javascript:;', title='Say hello in Facebook!')
          li.social__item
            a.social__link.social__link--rounded.social__link--twitter(href='javascript:;', title='Say hello in Twitter!')
          li.social__item
            a.social__link.social__link--rounded.social__link--slack(href='javascript:;', title='Say hello in Slack')
          li.social__item
            a.social__link.social__link--rounded.social__link--github(href='javascript:;', title='Say hello in Github!')
          li.social__item
            a.social__link.social__link--rounded.social__link--telegram(href='javascript:;', title='Say hello in Telegram!')
          li.social__item
            a.social__link.social__link--rounded.social__link--wechat(href='javascript:;', title='Say hello in Wechat!')
          li.social__item
            a.social__link.social__link--rounded.social__link--qq(href='javascript:;', title='Say hello in QQ!')
          li.social__item
            a.social__link.social__link--rounded.social__link--reddit(href='javascript:;', title='Say hello in Reddit!')
      .footer__right_box
        ul.footer__menu.footer__menu
          li.footer__menu__item.footer__menu__title 产品
          li.footer__menu__item
            a.footer__menu__link(href='javascript:;')
              | 技术
          //- li.footer__menu__item
          //-   a.footer__menu__link(href='javascript:;')
          //-     | App
          //- li.footer__menu__item
          //-   a.footer__menu__link(href='javascript:;')
          //-     | 合作夥伴
        ul.footer__menu.footer__menu
          li.footer__menu__item
            span.footer__menu__title 消息
          li.footer__menu__item
            a.footer__menu__link(href='javascript:;')
              | 新闻
          li.footer__menu__item
            a.footer__menu__link(href='javascript:;')
              | 活动
          li.footer__menu__item
            a.footer__menu__link(href='javascript:;')
              | 报导
        ul.footer__menu.footer__menu
          li.footer__menu__item
              span.footer__menu__title 关于我们
          li.footer__menu__item
            a.footer__menu__link(href='javascript:;')
              | 团队
          li.footer__menu__item
            a.footer__menu__link(href='javascript:;')
              | 招聘
        ul.footer__menu.footer__menu
          li.footer__menu__item
              span.footer__menu__title 保持联系
          li.footer__menu__item
            a.footer__menu__link(href='javascript:;')
              | idhub.network
          li.footer__menu__item
            a.footer__menu__link(href='javascript:;')
              | hello@idhub.network
          li.footer__menu__item
            a.footer__menu__link(href='javascript:;')
              | +86 123 456 789



</template>

<script>
export default {
  name: 'footer'
}
</script>


<style lang="scss" scoped>
</style>
