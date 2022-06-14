
// Función calcular Precio Con Descuento
function calcularPrecioConDescuento(precio, descuento) {
    return ( precio * ( 100 - descuento ) ) / 100
};

function onCLickButtonPriceDiscount() {
    var inputPrice = document.getElementById("InputPrice");
    var inputDiscount = document.getElementById("InputDiscount");
    var priceValue = inputPrice.value;
    var discountValue = inputDiscount.value;

    var precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
    var resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento
}