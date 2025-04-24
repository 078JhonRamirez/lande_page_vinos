const mensaje = "Hola, prueba de envio de mensaje desde la pagina web de Sandra"
const phone = "3116264471"
const urlWhapp = `https://api.whatsapp.com/send?phone=${phone}=&text=${mensaje}`;
const activeButton = document.querySelector("#click__button");

activeButton.addEventListener("click",()=>{
    window.open(urlWhapp,'__blank')
});

activeButton();