// ENCRIPTAR TEXTO
// Escribo un msg en la caja de texto
// El boton Encriptar deberia leerlo
// Esa variable va a ser mostrada en el otro espacion del html reemplazando la img

// DESENCRIPTAR TEXTO
// Leer lo que se encuenta en el reemplazo (mostrarTexto)
// Volver a su estado original con una funcion que tenga las condiciones iniciales

// COPIAR TEXTO

// ARREGLAR

document.getElementById('textoMostrado').style.visibility = 'hidden';

const asignarTextoId = (id, texto) => {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return;
};

const condicionesIniciales = () => {
    document.querySelector('#textoEncriptado').value = '';
    asignarTextoId("imagen", "img/image.png");
    asignarTextoId("mostrarSubtitulo", "Ningun mensaje fue encontrado");
    asignarTextoId("mostrarTexto", "Ingrese el texto que desees escriptar o desencriptar.");
};

const obtenerTexto = () => {
    let texto = document.getElementById('textoEncriptado').value;
    document.getElementById('textoMostrado').textContent = texto;
    return texto;
}

const encriptarTexto = () => {
    texto = obtenerTexto();
    console.log(texto);

    if (texto == '') {
        document.getElementById('textoMostrado').style.visibility = 'visible';
        let msgErrorVacio = document.getElementById('textoMostrado');
        msgErrorVacio.innerHTML = 'No dejes el campo vacío.'

        document.getElementById('imagen').style.visibility = 'hidden';
        document.getElementById('mostrarSubtitulo').style.visibility = 'hidden';
        document.getElementById('mostrarTexto').style.visibility = 'hidden';

        setTimeout(() => {
            document.getElementById('textoMostrado').style.visibility = 'hidden';
            document.getElementById('imagen').style.visibility = 'visible';
            document.getElementById('mostrarSubtitulo').style.visibility = 'visible';
            document.getElementById('mostrarTexto').style.visibility = 'visible';
        }, 1000);

        return;
    };

    document.getElementById('textoMostrado').style.visibility = 'visible';
    document.getElementById('imagen').style.visibility = 'hidden';
    document.getElementById('mostrarSubtitulo').style.visibility = 'hidden';
    document.getElementById('mostrarTexto').style.visibility = 'hidden';
};

const desencriptarTexto = () => {
    condicionesIniciales();
    document.getElementById('textoMostrado').style.visibility = 'hidden';
    document.getElementById('imagen').style.visibility = 'visible';
    document.getElementById('mostrarSubtitulo').style.visibility = 'visible';
    document.getElementById('mostrarTexto').style.visibility = 'visible';
};

const copiarTexto = () => {
    texto = obtenerTexto();

    navigator.clipboard.writeText(texto).then(function () {
        console.log('Texto copiado al portapapeles');
    }).catch(function (err) {
        console.log('Error al copiar el texto: ', err);
    });

    let textoCopiado = document.getElementById('textoCopiado');

    if (texto != '') {
        textoCopiado.innerHTML = 'Texto copiado';

        setTimeout(() => {
            textoCopiado.innerHTML = 'Copiar';
        }, 1000)
    } else {
        textoCopiado.innerHTML = 'No se registro nada para copiar';
    }

    setTimeout(() => {
        textoCopiado.innerHTML = 'Copiar';
    }, 1000)

};

