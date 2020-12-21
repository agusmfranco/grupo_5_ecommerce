window.onload = function(){
    
    //traigo formulario
    let formulario = document.querySelector("form.formulario")
    console.log(formulario);

    //cuando envia el formulario
    formulario.addEventListener("submit", function(e){

        let errores = [];

        //traigo todos los inputs
        let inputs=document.querySelectorAll("input");
        console.log(inputs);

        //itero los inputs
        for (let i = 1; i < inputs.length-2; i++) {
            if(inputs[i].value == "") {
                errores.push("Falta completar este campo");
                inputs[i].innerHTML += '<span class="text-xs text-red-600">'+ errores[0] + '</span>'; 
            }
            
        }

        if(errores.length > 0) {
            e.preventDefault();
            console.log("Error")
            console.log(errores.length);
        }


    });


}