let listaCarrito= []
let section = document.querySelector(".elcarrito")
if (localStorage.getItem ('listaCarrito') && localStorage.getItem ('listaCarrito') !=null) {
    listaCarrito= JSON.parse(localStorage.getItem ('listaCarrito'))
    console.log (listaCarrito)
    for (let i=0; i< listaCarrito.length; i++) {
        let urlDetalleProducto = `https://fakestoreapi.com/products/${listaCarrito[i]}`
        fetch (urlDetalleProducto)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
          
    
            let articleProducto = `<div class="Remera">
            <h3> ${data.title} </h3>
            <img src="${data.image}" alt="${data.title}">
            <p> Descripcion: ${data.description}</p>
            <h4 class="precio"> ${data.price} </h4> 
            </div>`
    
        section.innerHTML += articleProducto 
    })
    } 
    let button= document.querySelector ('#finalizarCompra')
    button.addEventListener ('click', function(){
    localStorage.removeItem ('listaCarrito') 
    alert ('Gracias por su compra')
    window.location.href= './index.html'
    })
    } else {
    section.innerHTML+= '<h2> Su carrito esta vacío </h2>'
    }
    
    
