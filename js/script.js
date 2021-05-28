$('body').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

$('a#contact').on('click', function(){
  $('#contactAnounce').modal('show');
});
