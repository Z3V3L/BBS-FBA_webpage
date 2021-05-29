$('body').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

$('a#contact').on('click', function(){

  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    $('#contactAnounce').modal('show');
  } else {
    setTimeout(function(){ 
      $('#contactAnounce').modal('show'); 
    }, 600);
  }
});

