


const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock

}

let producto1 = new Producto ("intel celeron", 200000, 5)
let producto2 = new Producto ("intel i3", 200000, 5)
let producto3 = new Producto ("intel i5", 300000, 5)
let producto4 = new Producto ("intel i7", 400000, 5)
let producto5 = new Producto ("intel i9", 500000, 5)

let lista = [producto1,producto2,producto3,producto4,producto5]
//usar la funcion ingresando a la consola y poner FiltrarProductos()
function FiltrarProductos(){
    let palabraClave = prompt("¿Que modelo de Intel buscas?").trim().toUpperCase()
    let resultado = lista.filter((producto)=>producto.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("No pudimos encontrar lo que buscas" + palabraClave)
    }

}
//usar la funcion ingresando a la consola y poner agregarProductos()
function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto").trim()
    let precio = parseFloat(prompt("Ingresa el precio del producto"))
    let stock = parseInt(prompt("Ingresa el stock"))

    if(isNaN(precio)|| nombre==="" || isNaN(stock)) {

        alert("Los datos ingresados son incorrectos")
        return;
    }

    let producto = new Producto(nombre,precio,stock)
    lista.push(producto)
    console.table(lista)
}