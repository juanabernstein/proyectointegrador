fetch ('https://fakestoreapi.com/products/category/jewelery')
.then (function(res){
return res.json()
})
.then (function(data){
    console.log(data)
})

let info = data
let section = document.querySelector(".categoriaAccesorios")
let accesorios = []
let tituloaccesorios = document.querySelector(".titulocategory")

for(let i=0; i<info.length; i++ ) {
    console.log (info[i]);
    accesorios += `<article class="bolsodecuero">
    <h3>${info[i].title}</h3>
    <div class="containerImg">
        <a href="producto.html?id=${info[i].id}">
            <img src="${info[i].image}" alt="">
        </a>
    </div>
    <p> ${info[i].description}</p>
    <h4 class="precio"> ${info[i].price}</h4>
    <a class="buttonVerMas" href="producto.html?id=${info[i].id}">Ver mas</a>
</article>`;
}

prod.innerHTML = accesorios ; 

