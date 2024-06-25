let datosUserLogout = localStorage.getItem ('user')

let datosParseUserLogout = JSON.parse (datosUserLogout)
console.log ("parse user", datosParseUser)

if (datosParseUserLogout){
    fetch ('https://fakestoreapi.com/products/categories')
    .then (function(res){
        return res.json()
    })
    .then (function(data){
        console.log("data", data)
        let headerHome = document.querySelector ('.listaheader')
    })
    
}

headerHome.innerHTML =

`<div><h2>"bienvenido ${datosParseUserLogout}"</h2></div>
<div class = listaHeader>
<li<a href="./index.html?">Home</a></li>
<li<a href="./categoria.html?categoria=${arrayCategoria.category ="jewelry"}>Accesorios</a></li>
<li<a href="./categoria.html?categoria=${arrayCategoria.category ="electronica"}>Electronica</a></li>
<li<a href="./categoria.html?categoria=${arrayCategoria.category ="men's clothing"}>Hombre</a></li>
<li<a href="./categoria.html?categoria=${arrayCategoria.category ="women's clothing"}>Mujer</a></li>
<li<a href="./cart.html?">Carrito</a></li>
<li id="logout"<a href="">Logout</a></li>

</div>`

    document.getElementById('logout').addEventListener('click', 
    function (event){
        event.preventDefault();
        localStorage.clear();
        alert("Cerraste sesion");
        window.location.href = './index.html'
        console.log(datosParseUserLogout)
     .catch(function (e){
            console.log("error1", e)
        })
    });