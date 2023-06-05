$('.btn1').click(function(){
    $('.btn1').hide();
    $('.btn1').css("transition","1s");
    $('.idk').show();
});

$('.login').click(function(){
    alert("Thanks For Login !😀");
    $('.btn1').show();
    $('.login').css("transition","1s");
    $('.idk').hide();
});

$('input').keydown(function(){
    $(this).css("background-color","#fff")
   });
   $('input').keyup(function(){
    $(this).css("background-color","#000")
   });

$('.i1').mouseenter(function() {
    $('.i1').css({"transform":"rotate(360deg)","border-radius":"10px","transition":"0.6s","background":"#ffffff","color":"#00acee"})
});
$('.i1').mouseleave(function(){
    $('.i1').css({"transform":"rotate(-360deg)","border-radius":"50%","transition":"0.6s","background":"#FC00FF","color":"#ffffff"})
});

$('.i2').mouseenter(function() {
    $(this).css({"transform":"rotate(360deg)","border-radius":"10px","transition":"0.6s","background":"#ffffff","color":"#00acee"})
});
$('.i2').mouseleave(function(){
    $(this).css({"transform":"rotate(-360deg)","border-radius":"50%","transition":"0.6s","background":"#FC00FF","color":"#ffffff"})
 });


$('.i3').mouseenter(function() {
    $(this).css({"transform":"rotate(360deg)","border-radius":"10px","transition":"0.6s","background":"#fff","color":"#00acee"})   
});
$('.i3').mouseleave(function(){
    $(this).css({"transform":"rotate(-360deg)","border-radius":"50%","transition":"0.6s","background":"#FC00FF","color":"#ffffff"})
});

