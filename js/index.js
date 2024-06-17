let url = 'https://fakestoreapi.com/products/category/jewelery' ;
fetch (url) 
.then (function(response) {
    return response.json();
})
.then (function (data) {
    let prod = document.querySelector(".containerSection1") ;
    let accesorios = '';
    let info = data;
    
    
    for(let i=0; i<info.length; i++ ) {
        console.log (info[i]);
        accesorios += `<article class="bolsodecuero">
        <h3>${info[i].title}</h3>
        <div class="containerImg">
            <a href="detalleProducto.html?id=${info[i].id}">
                <img src="${info[i].image}" alt="">
            </a>
        </div>
        <p> ${info[i].description}</p>
        <h4 class="precio"> ${info[i].price}</h4>
        <a class="buttonVerMas" href="detalleProducto.html?id=${info[i].id}">Ver mas</a>
    </article>`;
    }

    prod.innerHTML = accesorios ; 

})
.catch (function (error) {
    console.log ("El error es" + error);
})

