let logform = document.querySelector ('#loginForm') ; 
let pass = document.querySelector ('#loginPassword') ;  
let email= document.querySelector ('#loginEmail')

form.addEventListener ('submit', function(e){
    e.preventDefault();
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
        localStorage.setItem ('loginuser', 'user', JSON.stringify(useremail)) ;
        window.location.href = './index.html';
        console.log ("usuario log", useremail)
    }

  

})








