let flechaCerrar = document.querySelector(".barra-lateral-cerrar-img");

flechaCerrar.addEventListener( "click" , cerrarBarraClick )

let barraLateral= document.querySelector("[data-aside]")

function cerrarBarraDefecto( ){
    let barraLateral= document.querySelector("[data-aside]")

    
    // barraLateral.style.transitionProperty = "left";
    // barraLateral.style.transitionDuration = "0s";
    // barraLateral.style.left = "-80%";
}

function cerrarBarraClick(e){
    let barraLateral= document.querySelector("[data-aside]");
    
    barraLateral.classList.remove( "barra-lateral-activar" )
}

/*---------------------------------------------------------------------*/

let menuAbrir = document.querySelector(".menu-img");

menuAbrir.addEventListener( "click" , desplegarBarraClick );

function desplegarBarraClick(e){
    let barraLateral= document.querySelector("[data-aside]")

    barraLateral.classList.add( "barra-lateral-activar" )
}