window.onload = function(){
    
        console.log("hola")
        //traigo formulario
        let formulario = document.querySelector("form.formulario")
        console.log(formulario);

        //cuando envia el formulario
        formulario.addEventListener("submit", function(e){

            let errores = [];

            let email =  document.getElementById("email")
            let password = document.getElementById("password")
            console.log(email);
            console.log(password);

           
            if(email.value == "") {
                errores.push("Falta completar este campo");
                email.innerHTML += '<span class="text-xs text-red-600">'+ errores[0] + '</span>'; 
            
            } 
            if(password.value == "") {
                errores.push("Falta completar este campo")
                password.innerHTML += '<span class="text-xs text-red-600">'+ errores[0] + '</span>';
            }

            if(errores.length > 0) {
                e.preventDefault();
                console.log("Error")
            }


        });


}