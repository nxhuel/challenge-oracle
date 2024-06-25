// ENCRIPTAR TEXTO
// Escribo un msg en la caja de texto
// El boton Encriptar deberia leerlo
// Esa variable va a ser mostrada en el otro espacion del html reemplazando la img

// DESENCRIPTAR TEXTO
// Volver el texto encriptado al texto normal

// COPIAR TEXTO
// Copiar el texto normal o encriptado dependiendo su estado

// RESTAURAR TEXTO
// Debe dejar el contedeor vacio de ambos contenedor

// ARREGLAR
// Agregar boton/func estaurar
// Buscar la manera de mejorar el encriptado
// hacer animacion de cargando con un mensaje como 'codificando mensaje...'/'texto codificado con exito'
// Mejorar css (estilo robusto/viejo)
// A los botones de copiar q envie un mensaje desp  de 0.5 "copiado"

// ------------------------------------ FUNCIONES LOGICAS ------------------------------------

// const generarCeroUno = () => {
//     let longitud = Math.floor(Math.random() * 100) + 1;

//     const arregloAleatorio = new Uint8Array(longitud);
//     window.crypto.getRandomValues(arregloAleatorio);

//     let cadenaBinaria = '';
//     for (let i = 0; i < longitud; i++) {
//         cadenaBinaria += (arregloAleatorio[i] % 2 === 0) ? '0' : '1';
//     }

//     return cadenaBinaria
// };

const generarTextoEncriptado = (texto) => {
    let codigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    let textoAlmacenado = [];

    for (let i = 0; i < texto.length; i++) {
        let encontrado = false;

        for (let j = 0; j < codigo.length; j++) {
            if (texto[i] == codigo[j][0]) {
                textoAlmacenado.push(codigo[j][1]);
                encontrado = true;
                break;
            };
        };

        if (!encontrado) {
            textoAlmacenado.push(texto[i]);
        };
    };

    // console.log(textoAlmacenado.join(''));
    return textoAlmacenado.join('');
};

const encriptarTexto_Logica = (texto) => {
    textoEncriptado = generarTextoEncriptado(texto)

    if (texto === '') {
        encriptarTexto_V1();
        return;
    };

    encriptarTexto_V2(textoEncriptado);
};

const desencriptarTexto_Logica = (texto) => {
    if (texto == '') {
        desencriptarTexto_V1();
        return;
    };

    desencriptarTexto_V2(texto);
};

const copiarTexto = (texto) => {
    var aux = document.createElement("textarea");

    aux.value = document.getElementById(texto).value;
    document.body.appendChild(aux);
    aux.select();

    document.execCommand("copy");
    document.body.removeChild(aux);
};

const copiarTextoEncriptado = (textoEncriptado) => {
    var aux = document.createElement("textarea");

    aux.value = document.getElementById(textoEncriptado).value;
    document.body.appendChild(aux);
    aux.select();

    document.execCommand("copy");
    document.body.removeChild(aux);
};


// ------------------------------------ FUNCIONES VISULES ------------------------------------

const obtenerTexto = () => {
    return document.getElementById('textoEncriptado').value;
};

const asignarTextoId = (id, elemento) => {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = elemento;
    return;
};

const condicionesIniciales = () => {
    document.querySelector('#textoEncriptado').value = '';
    asignarTextoId("imagen", "img/image.png");
    asignarTextoId("mostrarSubtitulo", "Ningun mensaje fue encontrado");
    asignarTextoId("mostrarTexto", "Ingrese el texto que desees escriptar o desencriptar.");
};

const encriptarTexto = () => {
    let texto = obtenerTexto();
    encriptarTexto_Logica(texto);
};

const encriptarTexto_V1 = () => {
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

const encriptarTexto_V2 = (textoEncriptado) => {
    let mostrarEncriptado = document.getElementById('textoMostrado');
    mostrarEncriptado.innerHTML = textoEncriptado;
    document.getElementById('textoMostrado').style.visibility = 'visible';

    document.getElementById('imagen').style.visibility = 'hidden';
    document.getElementById('mostrarSubtitulo').style.visibility = 'hidden';
    document.getElementById('mostrarTexto').style.visibility = 'hidden';

    document.getElementById('encriptadorCopiado').disabled = true;

    setTimeout(() => {
        document.getElementById('encriptadorCopiado').disabled = false;
    }, 500);

    setTimeout(() => {
        document.getElementById('textoCopiado').disabled = true;
    }, 500);

    setTimeout(() => {
        document.getElementById('encriptadorCopiado').disabled = true;
    }, 10000);
};

const desencriptarTexto = () => {
    let texto = obtenerTexto();
    desencriptarTexto_Logica(texto);
};

const desencriptarTexto_V1 = () => {
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
    }, 500);

    return;
};

const desencriptarTexto_V2 = (texto) => {
    let mostrarDesencriptado = document.getElementById('textoMostrado');
    mostrarDesencriptado.innerHTML = texto;
    document.getElementById('textoMostrado').style.visibility = 'visible';

    document.getElementById('imagen').style.visibility = 'hidden';
    document.getElementById('mostrarSubtitulo').style.visibility = 'hidden';
    document.getElementById('mostrarTexto').style.visibility = 'hidden';

    document.getElementById('textoCopiado').disabled = true;

    setTimeout(() => {
        document.getElementById('textoCopiado').disabled = false;
    }, 500);

    setTimeout(() => {
        document.getElementById('encriptadorCopiado').disabled = true;
    }, 500);

    setTimeout(() => {
        document.getElementById('textoCopiado').disabled = true;
    }, 10000);
};

