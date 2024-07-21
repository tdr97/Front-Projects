if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){

window.addEventListener('scroll' , () => {
    document.querySelector('.header').classList.toggle('scroll' , window.scrollY > 250)
    document.querySelector('.header').style.width='100vw'
   
});

// let main = document.getElementsByClassName("main"); //main img
// let sm = document.getElementsByClassName("sm-img"); // sub imgs
// // let sm = document.querySelectorAll("sm-img");
//     for(i=0;i<sm.length;i++)
//     {   currentSm=sm[i];
//         curentSm.addEventListener("click", (event)=>{
//             main.src = event.target.src;
//         })
    
//     }


// sm[0].onclick = function(){
//     main.src = sm[0].src;
// }
// sm[1].onclick = function(){
//     main.src = sm[1].src;
// }
// sm[2].onclick = function(){
//     main.src = sm[2].src;
// }
// sm[3].onclick = function(){
//     main.src = sm[3].src;
// }

let cart = document.getElementById("headCart")
let cartWindow = document.querySelector(".cart-window")
cart.addEventListener('click' , ()=>{
    let dis = cartWindow.style.display
     
    // dis='none'? cartWindow.style.display='flex' : cartWindow.style.display='none'
    // dis='flex'? cartWindow.style.display='none' : cartWindow.style.display='flex'
    switch (dis) {
        case 'none':
            cartWindow.style.display='flex'
            break;
        case 'flex':
            cartWindow.style.display='none'
            break

    }

 })

 function proRemover(){
    let xBtn =document.getElementsByClassName('pro-remove')

 for(let i=0; i < xBtn.length; i++){
    let btn= xBtn[i]
    btn.addEventListener('click',(event)=>{
       btnClicked= event.target
       btnClicked.parentElement.remove()
      
       let cartPros = document.getElementsByClassName('cart-pro')
       let cartWindow = document.querySelector(".cart-window")
       cartPros.length == 0? cartWindow.style.display='none' : cartWindow.style.display='flex'
   }) 
 }
 }

 proRemover();

 function cartPros(){
    let cartPros = document.getElementsByClassName('cart-pro')
    for(let i=0; i<cartPros.length;i++){
        let pro = cartPros[i]
  
    
   // for some reason using input.value for quantity didn't work
    let plusBtn= pro.querySelector('.plus')
    let minusBtn = pro.querySelector('.minus')
        
  
      plusBtn.addEventListener('click',(event)=>{
      let price = parseFloat(event.target.parentElement.parentElement.querySelector('.price').innerHTML)
      let totalPrice = event.target.parentElement.querySelector('.totalPrice')
  
  
      let quantity = event.target.parentElement.querySelector('.quantity')
      let num= Number(quantity.innerText)+1
      quantity.innerHTML=num
      totalPrice.innerHTML= price*num +'$'  
      num>1? totalPrice.style.display='flex': totalPrice.style.display='none'
      
   })
  
  
  
      
      minusBtn.addEventListener('click',(event)=>{
      // let price = parseFloat(event.target.parentElement.parentElement.querySelector('.price').innerText)
      let totalPrice = event.target.parentElement.querySelector('.totalPrice')
      let price = parseFloat(event.target.parentElement.parentElement.querySelector('.price').innerHTML)
      let quantity = event.target.parentElement.querySelector('.quantity')
      totalPrice.style.display='flex'
       let num = Number(quantity.innerHTML)
      
        quantity.innerHTML = num>1 ? num-1 : num=1;
        num>1? totalPrice.style.display='flex': totalPrice.style.display='none'
          totalPrice.innerHTML = (quantity.innerHTML) * price +'$'
          
   })
  
  
   
  
  
  
   }

}
cartPros();

 let cartIcon = document.getElementsByClassName('cart')



 for( let i=0; i<cartIcon.length ; i++){
    const icon = cartIcon[i]

//   icon.addEventListener('click' ,(event)=>{
    
    
//     const newPro= document.createElement('div')
//     const cartItem = document.createElement('div')
//     let img = event.target.parentElement.parentElement.querySelector('.pro-img').src;
//     let title = event.target.parentElement.parentElement.querySelector('.pro-title').innerText;
//     let price = event.target.parentElement.parentElement.querySelector('.pro-price').innerText;
//     let cartPage= document.getElementsByClassNames('cart-items');

  
//     newPro.innerHTML=` <div class="pro cart-pro"><h6 class="title">${title}</h6>
//     <img src=${img}>
//     <i class="pro-remove">X</i>
//     <p class="price">${price}</p>
//     <div class="pro-num-container">
//         <button class="minus" >-</button>
//         <p class="quantity"> 1 </p>
//         <button class="plus" >+</button>
//         <div class="totalPrice"></div>
//     </div> 
//  </div>`
    
//     document.querySelector('.cart-window').appendChild(newPro)
//     cartWindow.style.display='flex'
//     proRemover();
//     cartPros();
//   })

 

 

  icon.addEventListener('click' ,(event)=>{
    
    

    let img = event.target.parentElement.parentElement.querySelector('.pro-img').src;
    let title = event.target.parentElement.parentElement.querySelector('.pro-title').innerText;
    let price = event.target.parentElement.parentElement.querySelector('.pro-price').innerText;

    let cartWindow = document.querySelector('.cart-window');
    
    console.log(cartWindow)

    cartWindow.innerHTML +=` <div class="pro cart-pro"><h6 class="title">${title}</h6>
    <img src=${img}>
    <i class="pro-remove">X</i>
    <p class="price">${price}</p>
    <div class="pro-num-container">
        <button class="minus" >-</button>
        <p class="quantity"> 1 </p>
        <button class="plus" >+</button>
        <div class="totalPrice"></div>
    </div> 
 </div>`
 
    
//  cartPage += ` <div class="cart-item">
//  <img src=${img} alt="">
//  <h5> class="title">${title}</h5>
//   <input type="number" name="" id="" value="1">
// <p class="price">${price}">
// </p>
// <button class="delete">
//     <i class="fa fa-trash" aria-hidden="true"></i>
// </button>
// </div>`
    cartWindow.style.display='flex'
    proRemover();
    cartPros();
  })



 }
let prosImg = document.getElementsByClassName('pro-img');
// let proDoc= window.location.assign('http://127.0.0.1:5500/product.html')
// let proDoc= window.location.open('http://127.0.0.1:5500/product.html')

    for(let i = 0 ; i<prosImg.length; i++){
        let img = prosImg[i];
        img.addEventListener('click',(event) =>{

            let img = event.target.src;
            let price = parseFloat(event.target.parentElement.querySelector('.pro-price').innerText)
            let title = event.target.parentElement.querySelector('.pro-title').innerText
            
            
            let proImg = document.querySelector('.main')
            console.log(proImg.innerHTMLmg.innerHTML)
            
        })
    }

    //auto scroll on mouseover


//     let prosContainer = document.querySelector('.new-pros')
//     prosContainer.addEventListener('mouseover',() =>{
//         let width = prosContainer.scrollWidth
//         self.setInterval(()=>{
//         if(prosContainer.scrollLeft <width){
//             prosContainer.scrollLeft += 2
//         }
            
       
     
//       } , 20) 
   
// })

    // let prosContainer = document.querySelector('.new-pros');
    // let scrollInterval = null;
    // let scrollSpeed = 2;
    // let maxScrollSpeed = scrollSpeed * 15;

    // prosContainer.addEventListener('mousemove', (event)=> {
    //     const rect = prosContainer.getBoundingClientRect();
    //     const mouseX = event.clientX - rect.left;
    //     const containerCenterX = rect.width / 2;
    //     let distanceFromCenter = Math.abs(mouseX - containerCenterX);

    //     self.setInterval(()=>{ 
    //         if (distanceFromCenter > 50 && mouseX < containerCenterX && scrollSpeed<maxScrollSpeed) {
    //             prosContainer.scrollLeft = scrollSpeed;
    //             scrollSpeed += 2;
    //         }  
    //          if (distanceFromCenter > 50 && mouseX > containerCenterX && scrollSpeed<maxScrollSpeed) {
    //             prosContainer.scrollRight = scrollSpeed
    //             scrollSpeed += 2;
    //         }
    //         else{ 
    //             scrollSpeed=0
    //         }
    
            
    //      } , 20)

    // });

    // prosContainer.addEventListener('mouseout',()=>{
    //     clearInterval(scrollInterval);
    //     scrollSpeed = 0;
    // });

  let prosContainer = document.querySelector('.new-pros');
let scrollInterval = null;
let scrollSpeed = 2; 
let maxScrollSpeed = scrollSpeed * 8; 

prosContainer.addEventListener('mouseover', (event) => {
    if (scrollInterval) {
        clearInterval(scrollInterval);
    }

    const rect = prosContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const containerCenterX = rect.width / 2;
    let distanceFromCenter = Math.abs(mouseX - containerCenterX);

    if (distanceFromCenter > (rect.width/8) ){
        scrollInterval = setInterval(() => {
            if (mouseX < containerCenterX && scrollSpeed < maxScrollSpeed) {
                prosContainer.scrollLeft -= scrollSpeed;
                scrollSpeed += 2; 
            } else if (mouseX > containerCenterX && scrollSpeed < maxScrollSpeed) {
                prosContainer.scrollLeft += scrollSpeed;
                scrollSpeed += 2;
            } else {
                scrollSpeed = 0;
            }
        }, 5); 
    }
});

prosContainer.addEventListener('mouseout', () => {
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
    scrollSpeed = 0;
});




     console.log(document.querySelector('.pro-l'))
     console.log(document.querySelector('.pro-title'))


}
