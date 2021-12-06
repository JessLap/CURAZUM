var content = [];
var item;

$(document).ready( function () {
    render_cart();
    num_item();
  });

function render_cart(){
   
    $(".container").empty();
    for(var i = 0;i < localStorage.length; i++){
	    var item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        render_item(item, localStorage.key(i));
    };
    $(".container").prepend('  <a href="cart.html">Корзина</a>');
}

function render_item(item, key){
  $(".container").prepend(' <div class="cart_cont" id="'+item["id"]+'""></div>');
  $(".cart_cont").first().append(' <img class="img_c" src="'+item["img"]+'" height="220px" width="200px">');
  $(".cart_cont").first().append(' <div class="cart_box" id="'+item["id"]+'""></div>');
  $(".cart_box").first().append(' <div class="cart_text" id="'+item["id"]+'""></div>');
  $(".cart_text").first().append('<p class="name_c">'+item["name"]+'</p>');
  $(".cart_text").first().append(' <p class="price_c">'+item["price"]+' &#8381'+'</p>');
  $(".cart_box").first().append(' <div class="cart_num_but" id="'+item["id"]+'""></div>');
  $(".cart_num_but").first().append(' <div class="number_c">'+item["count"]+'</div>');
  $(".cart_num_but").first().append(' <button class="minus" id="'+key+'">-</button>');
  $(".cart_num_but").first().append('<button class="plus" id="'+key+'">+</button>');
  $(".cart_num_but").first().append('<button class="del" id="'+key+'">Удалить</button>');
  
}

function num_item(){
    $("button").click(function(){
       
        var el = $(this).attr("id"); 
        if($(this).hasClass("plus")){
            plus_item(el);
        };
        if($(this).hasClass("minus")){
            minus_item(el);
        };
        if($(this).hasClass("del")){
            del_item(el);
        };
    })
}


function plus_item(key){
    var ll = localStorage.getItem(key);
    var item = JSON.parse(ll);
    item["count"]++;
    localStorage.setItem(key, JSON.stringify(item));
    render_count(item, key);
}

function minus_item(key){
    var ll = localStorage.getItem(key);
    var item = JSON.parse(ll);
    item["count"]--;
    
    if(item["count"] == 0){
        del_item(key);
    } else {
        localStorage.setItem(key, JSON.stringify(item));
        render_count(item, key);
    }
    
}

function render_count(item, key){
    $("div#"+key).children(".number_c").html(item["count"]);
    location.reload();
}

function del_item(key){
   
    localStorage.removeItem(key); 
    render_cart();
    location.reload();
    
}






