import { cerrarBarraClick, cerrarBarraDefecto, desplegarBarraClick } from "./mjs/barra-lateral.mjs";

let flechaCerrar = document.querySelector(".barra-lateral-cerrar-img");
let menuAbrir = document.querySelector(".menu-img");

flechaCerrar.addEventListener( "click" , cerrarBarraClick );
menuAbrir.addEventListener( "click" , desplegarBarraClick );



/*---------------------------------------------------------------------*/





