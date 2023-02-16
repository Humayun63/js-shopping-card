function setElementById(elementId) {
    return document.getElementById(elementId);
}
function getValueFromInnerText(elementId){
    const element = setElementById(elementId);
    const value = parseFloat(element.innerText);
    return value;
}
function totalUpdate() {
    const subTotalElement = setElementById('subtotal');
    const taxElement = setElementById('tax');
    const totalElement = setElementById('total');
    const phonePrice = getValueFromInnerText('phone-price');
    const casePrice = getValueFromInnerText('case-price');
    const subtotal = phonePrice + casePrice;
    const tax = parseFloat((subtotal * 0.1).toFixed(2));
    const total = (tax + subtotal).toFixed(2);
    subTotalElement.innerText = subtotal;
    taxElement.innerText = tax;
    totalElement.innerText = total;
};
function updatePrice(isIncrease, inputId, priceId, priceValue) {
    const input = setElementById(inputId);
    let value = parseInt(input.value);
    const priceElement = setElementById(priceId);
    const price = priceValue;
    if (isIncrease) {
        value++;
    } else {
        value--;
    }
    if (value >= 0) {
        input.value = value;
        const newPrice = value * price;
        priceElement.innerText = newPrice;
    } else {
        input.value = 0;
    }
    totalUpdate();
};

function updatePriceByInput(element, priceId, priceValue){
    let value = parseInt(element.value);
    if(value < 0){
        value = 0;
        element.value = value;
    }
    const price = priceValue;
    setElementById(priceId).innerText = value * price;
    // element.innerText = value * price;
    totalUpdate();
}
function removeItem(elementId, priceId){
    setElementById(elementId).style.display = 'none';
    setElementById(priceId).innerText = 0;
    totalUpdate();
}
// Events
document.getElementById('phone-minus').addEventListener('click', function () {
    updatePrice(false, 'phone-input', 'phone-price', 1219);

})
document.getElementById('phone-input').addEventListener('change', function (event) {
    const targetItem = event.target;
    updatePriceByInput(targetItem, 'phone-price', 1219);
})
document.getElementById('phone-plus').addEventListener('click', function () {
    updatePrice(true, 'phone-input', 'phone-price', 1219);
})
document.getElementById('phone-remove').addEventListener('click', function () {
    removeItem('phone', 'phone-price');
});
document.getElementById('case-minus').addEventListener('click', function () {
    updatePrice(false, 'case-input', 'case-price', 59);
})
document.getElementById('case-input').addEventListener('change', function (event) {
    const targetItem = event.target;
    updatePriceByInput(targetItem, 'case-price', 59);
})
document.getElementById('case-plus').addEventListener('click', function () {
    updatePrice(true, 'case-input', 'case-price', 59);
})
document.getElementById('case-remove').addEventListener('click', function () {
    removeItem('case', 'case-price');

})


