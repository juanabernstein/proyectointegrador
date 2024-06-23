let logform = document.querySelector ('#loginForm') ; 
let email = document.querySelector ('#loginEmail') ; 
let pass = document.querySelector ('#loginPassword') ;  

logform.addEventListener ('submit', function(event){
    event.preventDefault();

    if (email.value === "") {
        alert('Porfavor complete el campo email!');
        return;
    }

    else if (pass.value === "") {
    alert('Por favor complete el campo contraseña');
    return;
    } 

    else if (pass.value.length <6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    else {
        this.submit () ;
        localStorage.setItem ('loginEmail', 'email') ;
        window.location.href = './index.html';
      
    
    }

  


})








