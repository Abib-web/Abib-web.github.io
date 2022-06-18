/*document.querySelectorAll( '.ciclegraph' ).forEach( ( ciclegraph )=>{
    let circles = ciclegraph.querySelectorAll( '.circle' )
    let angle = 360-90, dangle = 360 / circles.length
    for( let i = 0; i < circles.length; ++i ){
      let circle = circles[i]
      angle += dangle
      circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
    }
  })
var sliderListe = ["slider-me","slider-hadware","slider-fullstack","slider-embed"];

function slideFunction(){
  for(let i = 0; i < sliderListe.length; ++i ){
    for(let x = 0; x < sliderListe.length; ++x ){
      if(x === i){
        continue
      }else{
        var elems_hide = document.getElementsByClassName(sliderListe[x]);
        hideContent(elems_hide);
      }
    }
    setInterval(function(){
      var elems = document.getElementsByClassName(sliderListe[i]);
      displayContent(elems);
    }, 1000)

  }
  
  //startSlide()
}
function startSlide(){
  var elems = document.getElementsByClassName('slider-me');
  displayContent(elems);
}
  
  function displayContent(div){
    for (var i=0;i<div.length;i+=1){
      div[i].style.display = 'block';
    }
  }
  function hideContent(div){
    for (var i=0;i<div.length;i+=1){
      div[i].style.display = 'none';
    }
  }
  window.onload = slideFunction*/

  $("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
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