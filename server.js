const i18n = require('i18n');
i18n.configure({
  // setup some locales - other locales default to en silently
  locales:['zh-CN', 'zh-TW', 'en-US'],
  directory: __dirname + '/locales',
  defaultLocale: 'en'
});

var express = require('express');
var app = express();
app.use(i18n.init);

app.set('view engine', 'pug');
app.use(express.static('views'));

app.get('/', function (req, res) {
  const locales = ['zh-TW', 'zh-CN'];
  let locale = i18n.getLocale();
  if (locale === 'en') {
    if (req.locale) {
      locale = req.locale;
      if (!locales.includes(locale)) {
        locale = null;
      }
    } else if (req.acceptsLanguages('zh-TW', 'zh-CN')) {
      locale = req.acceptsLanguages('zh-TW', 'zh-CN');
    }
    if (!locale) {
      locale = 'zh-CN';
    }
    i18n.setLocale(locale);
  }
  res.render('home', {
    dict: i18n.__('dict'),
    lang: locale.replace('zh-', '').toUpperCase(),
    locale: locale
  });
})

app.get('/product', function (req, res) {
  const locales = ['zh-TW', 'zh-CN'];
  let locale = i18n.getLocale();
  if (locale === 'en') {
    if (req.locale) {
      locale = req.locale;
      if (!locales.includes(locale)) {
        locale = null;
      }
    } else if (req.acceptsLanguages('zh-TW', 'zh-CN')) {
      locale = req.acceptsLanguages('zh-TW', 'zh-CN');
    }
    if (!locale) {
      locale = 'zh-CN';
    }
    i18n.setLocale(locale);
  }
  res.render('product', {
    dict: i18n.__('dict'),
    lang: locale.replace('zh-', '').toUpperCase(),
    locale: locale
  });
})

// app.get('/support', function (req, res) {
//   res.render('support');
// })

app.get('/api/v0/locales/:locale', function (req, res) {
  const {locale} = req.params;
  i18n.setLocale(locale);
  res.send(locale);
})

app.get('/api/v0/address-validation/:hash', function (req, res) {
  let valid = false;
  const {hash} = req.params;
  if (hash.length > 30 && hash.length < 50) {
    if (hash.startsWith('0x')) {
      const arrETH = ['0xC3a98F5C64F3E6BdfaA23A9eDEa438a63D48BDa9',
        '0x06b655a706c6187b676c70bDb7D567FCd4f5BC22', '0xEc7cBF581845995B1b60ba993306486501E6a0bC',
        '0x2EB39c9ec6480771369169C1a86F7432d33b2aa7', '0x1CeD4E0DD52665ABFd60B961D8fb2FaD3E4cC019',
        '0xb30407ef1e9765aD099cac9DDa2fA9eAe485C8d3', '0xeE5d26C93664AB3175e52cCC077C876cb9A2080e',
        '0x9EE15d30A568eeE62813aa4Cc1e253F10aaCf418', '0x34B8033434Fd4d44Dd0cc29Ea4E5b17EF8674C46',
        '0xCC6e54e60649a8d7186370Ef1d07220F926eDEe8', '0xF1d92977a1F6379087a5CA78952Abf94d8Cc1CF1',
        '0xB11935e582ae75977d20d927F106Abb2E8A75465', '0xeC99e7c5345482652971902d2b7D223DF0Aa0C3f',
        '0x7287C710455D197A7218471Cc9A5b89B4f04BFB4', '0x881622604651D51Fdcf31Cd2395ceF6561D69390',
        '0x32600a5b4D4dB9008025B59FceE09aA981d38E9E', '0xD57B25e051Fd141c426bE05eF82E8E9EBAF0d142',
        '0xa234A72BA218Cd4cD9Cad8b036907F9A81e7E3aa', '0x60219ef9ad64fDb077af1e5724d28EEdE5Fe1dd4',
        '0x6bfb7e8141fe296ef8e6bDB52e566d9141620fAA', '0xEaa9866103Cc07d0e293d6D499be55249a973c05',
        '0x70054cf7f75D0c330D83DE656E6E6706E913021F', '0x48bcEE5EDCCF13F8ea21452FEd24fD80d87ccddc',
        '0x45101D45f8E5f91C7f0F359fC6733dbe926751A5', '0x9D79710a0ac3a3d15571547f5E0092Ec1e308FfE',
        '0xA2CF25370Fcd485d8558187b81966B3520E96cF0', '0xbc0211AFb597da597079B16152dE50D1FcCeb59b',
        '0xF9e6cfE4596D49D57c506Fc8F73534D1E8F0C648'];
      if (arrETH.includes(hash)) {
        valid = true;
      }
    } else if (hash.startsWith('3')) {
      const arrBTC = ['3AXKMquAcFHg7S9frYNzLNT7r54hCdy9iY', '3FsZjMW7T4bkTZwTFJERHzeiztS9j6ARdu',
        '3J8rWhbXs2r4vKJwr4x5gAYWa2j5MJV3EC', '3G1p1CFgF52jsBcB6Cm2BPC12J4Ae3qm5z',
        '3AmqYaZji8pQWZNBArH7tVZ1w2EuDR2UdY', '3PfQFVA4RUPs2nFrp8erPmfoyhzJeZ8jUn',
        '3AhyGf3LQpmfekZ8AFw4qmnXK42hsAMPXu'];
      if (arrBTC.includes(hash)) {
        valid = true;
      }
    }
  }
  res.send(valid);
})

// var server = app.listen(3000, function () {
var server = app.listen(80, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})