let formCapturado= document.querySelector ('#recoverForm')
let confirmando= document.querySelector ('#confirm')
let error= document.querySelector ('#recoverError')
let checkbox = document.querySelector ('#tickeado')
let acepto = document.querySelector ('#aceptar')
let chequeo= document.querySelector ('#check')
let recibida = document.querySelector ('#recibida')
let login = document.querySelector ('#irLogin')

login.style.display = "none"

formCapturado.addEventListener ('submit', function(event){
    event.preventDefault ();

    if (confirmando.value === '') {
        error.innerText= 'Por favor escriba su mail'
    } 

    else if (!chequeo.checked){
        acepto.innerHTML = 'Por favor acepte el campo "quiero recuperar mi contraseña"'
    }

    else {
       this.submit();
       recibida.innerText = 'Recibiras un mail con las instrucciones para recuperar tu contraseña' ;
       login.style.display = "block";
    } 
    
})


