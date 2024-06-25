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
        let
    })
}