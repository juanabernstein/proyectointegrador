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
    <a href="cart.html?> Agregar al carrito </a>
</article>`

section.innerHTML = articleProducto

})

