(function autoslider(){
  $('.slider .active').each(function() {

    if(!$(this).is(':last-child')) {

     $(this).delay(2000).fadeOut(2000,function() {

     $(this).removeClass('active').next().addClass('active').fadeIn();
       autoslider();
 });

} else {
   $(this).delay(2000).fadeOut(3000,function() {
   $(this).removeClass('active');
$('.slider div').eq(0).addClass('active').fadeIn();


});

}
});


}());









