function updateItemPrice(id) {
    // console.log(id)
    var i = id.charAt(4)
    var itemtotal = parseFloat(document.getElementById("item" + i + "price").innerHTML) * parseInt(document
        .getElementById("item" + i + "qty").value);
    document.getElementById("item" + i + "total").innerHTML = itemtotal;
    updateTotal();
}

function updateTotal() {
    var total = 0;
    var discount = 0;
    var i = 1;
    while (document.getElementById("item" + i + "total") != null) {
        total += parseFloat(document.getElementById("item" + i + "total").innerHTML)
        i++;
    }
    document.getElementById("total").innerHTML = "&#x20b9; " + total;

    if (total < 500) {
        document.getElementById("delivery-fee").innerHTML = "&#x20b9; " + (total * 0.05);
        document.getElementById("discount").innerHTML = "&#x20b9; " + 0;
    }
    if (total > 500) {
        discount = total * 0.05
        document.getElementById("discount").innerHTML = "&#x20b9; " + discount;
        document.getElementById("delivery-fee").innerHTML = "&#x20b9; " + 0;
    }
    document.getElementById("grandTotal").innerHTML = "&#x20b9; " + (total - discount);
}