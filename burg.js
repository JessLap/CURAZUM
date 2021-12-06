$(document).ready(function(){
    burg_open();
});

function burg_open(){
    $(".burg").click(function(){ 
        $('.burg, header, .wrapp').toggleClass('active');
        
        $(".burg after").css({"transform":"rotate(45deg)"});
        $(".burg before").css({"transform":"rotate(135deg)"});
    })
}