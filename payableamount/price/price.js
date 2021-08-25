function taxPrice() {

    var price = document.getElementById("price").value,
        percent = document.getElementById("taxperc").value;
    qty = document.getElementById("quantity").value;
    price = parseFloat(price);
    percent = parseFloat(percent);


    var tax = (price / 100) * percent,
        total = (price * ((100 + percent) / 100)) * qty;


    document.getElementById("price").value = tax;
    document.getElementById("totalprice").value = total;
    return false;
}