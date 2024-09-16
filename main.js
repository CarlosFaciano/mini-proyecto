const button_modal = document.querySelector(".button_modal")
const mobile_success = document.querySelector("#mobile_success")
const mobile_design = document.querySelector(".mobile_design")
const dismiss_message = document.querySelector(".dismiss_message")
const valid_message = document.querySelector(".invalid")
const boton_desktop = document.querySelector(".boton_desktop")
const boton_desktop_success = document.querySelector(".boton_desktop_success")
const contenido = document.querySelector(".container_desktop") 
const desktop_success = document.querySelector(".desktop_success")
const input_desktop = document.querySelector(".input_desktop_dessign")
const correo_exito = document.querySelector("#correo_success")
const email_mobile = document.querySelector(".input_mobile")
const correo_celular = document.querySelector("#correo_success_mobile")
const invalido_mobile = document.querySelector(".invalid_mobile")
console.log(invalido_mobile)




/* email_mobile.addEventListener("input", showModal)  */
button_modal.addEventListener("click", showModal) 
dismiss_message.addEventListener("click", showModal) 

boton_desktop.addEventListener("click", showModalDesktop)
boton_desktop_success.addEventListener("click", showModalDesktop)



function showModal(){
    let email= email_mobile.value
    let email_array = email.split("@")
    if( email.includes("@") && email_array[1].includes(".") && email !== ""){
    
    mobile_design.classList.toggle("modal_1")
    mobile_success.classList.toggle("d-none") 
    correo_celular.innerHTML = `<br> ${email}`
    email_mobile.classList.remove("invalido_1")
    invalido_mobile.classList.add("d-none")
  
  } 
    else{

      email_mobile.classList.add("invalido_1")
      invalido_mobile.classList.remove("d-none") 
    }
    
}

function showModalDesktop() {

  let email = input_desktop.value
  let email_array = email.split("@")
    valid_message.classList.add("d-none")
    input_desktop.classList.remove("invalido")
    if (email.includes("@") && email_array[1].includes(".") && email !== ""  ) {
      desktop_success.classList.toggle("d-none")
      contenido.classList.toggle("d-xxl-block")
      correo_exito.innerHTML = `<br> ${email}`
      email = "" 
      valid_message.classList.add("d-none")
      input_desktop.classList.remove("invalido")
    }
    else {
      valid_message.classList.remove("d-none")
      input_desktop.classList.add("invalido")


    

  }
}



