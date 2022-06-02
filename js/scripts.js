$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const inputColor = parseInt($("input:radio[name=color]:checked").val());
    const inputAge = parseInt($("#age").val());

    if (inputColor === 1 && inputAge <= 3) {
      $('#kermit').show();
      $('form#quiz').hide();
    } else if (inputColor === 2 && inputAge >= 1)  {
      $('#msPiggy').show();
      $('form#quiz').hide();
    } else if (inputColor === 3 && inputAge <= 2) {
      $('#animal').show();
      $('form#quiz').hide();
    } if (inputColor === 3 && inputAge === 3) {
      $('#sorry').show();
      $('form#quiz').hide();
    }
  });
});