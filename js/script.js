let heart_buttons=document.querySelectorAll(".heart");
let delete_buttons=document.querySelectorAll('.delete-btn');
let plus_btn=document.querySelectorAll('.plus-btn');
let min_btn=document.querySelectorAll('.minus-btn');
let product_price =document.querySelectorAll(".product-price");
let total_price=document.querySelector('.total-price .final-price')
let shop_cart=document.querySelector('.shopping-cart');
let confirm_button=document.getElementById('confirm_command');

let totalprice_product=0;

/**********************Function total_price_Product*******************************/
function total(){
  product_price.forEach(function(item){
    totalprice_product+=Number(item.lastChild.textContent)
  })
}

window.onload = function() {
total();
total_price.textContent=totalprice_product
};

/**************************Heart_buttons action********************************/

heart_buttons.forEach(function(item){
item.onclick =function(){
  if(item.classList.length===1){
    item.classList.add("heart-clicked")
  }else{
    item.classList.remove("heart-clicked")
  }
}
});

/*******************************Delete_Buttons action************************************************/

delete_buttons.forEach(function(item){
  item.onclick=function(){
  let price =item.parentElement.parentElement.lastElementChild.lastChild
  item.parentElement.parentElement.remove();
  totalprice_product-=Number(price.textContent)
  total_price.textContent=totalprice_product
  price.textContent=0
 if(shop_cart.children.length==1){
  confirm_button.style.display="none"
  shop_cart.innerHTML="<h1>there is no product in the cart</h1>"
 }}
})

/************************************************Old-price / official-price********************************************************************** */

function old_price(item){
  return Number(item.parentElement.nextElementSibling.lastChild.textContent)
}
function official_price(item){
  return Number(item.parentElement.nextElementSibling.getAttribute('price'));
}
/********************************************plus button function******************************************************** */
plus_btn.forEach(function(item){
  item.onclick=function(){
    totalprice_product=0;
    let oldprice=old_price(item);
    let price=official_price(item);
    let value = Number(item.previousElementSibling.getAttribute('value'))+1;
    item.previousElementSibling.setAttribute("value",value);
    let newprice=oldprice+price;
    item.parentElement.nextElementSibling.lastChild.textContent=newprice;
    total();
    total_price.textContent=totalprice_product
  }
})


/***************************************************moin button function************************************************** */

min_btn.forEach(function(item){
  item.onclick=function(){
    totalprice_product=0;
    let oldprice=old_price(item);
    let price=official_price(item);
    let value=Number(item.nextElementSibling.getAttribute('value'));
    if(value>1){
      value-=1;
      item.nextElementSibling.setAttribute("value",value)
      let newprice=oldprice-price;
      item.parentElement.nextElementSibling.lastChild.textContent=newprice;
      total();
    total_price.textContent=totalprice_product
    }
  }
})

/**************************************************Confirm-button*********************************************************** */
function confirm_command(){
  alert("Command passed successfully")
}
confirm_button.addEventListener("click",confirm_command)


