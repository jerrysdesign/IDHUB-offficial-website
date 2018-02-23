// https://codedump.io/share/x40RCGBQvJzD/1/pug---generating-select-and-options
// Indents the code https://pugjs.org/language/iteration.html
// select
//   each variable in variables
//     option(value=variable.id) #{variable.var_name}

// https://pugjs.org/language/attributes.html
// https://pugjs.org/language/conditionals.html

$(document).ready(function() {
  const locale = $( "#locale" ).text();
  if(locale !== $( "#locales select option:selected" ).val()) {
    $("#locales select").val(locale);
  }

  $('#locales li a').click(function(e) {
    e.preventDefault();
    const localeSelected = $( this ).attr("title");
    console.log('locale =', locale);
    console.log('localeSelected =', localeSelected);
    if (locale !== localeSelected) {
      console.log('locale =', locale);
      console.log('localeSelected =', localeSelected);
      const {pathname} = location; 
      let path = location.pathname.split('/')[1];
      console.log('path =', path);
      if (!path.length) {
        path = 'home';
      }
      console.log('path =', path);
      const URL = `/api/v0/locales/${localeSelected}?path=${path}`;
      $.get( URL, function( data ) {
        console.log('data received =', data);
        console.log('DIV locale =', $( "#locale" ).text());
        window.location.reload();
      });
    }
  });

  // $( "#locales select" )
  //   .change(function() {
  //     // const locale = $( "#locale" ).text();
  //     const localeSelected = $( "#locales select option:selected" ).val();
  //     if (locale !== localeSelected) {
  //       console.log('locale =', locale);
  //       console.log('localeSelected =', localeSelected);
  //       const {pathname} = location; 
  //       let path = location.pathname.split('/')[1];
  //       console.log('path =', path);
  //       if (!path.length) {
  //         path = 'home';
  //       }
  //       console.log('path =', path);
  //       const URL = `/api/v0/locales/${localeSelected}?path=${path}`;
  //       $.get( URL, function( data ) {
  //         console.log('data received =', data);
  //         console.log('DIV locale =', $( "#locale" ).text());
  //         window.location.reload();
  //       });
  //     }
  //     // $.post( "test.php", { name: "John", time: "2pm" } );
  //   })
  //   .trigger( "change" );
})
