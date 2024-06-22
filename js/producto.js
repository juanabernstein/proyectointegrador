let agarroProducto = location.search;
let idProducto = new URLSearchParams(agarroProducto);  
let id = idProducto.get ("id");

let urlDetalleProducto = `https://fakestoreapi.com/products/${id}`
fetch(urlDetalleProducto)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let section = document.querySelector(".detallesdelproducto")

    let articleProducto = `<article class="bolsodecuero">
    <h3>${data.title}</h3>
    <div class="containerImg">
    <a href="producto.html?id=${data.id}">
            <img src="${data.image}" alt="imagen producto">
        </a>
    </div>
    <p> ${data.description}</p>
    <h4 class="precio"> ${data.price}</h4>
    <a href="detalleCategoria.html?category=${data.category}"> ${data.category}  </a>
    <button id='carrito'> <a href=cart.html?${data.id}> Agregar al carrito </a> </button>
</article>`

section.innerHTML = articleProducto

let carrito= document.querySelector ('#carrito') 
carrito.addEventListener ('click', function(){
    let listaCarrito= []
    if (localStorage.getItem ('listaCarrito') && localStorage.getItem ('listaCarrito') !=null) {
       let listaCarrito= JSON.parse(localStorage.getItem ('listaCarrito') 
    )
    } 
    listaCarrito.push(id)
    localStorage.setItem ('listaCarrito', JSON.stringify(listaCarrito))
    console.log (localStorage)
    
    
})
})
  

