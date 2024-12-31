  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
    .stop()
    .fadeOut(500)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
    }, 3000);


$( "#btn-modal" ).click(function() {
  $('#modal').show();
});

$( "#close-modal" ).click(function() {
  $('#modal').hide();
});