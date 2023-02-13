
let products = document.querySelectorAll(".product");

let links = document.querySelectorAll(".item-link");

let count = 0;


initiallizeF()

createLine();

function initiallizeF(){





let currentPrice = document.querySelector(".current");

let discount = document.createElement("div");

discount.innerText = "50%";


discount.classList.add("discount");


currentPrice.append(discount);



let beforeP = document.createElement("div");

beforeP.innerText = "$250";

let width = window.innerWidth;

 beforeP.classList.add("beforePrice");


currentPrice.append(beforeP)




document.querySelector(".quantity").innerText = count;

let mydiv = document.querySelector(".showcase");


products.forEach(product =>{
product.addEventListener("click", (e)=>{
let index = e.target.id;

if(index == 1){

mydiv.style.backgroundImage = "url(images/image-product-1.jpg)";

}else if(index == 2){

mydiv.style.backgroundImage = "url(images/image-product-2.jpg)";

}else if(index == 3){

mydiv.style.backgroundImage = "url(images/image-product-3.jpg)";

}else if(index == 4){

mydiv.style.backgroundImage = "url(images/image-product-4.jpg)";

}else{
  console.log("error");
}

})
})

}

// to increase quantity of the products

function increase(){
   count++
   document.querySelector(".quantity").innerText = count;
}


//  to decrease quantity of the products

function decrease(){
  if(count > 0){
      count--

      document.querySelector(".quantity").innerText = count;
  }else{
    count = 0;
  }
}

function result(){
  let number = document.querySelector(".quantity").innerText;

  return {score: number}
}




function settle(){

  let product = result().score;

  if(product == 0){

    document.querySelector(".myCart").style.display = "block";

    document.querySelector(".total").innerText = "your cart is empty"
    document.querySelector(".total").classList.add("emptyText")

  }else if(product > 0){

  document.querySelector(".myCart").style.display = "block";

  let productName = document.querySelector(".product-title").innerText;

  document.querySelector(".itemPurchased").style.backgroundImage = "url(images/image-product-1.jpg)"

  document.querySelector(".delete-icon").setAttribute("src", "images/icon-delete.svg");


  document.querySelector(".total").innerHTML =productName+" " +"$125.00 x"+" " + product +"  "+"<span style= 'font-weight: bold ; font-size: 15px'>"+"$"+ (125*product)+"</span>";

  document.querySelector(".checkout-btn").innerText = "Checkout";

  document.querySelector(".checkout-btn").classList.add("btn");
  }else{
    console.log("error");
  }
}


function restart(){

  location.reload();
}


function deletion(){

  let hide = document.querySelector(".alert");

  hide.remove();

  document.querySelector(".itemPurchased").style.backgroundImage = "";

  document.querySelector(".delete-icon").setAttribute("src", "");

  document.querySelector(".total").innerHTML ="";

  document.querySelector(".quantity").innerText = "0";

  document.querySelector(".myCart").style.display = "none";

}

function showNumber(){

  let product = result().score;

  let signal = document.createElement("div");

  signal.innerText = product;

  signal.classList.add("alert");

  document.querySelector(".cart-container").append(signal);
}

document.querySelector(".showcase").addEventListener("click", heighlight);

window.addEventListener("resize",function(){
  let width = window.innerWidth;

  if(width == 500 || width < 500){

    document.querySelector(".showcase").removeEventListener("click",heighlight);
  }
})

function heighlight(){


  let curtain = document.createElement("div");

  curtain.classList.add("lightBox");

  document.querySelector("body").append(curtain);

  document.querySelector(".cross").style.display = "block";
  document.querySelector(".model").style.display = "block";
  document.querySelector(".prev-container").style.display = "block";
  document.querySelector(".next-container").style.display = "block";

  document.querySelector(".model").style.backgroundImage = "url(images/image-product-1.jpg)";

}

function closeCurtain(){

  location.reload();
}

function slideP(){

  count++

  let width = window.innerWidth;

  let mySlide = document.querySelector(".model");

  let mobileSlide = document.querySelector(".showcase");

  if(count == 1){

width > 500 ? mySlide.style.backgroundImage = "url(images/image-product-1.jpg)"

:

    mobileSlide.style.backgroundImage = "url(images/image-product-1.jpg)";

  }else if(count == 2){

width > 500 ?   mySlide.style.backgroundImage = "url(images/image-product-2.jpg)"

:
    mobileSlide.style.backgroundImage = "url(images/image-product-2.jpg)";
  }else if(count == 3){

width > 500 ?   mySlide.style.backgroundImage = "url(images/image-product-3.jpg)"

:
    mobileSlide.style.backgroundImage = "url(images/image-product-3.jpg)";

  }else if(count == 4){
width > 500 ? mySlide.style.backgroundImage = "url(images/image-product-4.jpg)"

:
    mobileSlide.style.backgroundImage = "url(images/image-product-4.jpg)";
  }else if(count > 4){
    return;
  }else{
    console.log("error");
  }
}

function slideN(){

count--
  let width = window.innerWidth;

  let mobileSlide = document.querySelector(".showcase");

  let mySlide = document.querySelector(".model");

  if(count == 4){

  width > 500 ?  mySlide.style.backgroundImage = "url(images/image-product-4.jpg)"

  :

    mobileSlide.style.backgroundImage = "url(images/image-product-4.jpg)";


  }else if(count == 3){

    width > 500 ? mySlide.style.backgroundImage = "url(images/image-product-3.jpg)"

    :

    mobileSlide.style.backgroundImage = "url(images/image-product-3.jpg)";


  }else if(count == 2){

    width > 500 ? mySlide.style.backgroundImage = "url(images/image-product-2.jpg)"

   :

    mobileSlide.style.backgroundImage = "url(images/image-product-2.jpg)";


  }else if(count == 1){

    width > 500 ? mySlide.style.backgroundImage = "url(images/image-product-1.jpg)"

    :

    mobileSlide.style.backgroundImage = "url(images/image-product-1.jpg)";


  }else if(count == 0 || count < 0){

   return;

 }else{

   console.log("error");
 }

}

function createLine(){

  let underLine = document.createElement("hr");

  links.forEach( link =>{

    link.addEventListener("click", (myLink) => {

      let myIndex = myLink.target.id;


      if(myIndex == 1){


   underLine.classList.remove("line5");

   underLine.classList.remove("line4");

   underLine.classList.remove("line3");

   underLine.classList.remove("line2");

    underLine.classList.add("line1");

   document.querySelector(".titlebar").append(underLine);

   }else if(myIndex == 2){

     underLine.classList.remove("line5");

     underLine.classList.remove("line4");

     underLine.classList.remove("line3");

     underLine.classList.remove("line1");

     underLine.classList.add("line2");

    document.querySelector(".titlebar").append(underLine);



  }else if(myIndex == 3){

    underLine.classList.remove("line5");

    underLine.classList.remove("line4");

    underLine.classList.remove("line2");

    underLine.classList.remove("line1");

    underLine.classList.add("line3");

   document.querySelector(".titlebar").append(underLine);

 }else if(myIndex == 4){

    underLine.classList.remove("line5");

    underLine.classList.remove("line3");

    underLine.classList.remove("line2");

    underLine.classList.remove("line1");

   underLine.classList.add("line4");

  document.querySelector(".titlebar").append(underLine);


}else if(myIndex == 5){

  underLine.classList.remove("line4");

  underLine.classList.remove("line3");

  underLine.classList.remove("line2");

  underLine.classList.remove("line1");

  underLine.classList.add("line5");

  document.querySelector(".titlebar").append(underLine);



}else{

  console.log("error");
}

console.log(myIndex);

    })
  })

}

function mobileReload(){

  location.reload();
}

function mobileSearch(){

  let back = document.createElement("div");

  back.classList.add("mobileBack");

  document.querySelector("body").append(back);

  document.querySelector(".option").classList.remove("option");

  document.querySelector(".mobile").classList.add("optionM");

}
