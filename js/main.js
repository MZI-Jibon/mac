// 
// 
//extra memory cost
// 
// 
const extraMwmory = document.getElementById('extra-memory');
//for 8 gb
const eightGb = document.getElementById('memory-8-gb');
eightGb.addEventListener('click', function(){
    extraMwmory.innerText = '0000';
    updateTotal();
})
//for 16 gb
const sixteenGb = document.getElementById('memory-16-gb');

sixteenGb.addEventListener('click', function(){
    extraMwmory.innerText = '200';
    updateTotal();
})

// 
// 
//extra ssd cost
// 
// 
const extrassd = document.getElementById('extra-ssd');

//for 256 gb
const ssd256 = document.getElementById('ssd-256-gb');

ssd256.addEventListener('click',function(){
    extrassd.innerText = '0000';
    updateTotal();
})

//for 512 gb
const ssd512 = document.getElementById('ssd-512-gb');

ssd512.addEventListener('click',function(){
    extrassd.innerText = '200';
    updateTotal();
})
//for 1 tb
const ssd1Tb = document.getElementById('ssd-1-tb');

ssd1Tb.addEventListener('click',function(){
    extrassd.innerText = '300';
    updateTotal();
})

// 
// 
// delivery charge
// 
// 
const deliveryCharge = document.getElementById('delivery-charge');

//for free delivery
const free = document.getElementById('free');

free.addEventListener('click', function(){
    deliveryCharge.innerText = '0000';
    updateTotal();
})


//for erpress dleivery
const express = document.getElementById('express');

express.addEventListener('click', function(){
    deliveryCharge.innerText = '20';
    updateTotal();
})

// 
// 
// total price
// 
// 

const total = document.getElementById('total');
const total2 = document.getElementById('total2');
// console.log(total);
// update total
function updateTotal(){
    const deliveryCost = parseFloat (deliveryCharge.innerText) ;
    const memoryCost =  parseFloat(extraMwmory.innerText);
    const ssdCost =  parseFloat(extrassd.innerText);
    const  grandTotal = 1299 + memoryCost + ssdCost + deliveryCost;
   
    total.innerText = grandTotal;
    total2.innerText = grandTotal;

}