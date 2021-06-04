$(".mole1").click(function(){
    $(".mole1").hide();
});
    
$(".whack2").click(function(){
    $(".mole-two").hide();
});
    
$(".whack3").click(function(){
    $(".third-mole").hide();
    $(".mole1").show();
    $(".mole-two").show();
});
    
$(".reset").click(function(){
    $(".mole1").show();
    $(".mole-two").show();
    $(".third-mole").show();
});
    
