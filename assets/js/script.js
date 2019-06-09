$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});

$('#s2').hide();
$('#s3').hide();
$('#s4').hide();

let i=0;
setInterval(() => {
  if($('#s1').css("display") != "none") {
    $( '#s1' ).fadeOut('500', () => {
      $('#s2').fadeIn('500');
    });
  }
  else if( $('#s2').css("display") != "none") {
    $( '#s2' ).fadeOut('500', () => {
      $('#s3').fadeIn('500');
    });
  }
  else if($('#s3').css("display") != "none") {
    $( '#s3' ).fadeOut('500', () => {
      $('#s4').fadeIn('500');
    });
  }
  else if($('#s4').css("display") != "none") {
    $( '#s4' ).fadeOut('500', () => {
      $('#s1').fadeIn('500');
    });
  }
},2000);
