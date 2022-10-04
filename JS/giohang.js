var shoppingCart = (function() {
    cart = [];
     // Constructor
   function Item(id, name , img, price, count) {
     this.id   = id;
     this.name = name;
     this.img = img;
     this.price = price;
     this.count = count;
   }
   // Save cart
   function saveCart() {
     sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
   }
     // Load cart
   function loadCart() {
     cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
   }
   if (sessionStorage.getItem("shoppingCart") != null) {
     loadCart();
   }
   
   var obj = {};
   
   // Add to cart
   obj.addItemToCart = function(id, name , img , price, count) {
     for(var item in cart) {
       if(cart[item].id === id) {
         cart[item].count ++;
         saveCart();
         return;
       }
     }
     var item = new Item(id, name, img , price, count);
     cart.push(item);
     saveCart();
   }
   obj.removeItemFromCartAll = function(id){
    for(var item in cart ){
        if (cart[item].id === id){
            cart.splice(item,1);
            break;
        }
    }
    saveCart();
}

obj.totalCart= function(){
    var totalCart=0;
    for(var item in cart ){
        totalCart += cart[item].price * cart[item].count;

    }
    return Number(totalCart.toFixed(0));
}
 // List cart
   obj.listCart = function() {
     var cartCopy = [];
     for(i in cart) {
       item = cart[i];
       itemCopy = {};
       for(p in item) {
         itemCopy[p] = item[p];
 
       }
       itemCopy.total = Number(item.price * item.count).toFixed(0);
       cartCopy.push(itemCopy)
     }
     return cartCopy;
   }
   return obj;
 })();
 

 
 var pro = [];
 
 function saveproduct() {
   sessionStorage.setItem('shopping', JSON.stringify(pro));
 }
   // Load cart
 function loadproduct() {
   pro = JSON.parse(sessionStorage.getItem('shopping'));
 }
 
 
 // Add item
 $('.add-to-cart').click(function(event) {
   event.preventDefault();
 var id = $(this).data('id');
   var name = $(this).data('name');
   var img = $(this).data('img');
   var price = Number($(this).data('price'));
   shoppingCart.addItemToCart(id, name,img, price, 1);
   displayCart();
 });




function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for(var i in cartArray) {
      output += "<tr class='text-center'>"
        + "<td><img src='" + cartArray[i].img + "' style='width:50px'></td>" 
        + "<td class='name-title'>" + cartArray[i].name + "</td>" 
        + "<td>" + cartArray[i].price + "₫</td>"
        + "<td><button class='minus-item cart-count input-group-addon btn btn-outline-primary' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">-</button>"
        +""
        +  "<button class='btn cart-count'>" +cartArray[i].count+"</button>" 
        + "<button class='plus-item cart-count btn btn-primary input-group-addon' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">+</button>"
        +"</td>"
        + "<td>" + cartArray[i].total+ "₫</td>"   
        + "<td><button class='delete-item btn btn-outline-danger' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">X</button></td>"
       
        +  "</tr>";
    }
    $('.show-cart-1').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
   
  }

  


  $('.show-cart-1').on("click",".delete-item",function(event){
    var id= $(this).data('id')
    shoppingCart.removeItemFromCartAll(id);
    displayCart();
  })

  displayCart();

  
