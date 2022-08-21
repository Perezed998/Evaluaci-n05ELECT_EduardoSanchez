const nombre = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

    if(phone.value.length <7){
        warnings += `El telefono no es valido <br>`
        entrar = true
    }
    
    if(message.value.length <1){
        warnings += `Por favor enviar un mensaje <br>`
        entrar = true
    }
    
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Estimado usuario, su formulario fue recibido. En breve lo contactaremos"
    }



})