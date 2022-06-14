// Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
};
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
};
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");


console.groupEnd();

// Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm");

// const alturaTringulo = 5.5;
//     console.log(
//     "La altura del triángulo es de: "
//     + alturaTringulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    var diametro = diametroCirculo(radio);
    return diametro * PI;
};


// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
};


console.groupEnd();


//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTringulo() {
    var lado1 = document.getElementById("InputTrianguloLado1");
    var lado2 = document.getElementById("InputTrianguloLado2");
    var base = document.getElementById("InputTrianguloBase");
    var lado1Value = Number(lado1.value);
    var lado2Value = Number(lado2.value);
    var baseValue = Number(base.value);
    var perimetro = perimetroTriangulo(lado1Value, lado2Value, baseValue);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    var altura = document.getElementById("InputTrianguloAltura");
    var base = document.getElementById("InputTrianguloBase");
    var alturaValue = Number(altura.value);
    var baseValue = Number(base.value);
    var area = areaTriangulo(baseValue, alturaValue);
    console.log(area);
    alert(area);
}

function calcularPerimetroCirculo() {
    var input = document.getElementById("InputCirculo");
    var radio = input.value;
    var perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    var input = document.getElementById("InputCirculo");
    var radio = input.value;
    var area = areaCirculo(radio);
    alert(area);
}