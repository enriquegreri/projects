var frutas = [
    "Manzana",
    "Plátano",
    "Cereza",
    "Fresa"
];

var masFrutas = frutas.push("Uvas");
var ultimo = frutas.pop("Uvas");
var nuevaLongitud = frutas.unshift("Uvas");
var borrarFruta = frutas.shift("Uvas");
var posicion = frutas.indexOf("Cereza");


console.log(frutas);

console.log(frutas.length);

console.log(frutas[0]);

console.log(posicion);

console.log(frutas[posicion])

