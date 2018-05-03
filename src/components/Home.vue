<template lang="pug">
div
  .page.page-home.p1
    .bd-pageheader
      .container
        .h1.title
          h3 {{ $t('home-p1-title') }}
        h2 {{ $t('home-p1-subtitle') }}
        p
          | {{ $t('home-p1-content') }}
        div
          button(type="button", class="btn btn-danger")
            |{{$t('whitepaper')}}
  .page.page-home.p2
    .bd-pageheader
      .container
        h3 {{ $t('home-p2-title') }}
        div
          | {{ $t('home-p2-content') }}
        div
          button(type="button", class="btn btn-danger")
            |{{$t('buttn-seemore')}}
  .page.page-home.p3
    .bd-pageheader
      .container
        h3 {{ $t('home-p3-title') }}
  .page.page-home.p4
    .bd-pageheader
      .container
        h3 {{ $t('home-p4-title') }}
  .page.page-home.p5
    .bd-pageheader
      .container
        h3 {{ $t('home-p5-title') }}
        p
          | {{ $t('home-p5-content') }}
        div
          button(type="button", class="btn btn-danger")
            |{{$t('buttn-seemore')}}
  .page.page-home.p6
    .bd-pageheader
      .container
        h3 {{ $t('home-p6-title') }}
        p
          | {{ $t('home-p6-content') }}
        div
          button(type="button", class="btn btn-danger")
            |{{$t('download')}}
  .page.page-home.p7
    .bd-pageheader
      .container
        h3 {{ $t('home-p7-title') }}
        p
          | {{ $t('home-p7-content') }}
  .page.page-home.p8
    .bd-pageheader
      .container
        h3 {{ $t('home-p8-title') }}
        p
          | {{ $t('home-p8-content') }}
</template>

<script>
export default {
  name: 'home',
  data: () => {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.h1.title {
  color: #1F2D51;
}
button {
  background: #FA274F;
  padding-left: 4em;
  padding-right: 4em;
}
.bd-pageheader {
  padding-top: 4em;
  padding-bottom: 4em;
}
.page.page-home.p1 {
  background: white;
}
.page.page-home.p2 {
  background: #F3F5FA;
  .container {
    text-align: center;
  }
}
.page.page-home.p3 {
  background: #112D6F;
  color: white;
  .container {
    text-align: center;
  }
}
.page.page-home.p4 {
  background: white;
  color: #1F2D51;
  .container {
    text-align: center;
  }
}
.page.page-home.p5 {
  background: #F3F5FA;
}
.page.page-home.p6 {
  background: #112D6F;
  color: white;
  .container {
    text-align: center;
  }
}
.page.page-home.p7 {
  background: white;
}
.page.page-home.p8 {
  background: #F3F5FA;
  .container {
    text-align: center;
  }
}
</style>
