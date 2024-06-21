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

})
.catch (function (error) {
    console.log ("El error es" + error);
})


let url2 = "https://fakestoreapi.com/products/category/women's%20clothing"
fetch (url2) 
.then (function(resp) {
    return resp.json();
})
.then (function (data){
    let productos = document.querySelector(".containerSection2") ;
    let ropaw = '';
    let informacion = data;
    

    for(let i=0; i<informacion.length; i++ ) {
        console.log (informacion[i]);
        ropaw += `<article class="bolsodecuero">
        <h3>${informacion[i].title}</h3>
        <div class="containerImg">
            <a href="producto.html?id=${informacion[i].id}">
                <img src="${informacion[i].image}" alt="">
            </a>
        </div>
        <p> ${informacion[i].description}</p>
        <h4 class="precio"> ${informacion[i].price}</h4>
        <a class="buttonVerMas" href="producto.html?id=${informacion[i].id}">Ver mas</a>
    </article>`;
    }

    productos.innerHTML = ropaw ; 

})
