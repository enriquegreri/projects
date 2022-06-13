var articulos = [
    {
        nombre: "Bici",
        costo: 3000
    },
    {
        nombre: "TV",
        costo: 2500
    },
    {
        nombre: "Libro",
        costo: 320
    },
    {
        nombre: "Celular",
        costo: 10000
    },
    {
        nombre: "Laptop",
        costo: 20000
    },
    {
        nombre: "Teclado",
        costo: 500
    },
    {
        nombre: "Audifonos",
        costo: 1700
    },
];

var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo);

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

var articulosBaratos = articulos.some(function(articulo) {
    return articulos.costo <= 700;
});

console.log(articulosBaratos);