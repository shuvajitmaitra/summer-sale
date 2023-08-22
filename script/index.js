// Card click function-------------------------------------------
function cardClicked(itemsPrice, itemList) {
    const itemPrice = parseFloat(document.getElementById(itemsPrice).innerText);
    const previousPrice = parseFloat(document.getElementById('total-price').innerText);
    const purchaseBtnEnable = document.getElementById('purchase-btn');
    const couponBtnEnable = document.getElementById('coupon-btn');


    const newPrice = (previousPrice + itemPrice).toFixed(2);
    document.getElementById('total-price').innerText = newPrice;
    purchaseBtnEnable.removeAttribute("disabled");  //purchase button enable-----------
    if (newPrice >= 200) {
        couponBtnEnable.removeAttribute("disabled");//coupon button enable-----------
    }

    document.getElementById('final-price').innerText = newPrice;

    // price list entry function call
    purchaseListEntry(itemList);

}


// Coupon button click functions--------------------------------

function couponBtnClicked(code) {
    const totalAmount = parseFloat(document.getElementById('final-price').innerText);
    const previousPrice = document.getElementById('total-price').innerText;
    const inputField = document.getElementById('coupon-field').value;

    const discountedAmount = (totalAmount * 0.2).toFixed(2);

    if (inputField.includes(code)) {

        document.getElementById('discount-amount').innerText = discountedAmount;
        document.getElementById('final-price').innerText = (previousPrice - discountedAmount).toFixed(2);
        document.getElementById('coupon-field').value = '';
    }
    else {
        alert('Please, Provide correct Coupon Code to get 20% OFF');
    }
    document.getElementById('coupon-field').value = '';


}
// Purchase List Entry Function------------------------------------------
function purchaseListEntry(itemLog) {
    const itemList = document.getElementById('item-entry');
    const p = document.createElement('p');
    const count = itemList.childElementCount;
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${itemLog}`;

    itemList.appendChild(p);
}