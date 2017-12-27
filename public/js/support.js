function clearValidationResult() {
  const message = $('#address_result').text();
  if (message.length) {
    $('#address_result').html('');
    if (message.length == 12) {
      $('#address_result').removeClass('parsley-success');
    } else if (message.length == 17) {
      $('#address_result').removeClass('parsley-error');
    }
  }
};

function invalidation() {
  $('#address_result').removeClass('parsley-success');
  $('#address_result').addClass('parsley-error');
  $('#address_result').html('错误地址，请联系 <a href="mailto:support@idhub.network?subject=BTC or ETH address validation">IDHub 客服</a>');
};

$(document).ready(function() {
  $('#hash_address').mousedown(function() {
    clearValidationResult();
  });
  $('#hash_address').keyup(function(e) {
    const key = e.which;
    if (key == 13) { // the enter key code
      $('#address_verify_btn').click();
      return false;
    } else {
      clearValidationResult();
    }
  });
  $('#address_verify_btn').click(function() {
    $('#address_result').removeClass('hide');
    const address = $('#hash_address').val();
    const hash = address.length > 50 ? address.slice(0, 50) : address;
    const URL = `/api/v0/address-validation/${hash}`;
    $.get(URL).done(function(data) {
      if (data === true) {
        $('#address_result').removeClass('parsley-error');
        $('#address_result').addClass('parsley-success');
        $('#address_result').html('正确的 IDHub 地址');
      } else {
        invalidation();
      }
    })
    .fail(function() {
      invalidation();
    });
  });
});