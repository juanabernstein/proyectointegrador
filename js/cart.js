let listaCarrito= []
let section = document.querySelector(".elcarrito")
if (localStorage.getItem ('listaCarrito') && localStorage.getItem ('listaCarrito') !=null) {
    listaCarrito= JSON.parse(localStorage.getItem ('listaCarrito'))
    console.log (listaCarrito)
}