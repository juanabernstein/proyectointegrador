let capturoForm = document.querySelector ('#registerForm'); 
let email = document.querySelector ('#registerEmail'); 
let password = document.querySelector ('#registerPassword'); 
let confirm = document.querySelector ('#confirmPassword'); 
let checkbox = document.querySelector ('#checkbox'); 

let completarMail = document.querySelector ('#emailError')
let completarPass =  document.querySelector ('#passwordError')



capturoForm.addEventListener ('submit', function(event){
    event.preventDefault();

    if (email.value === "") {
        completarMail.innerText = 'Por Favor complete este campo'
    }

    else if (password.value === "") {
        completarPass.innerText = 'Por Favor complete este campo'
  
    } 

    else if (password.value.length <6) {
        completarPass.innerText = 'Debe ingresar al menos seis caracteres'
    }

    else {
        this.submit () 
        
    }



})


















//capturoForm.addEventListener ('submit', function (event){
   // event.preventDefault ;

   // if (email.value === "") {
      //  completarMail.innerText = 'Por Favor complete este campo'

   // }
    

   // else if (password.value === "") {
      //  completarPass.innerText = 'Por Favor complete este campo'


   // }

   // else if (password.value.length <6) {
    //    completarPass.innerText = 'Debe ingresar al menos seis caracteres'
   // }





//})






//Validar el campo email. Si está vacío mostrar al usuario el texto en pantalla (no con alert) "Por favor complete el campo" y el formulario no se enviará.
//Validar el campo contraseña. Si está vacío mostrar al usuario el texto en pantalla (no con alert) "Por favor complete el campo" y el formulario no se enviará.
//Validar que la contraseña tenga al menos una longitud de 6 caracteres. Si tiene menos de 6 caracteres mostrar al usuario el texto en pantalla (no con alert) "Debe ingresar al menos 6 caracteres" y el formulario no se enviará.
//Validar que coincidan los datos del campo contraseña y de repetir contraseña. En caso de no coincidir mostrar al usuario el texto en pantalla (no con alert) "Las contraseñas no coinciden" y el formulario no se enviará.
//Si el formulario cumple con las validaciones deberá redirigir al formulario de login.
