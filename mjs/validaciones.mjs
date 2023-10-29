const validadores = {
    "nacimiento": ( nodo ) => validarMayorDeEdad( nodo )
}

const tiposDeErrores = [ "valueMissing" , "typeMismatch" , "patternMissmatch" , "customError" ]

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
        patternMissmatch: "Al menos 6 caracteres, máximo 12, debe contnener una letra minúscula, una letra mayúscula, un número y sin caracteres especiales"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacío",
        customError: "Debes tener al menos 18 años de edad cumplidos"
    },
    hora: {
        valueMissing: "Este campo no puede estar vacío"
    },
    telefono: {
        valueMissing: "Este campo no puede estar vacío"
    },
    servicio: {
        valueMissing: "Este campo no puede estar vacío"
    },
    estado: {
        valueMissing: "Este campo no puede estar vacío"
    }
}

export function validarInputs( inputs ){
    inputs.forEach( ( input ) => { 
        input.addEventListener( "blur" , (e) => {
            validarInput( e.target )
        } )
    });
}

function validarInput( nodo ){
    const tipoDeInput = nodo.dataset.tipo

    if (validadores[ tipoDeInput ]){
        validadores[ tipoDeInput ]( nodo )
    }

    if (nodo.validity.valid) {
        nodo.parentElement.classList.remove( "input-container-invalid" )
        nodo.parentElement.querySelector( ".input-message-error" ).innerHTML = "";
    } else {
        nodo.parentElement.classList.add("input-container-invalid" )
        nodo.parentElement.querySelector( ".input-message-error" ).innerHTML = mostrarError( tipoDeInput , nodo );
    }
}

function mostrarError( tipoDeInput, nodo ) {
    let mensaje = "";
    let erroresDelNodo = nodo.validity;

    for (let error of tiposDeErrores){
        if( erroresDelNodo[error] ) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    }

    return mensaje;
}



function validarMayorDeEdad( nodo ){
    let fechaNacimientoSring = new Date( nodo.value ) /*Fecha que ingresó en cliente en string*/
    let fechaActual = new Date() /*Fecha de hoy*/ 
    let fechaNacimiento = new Date( fechaNacimientoSring.getUTCFullYear() + 18 , fechaNacimientoSring.getUTCMonth() , fechaNacimientoSring.getUTCDate() )

    let mensajeError = ""

    if( fechaActual < fechaNacimiento ) {
        mensajeError = "Debes tener al menos 18 años de edad cumplidos."
    }

    nodo.setCustomValidity( mensajeError )
}


function validarHora( nodo ){
    
}

