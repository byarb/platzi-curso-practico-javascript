
// const precioOriginal = 100;
// const descuento = 15;
// const porcentajePreciocondescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePreciocondescuento) / 100;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePreciocondescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePreciocondescuento) / 100;
    return precioConDescuento;
}
// console.log ({
//     precioOriginal,
//     descuento,
//     porcentajePreciocondescuento,
//     precioConDescuento,
// })
function calcular() {
    const inputprice = document.getElementById("inputprecio");
    const priceValue = inputprice.value;


    const inputdiscount = document.getElementById("inputDescuento");
    const discountValue = inputdiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById(id="resultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento
    
}