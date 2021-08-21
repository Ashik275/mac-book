

document.getElementById('add-16GBmemory').addEventListener('click', function () {
    const memoryText = document.getElementById('memory-cost');
    memoryText.innerText = 180;
    const memoryCost = memoryText.innerText;

    // total price 
    const totalPrice = document.getElementById('total-price');
    const newTotalPrice = parseFloat(1299) + parseFloat(180);
    totalPrice.innerText = newTotalPrice;

});
document.getElementById('add-8GBmemory').addEventListener('click', function () {
    const memoryText = document.getElementById('memory-cost');
    memoryText.innerText = 0;
    const memoryCost = memoryText.innerText;
    // total price 

    const totalPrice = document.getElementById('total-price');
    const newTotalPrice1 = parseFloat(newTotalPrice) - parseFloat(180);
    totalPrice.innerText = newTotalPrice1;

});


// storage part 
document.getElementById('storage-btn1').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    const storageText = storageCost.innerText;
    console.log(storageText);
    // total price 
    const totalPrice = document.getElementById('total-price');


});
document.getElementById('storage-btn2').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
    const storageText = storageCost.innerText;
    console.log(storageText);
    // total price 
    const totalPrice = document.getElementById('total-price');
    const newTotalPriceStorage = parseFloat(1299) + parseFloat(storageText);
    totalPrice.innerText = newTotalPriceStorage;


});
document.getElementById('storage-btn3').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
    const storageText = storageCost.innerText;
    console.log(storageText);
    // total price 
    const totalPrice = document.getElementById('total-price');
    const newTotalPriceStorage = parseFloat(newTotalPrice) + parseFloat(180) - parseFloat(100);
    totalPrice.innerText = newTotalPriceStorage;



});
// delivery part 
document.getElementById('delivery-btn1').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
    const deliveryText = deliveryCost.innerText;
    console.log(deliveryText);
});
document.getElementById('delivery-btn2').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
    const deliveryText = deliveryCost.innerText;
    console.log(deliveryText);
    // total price
    const totalPrice = document.getElementById('total-price');
    const newTotalPriceStorage = parseFloat(newTotalPrice) + parseFloat(180) - parseFloat(100);
    totalPrice.innerText = newTotalPriceStorage;
});
