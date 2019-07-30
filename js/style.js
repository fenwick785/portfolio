/*@media only screen and(max - device - width: 1366px) {
    .parallax1 {
          background - attachment: scroll;
        }
      }
      @media only screen and(max - device - width: 1366px) {
    .parallax2 {
          background - attachment: scroll;
        }
      }
      @media only screen and(max - device - width: 1366px) {
    .parallax3 {
          background - attachment: scroll;
        }
      }
*/

$(document).ready(function() {

  function goTop() {
    console.log("ca marche");
    $('html').animate({
      scrollTop: 0
  }, 1000)
  };

  $('.avatar').on('click', goTop);


  $('a[href^="#profil"]').click(function(){  
    var id = $(this).attr("href");
    var offset = $(id).offset().top 
    $('html, body').animate({scrollTop: offset}, 1000); 
    return false;  
}); 


$('a[href^="#projets"]').click(function(){  
  var id = $(this).attr("href");
  var offset = $(id).offset().top 
  $('html, body').animate({scrollTop: offset}, 1300); 
  return false;  
}); 


$('a[href^="#competences"]').click(function(){  
  var id = $(this).attr("href");
  var offset = $(id).offset().top 
  $('html, body').animate({scrollTop: offset}, 1500); 
  return false;  
}); 


});
/*
  $('.avatar').on('click', function(evt){
    // bloquer le comportement par défaut: on ne rechargera pas la page
    evt.preventDefault(); 
    console.log(this);
    // enregistre la valeur de l'attribut  href dans la variable target

var target = $(this).attr('href');
     le sélecteur $(html, body) permet de corriger un bug sur chrome 
    et safari (webkit) 
$('html, body')
    // on arrête toutes les animations en cours 
    .stop()
    // on fait maintenant l'animation vers le haut (scrollTop) vers 
     //notre ancre target 
    .animate({scrollTop: $(target).offset().top}, 1000 );
  }
)*/

/*
function goToTop(evt){
  console.log("ca")
  $('html').animate({
      scrollTop: 0
  }, 1000);
    //return false;
};

$(".avatar").on('click', goToTop());

*/