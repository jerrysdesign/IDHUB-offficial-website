// https://codedump.io/share/x40RCGBQvJzD/1/pug---generating-select-and-options
// Indents the code https://pugjs.org/language/iteration.html
// select
//   each variable in variables
//     option(value=variable.id) #{variable.var_name}

// https://pugjs.org/language/attributes.html
// https://pugjs.org/language/conditionals.html
'use strict'
$(document).ready(function() {
  const locale = $( "#locale" ).text();
  if(locale !== $( "#locales select option:selected" ).val()) {
    $("#locales select").val(locale);
  }

  $('#locales li a').click(function(e) {
    e.preventDefault();
    const localeSelected = $( this ).attr("title");
    if (locale !== localeSelected) {
      const {pathname} = location; 
      let path = location.pathname.split('/')[1];
      if (!path.length) {
        path = 'home';
      }
      const URL = `/api/v0/locales/${localeSelected}?path=${path}`;
      $.get( URL, function( data ) {
        window.location.reload();
      });
    }
  });
})
