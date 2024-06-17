let url = 'https://fakestoreapi.com/products/category/jewelery' ;
fetch (url) 
.then (function(response) {
    return response.json();
})
.then (function (data){})
.catch (function (error) {
    console.log ("El error es" + error);
})

