var product_total_amt = document.getElementById('product_total_amt');
var total_cart = document.getElementById('total_cart');
var shipping_charge = document.getElementById('shipping_charge');
var discountCode = document.getElementById('discount_code1');

const decreaseNumber = (incdec,itemprice) =>{
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice); 

    if(itemval.value <= 0){
        itemval.value = 0;
        alert('negative quantity not allowed')
    }else{
        itemval.value = parseInt(itemval.value) -1;
        itemval.style.background = 'white';
        itemval.style.color = 'black';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) -15;
        product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) - 15;

        total_cart.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
const increaseNumber = (incdec,itemprice) =>{
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    if(itemval.value >= 5){
        itemval.value = 5;
        alert('max 5 allowed');
        itemval.style.background = 'red';
        itemval.style.color = 'white';
    }else{
        itemval.value = parseInt(itemval.value) +1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) +15;
        product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + 15;
        total_cart.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

const discount_code = () =>{
    let totalamtcurr = parseInt(total_cart.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if(discountCode.value === 'tanmay'){
        let newtotalamt =totalamtcurr - 15;
        total_cart.innerHTML = newtotalamt;
        error_trw.innerHTML = "Hurray! Code is Valid";
    }else{
        error_trw.innerHTML = "Try Again! Valid Code";
    }
}