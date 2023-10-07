let flechaCerrar = document.querySelector(".barra-lateral-cerrar-img");

flechaCerrar.addEventListener( "click" , cerrarBarraClick )

window.addEventListener("resize", cerrarBarraDefecto)

function cerrarBarraDefecto( ){
    let barraLateral= document.querySelector("[data-aside]")
    barraLateral.style.transitionProperty = "left";
    barraLateral.style.transitionDuration = "0s";
    barraLateral.style.left = "-80%";
}

function cerrarBarraClick(e){
    let barraLateral= document.querySelector("[data-aside]");

    barraLateral.style.transitionProperty = "left";
    barraLateral.style.transitionDuration = "0.5s";
    barraLateral.style.left = "-80%";
    // barraLateral.style.display = "none";
}

/*---------------------------------------------------------------------*/

let menuAbrir = document.querySelector(".menu-img");

menuAbrir.addEventListener( "click" , desplegarBarraClick );

function desplegarBarraClick(){
    let barraLateral= document.querySelector("[data-aside]")
    barraLateral.style.transitionProperty = "left";
    barraLateral.style.transitionDuration = "0.5s";
    barraLateral.style.left = "0%";
    // barraLateral.style.display = "none";
}