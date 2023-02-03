let listElements = document.querySelectorAll('.lista_boton_click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

let abrirMenu = document.querySelector('.div_nav');

abrirMenu.addEventListener("mouseover", ()=>{

    document.querySelector('.div_nav').style.width = '20%';
    document.querySelector('.div_general').style.width = '80%';

});
let cerrarMenu = document.querySelector('.div_general');

cerrarMenu.addEventListener("mouseover", ()=>{

    document.querySelector('.div_nav').style.width = '2%';
    document.querySelector('.div_general').style.width = '98%';

});