

function cerrarBarraClick(e){
    let barraLateral= document.querySelector("[data-aside]");
    
    barraLateral.classList.remove( "barra-lateral-activar" )
}

function cerrarBarraDefecto( ){
    let barraLateral= document.querySelector("[data-aside]")
}

function desplegarBarraClick(e){
    let barraLateral= document.querySelector("[data-aside]")

    barraLateral.classList.add( "barra-lateral-activar" )
}

export {cerrarBarraClick, cerrarBarraDefecto, desplegarBarraClick};