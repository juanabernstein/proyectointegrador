let url3 = "https://fakestoreapi.com/products/category/men's%20clothing"
fetch (url3)
.then (function(respponse){
    return respponse.json();
})
.then (function(data){
    let product = document.querySelector (".containerSection3");
    let ropaM = '';
    let inform = data;

    for (let i=0; i<inform.length; i++){
        console.log(inform[i]);
        ropaM += `<article class="bolsodecuero">
        <h3>${inform[i].title}</h3>
        <div class="containerImg">
        <a href="producto.html?id=${inform[i].id}">
        <img src=${inform[i].image}" alt="">
        </a>
        </div>
        <p> ${inform[i].description}</p>
        <h3 class="precio"> ${inform[i].price}</h3>
        <a class="buttonVerMas" href="producto.html?id=${inform[i].id}">Ver mas</a>
        </article>`;
    }

    product.innerHTML = ropaM ;
})

.catch (function (error) {
    console.log ("El error es" + error);
})