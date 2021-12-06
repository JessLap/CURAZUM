
let cart = {
    "1":{"id" :1,"name" : "Диплодок","price" :2100,"img" : "../img_toys/cat1.jpg","count" :0},
    "3":{"id" :3,"name" : "Пингвин","price" :1500,"img" : "../img_toys/cat3.jpg","count" :0},
    "2":{"id" :2,"name" : "Плезиозавр","price" :1500,"img" : "../img_toys/cat2.jpg","count" :0},
    "4":{"id" :4,"name" : "Черепаха","price" :1900,"img" : "../img_toys/cat4.jpg","count" :0},
    "5":{"id" :5,"name" : "Лама","price" :2200,"img" : "../img_toys/cat5.jpg","count" :0},
    "6":{"id" :6,"name" : "Косатка средняя","price" :2700,"img" : "../img_toys/cat6.jpg","count" :0},
    "31":{"id" :31,"name" : "Капор с шарфом 'Кошка'","price" :2400,"img" : "../img_clothes/cat30.jpg","count" :0},
    "32":{"id" :32,"name" : "Шарф 'Ленивец'","price" :2500,"img" : "../img_clothes/cat31.jpg","count" :0},
    "33":{"id" :33,"name" : "Капюшон 'Фенек'","price" :2000,"img" : "../img_clothes/cat32.jpg","count" :0},
    "34":{"id" :34,"name" : "Капор 'Лягушка'","price" :2700,"img" : "../img_clothes/cat33.jpg","count" :0},
    "35":{"id" :35,"name" : "Шарф 'Опоссум'","price" :2500,"img" : "../img_clothes/cat35.jpg","count" :0},
    "36":{"id" :36,"name" : "Шарф 'Лисица'","price" :2500,"img" : "../img_clothes/cat36.jpg","count" :0}
  
};

function add_to_cart(){
    $(".add_to_cart").click(function(){
        var id = $(this).attr("id")
       
        
    color_button(id);
    plus_item(id);
    push_to_LS(id);
    });
}


function color_button(id){
    $("button#"+id).html("Добавлено");
    $("button#"+id).css({"background-color":"rgb(110, 76, 124)", "border-color":"rgb(110, 76, 124)"});
}

function push_to_LS(id){
    $.each(cart, function(index, value){
       if(index === id){
           localStorage.setItem(id, JSON.stringify(value));
       }
    })
}

function plus_item(id){
    cart[id]["count"]=1;
}


$(function(){
    add_to_cart();
    
})