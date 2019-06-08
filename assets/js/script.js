document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
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
