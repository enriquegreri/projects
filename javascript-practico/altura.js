function alturaTriangulo(lado1,lado2) {
    var lado1 = Math.pow((lado1/2),2);
    var lado2 = Math.pow(lado2,2);
    return Math.sqrt((lado2, lado1));
}

function calcularAltura() {
    var input = document.getElementById("InputLado1");
    var input2 = document.getElementById("InputLado2");
    var input3 = document.getElementById("InputLado3");
    var array = [input.value, input2.value, input3.value];
    var altura = alturaTriangulo(Math.max.apply(Math, array),Math.min.apply(Math, array));
    alert(altura);
};