let totalPrice=0;
let seatCount=0;
let seatLeft=40;
const buttons= document.querySelectorAll('#btn');
for( let btn of buttons){
    btn.addEventListener('click', function(){
      if(seatCount<4){
        btn.classList.add('bg-[#1DD100]', 'text-white');
      const seat=btn.innerText;
      const seatText= document.createElement("p");
      seatText.innerText=seat;
      const seatClass = document.createElement('p');
      seatClass.innerText='Economy';
      const seatPrice = document.createElement('p');
      seatPrice.innerText='550';
      // appendChild
      const seatContainer=document.getElementById('seat-container');
      seatContainer.appendChild(seatText);
      const classContainer=document.getElementById('class-container');
      classContainer.appendChild(seatClass);
      const priceContainer=document.getElementById('price-container');
      priceContainer.appendChild(seatPrice);
    
      // totalPrice Count
      const perSeatPrice= parseFloat(seatPrice.innerText);
      totalPrice+=perSeatPrice;
      const totalPriceContainer=document.getElementById('total-price-container');
      totalPriceContainer.innerText=totalPrice;
    
      // seat count+
      seatCount+=1;
      const seatIncrease=document.getElementById('seat');
      seatIncrease.innerText=seatCount;
    
      // seat count-
      seatLeft=seatLeft-1;
      const seatDecrease=document.getElementById('seat-left');
      seatDecrease.innerText=seatLeft;
 }
})
      
}


// coupon button
const couponButton= document.getElementById('apply-button')