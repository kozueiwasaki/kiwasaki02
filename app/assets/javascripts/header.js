$(function(){
  // $(".toggleButton").click(function(){
  //   console.log('hoge');
  //   $(".globalNav").slideToggle();
  // });
  $('.toggleButton').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.globalNav').slideUp();
      console.log('hoge');
    } else {
      $(this).addClass('active');
      $('.globalNav').slideDown();
    }
  });
});
