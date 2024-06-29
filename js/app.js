// ------------------------------------ FUNCIONES LOGICAS ------------------------------------

// const evitaErrorMayus = (texto) => {
//     return texto.toLowerCase();
// }

const errorCaractEspeciales_Logica = (texto) => {
    const caracteresInvalidos = /[^a-z\s]/;
    if (caracteresInvalidos.test(texto)) {
        // console.log('error');
        return true;
    }
    return false;
}

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

    if (errorCaractEspeciales_Logica(texto)) {
        errorCaractEspeciales();
        return;
    }

    if (texto === '') {
        encriptarTexto_V1();
        return;
    };

    encriptarTexto_V2(textoEncriptado);
};

const generarTextoDesencriptado = (texto) => {
    let codigoRevertido = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "i"],
        ["ober", "o"],
        ["ufat", "u"]
    ];

    textoDesencriptado = texto;

    for (let i = 0; i < codigoRevertido.length; i++) {
        let [patron, reemplazo] = codigoRevertido[i];
        textoDesencriptado = textoDesencriptado.split(patron).join(reemplazo);
    }

    // console.log(textoDesencriptado);
    return textoDesencriptado;
};

const desencriptarTexto_Logica = (texto) => {
    textoDesencriptado = generarTextoDesencriptado(texto)

    if (texto == '') {
        desencriptarTexto_V1();
        return;
    };

    if (errorCaractEspeciales_Logica(texto)) {
        errorCaractEspeciales();
        return;
    }

    desencriptarTexto_V2(textoDesencriptado);
}

const copiarTexto = (textoMostrado) => {
    var aux = document.createElement("textarea");

    aux.value = document.getElementById(textoMostrado).value;
    document.body.appendChild(aux);
    aux.select();

    document.execCommand("copy");
    document.body.removeChild(aux);

    let notificacion = document.getElementById('textoCopiado');
    notificacion.innerHTML = 'copiado!';

    setTimeout(() => {
        notificacion.innerHTML = 'Copiar texto';
    }, 1000);
};

const copiarTextoEncriptado = (textoEncriptado) => {
    var aux = document.createElement("textarea");

    aux.value = document.getElementById(textoEncriptado).value;
    document.body.appendChild(aux);
    aux.select();

    document.execCommand("copy");
    document.body.removeChild(aux);

    let notificacion = document.getElementById('encriptadorCopiado');
    notificacion.innerHTML = 'copiado!';

    setTimeout(() => {
        notificacion.innerHTML = 'Copiar texto encriptado';
    }, 1000);
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
};

const encriptarTexto = () => {
    let texto = obtenerTexto();
    encriptarTexto_Logica(texto);
};

const encriptarTexto_V1 = () => {
    let errorCartelP = document.querySelector('.subCartelError_texto');
    errorCartelP.innerHTML = 'Error<br>No dejes el campo vacío';

    let ventanaAlerta = document.getElementById('cartelError');

    if (ventanaAlerta.style.display === 'none' || ventanaAlerta.style.display === '') {
        establecerPosRandom(ventanaAlerta);
        ventanaAlerta.style.display = 'block';
    };

    setTimeout(() => {
        ventanaAlerta.style.display = 'none';
    }, 1000);

    return;
};

const encriptarTexto_V2 = (textoEncriptado) => {

    let loading = document.querySelector('.subConsolaDos_nav_texto');
    loading.innerHTML = 'Codificando mensaje...';

    let consolaOculta = document.getElementById('consolaDos');
    if (consolaOculta.style.display === 'none') {
        consolaOculta.style.display = 'block';
    };

    let msgOcultoInicial = document.getElementById('subConsolaUno_decoracionInicial');
    let msgOculto = document.getElementById('subConsolaUno_decoracion');
    if (msgOculto.style.display == 'none' && msgOcultoInicial.style.display == 'block') {
        msgOculto.style.display = 'block';
        msgOcultoInicial.style.display = 'none';
    };

    setTimeout(() => {
        loading.innerHTML = 'Codificacion completa!';

        let mostrarEncriptado = document.getElementById('textoMostrado');
        mostrarEncriptado.innerHTML = textoEncriptado;
        document.getElementById('textoMostrado').style.visibility = 'visible';
    }, 2000);


    document.getElementById('encriptadorCopiado').disabled = true;

    setTimeout(() => {
        document.getElementById('encriptadorCopiado').disabled = false;
    }, 2000);

    setTimeout(() => {
        document.getElementById('textoCopiado').disabled = true;
    }, 2000);

    setTimeout(() => {
        document.getElementById('encriptadorCopiado').disabled = true;
    }, 50000);
};

const errorCaractEspeciales = () => {
    let errorCartelP = document.querySelector('.subCartelError_texto');
    errorCartelP.innerHTML = 'Error<br>No debe contener mayúsculas, <br>números o caracteres especiales';

    let ventanaAlerta = document.getElementById('cartelError');

    if (ventanaAlerta.style.display === 'none' || ventanaAlerta.style.display === '') {
        establecerPosRandom(ventanaAlerta);
        ventanaAlerta.style.display = 'block';
    };

    setTimeout(() => {
        ventanaAlerta.style.display = 'none';
    }, 1000);

    return;
}

const desencriptarTexto = () => {
    let texto = obtenerTexto();
    desencriptarTexto_Logica(texto);
};

const desencriptarTexto_V1 = () => {
    let errorCartelP = document.querySelector('.subCartelError_texto');
    errorCartelP.innerHTML = 'Error<br>No dejes el campo vacío';

    let ventanaAlerta = document.getElementById('cartelError');

    if (ventanaAlerta.style.display === 'none' || ventanaAlerta.style.display === '') {
        establecerPosRandom(ventanaAlerta);
        ventanaAlerta.style.display = 'block';
    };

    setTimeout(() => {
        ventanaAlerta.style.display = 'none';
    }, 1000);

    return;
};

const desencriptarTexto_V2 = (texto) => {
    let loading = document.querySelector('.subConsolaDos_nav_texto');
    loading.innerHTML = 'Decodificando mensaje...';

    let consolaOculta = document.getElementById('consolaDos');
    if (consolaOculta.style.display === 'none') {
        consolaOculta.style.display = 'block';
    };

    let msgOcultoInicial = document.getElementById('subConsolaUno_decoracionInicial');
    let msgOculto = document.getElementById('subConsolaUno_decoracion');
    if (msgOculto.style.display == 'none' && msgOcultoInicial.style.display == 'block') {
        msgOculto.style.display = 'block';
        msgOcultoInicial.style.display = 'none';
    };

    setTimeout(() => {
        loading.innerHTML = 'Decodificando completa!';
        let mostrarDesencriptado = document.getElementById('textoMostrado');
        mostrarDesencriptado.innerHTML = texto;
        document.getElementById('textoMostrado').style.visibility = 'visible';
    }, 2000),


    document.getElementById('textoCopiado').disabled = true;

    setTimeout(() => {
        document.getElementById('textoCopiado').disabled = false;
    }, 2000);

    setTimeout(() => {
        document.getElementById('encriptadorCopiado').disabled = true;
    }, 2000);

    setTimeout(() => {
        document.getElementById('textoCopiado').disabled = true;
    }, 50000);
};

const restaurarTexto = () => {
    condicionesIniciales();

    let consolaOculta = document.getElementById('consolaDos');
    if (consolaOculta.style.display === 'block') {
        consolaOculta.style.display = 'none';
    };

    let msgOcultoInicial = document.getElementById('subConsolaUno_decoracionInicial');
    let msgOculto = document.getElementById('subConsolaUno_decoracion');
    if (msgOculto.style.display == 'block' && msgOcultoInicial.style.display == 'none') {
        msgOculto.style.display = 'none';
        msgOcultoInicial.style.display = 'block';
    };
}

// ------------------------------------ FUNCIONES ADICIONALES ------------------------------------

const cerrarVentana = () => {
    let consolaOculta = document.getElementById('consolaDos');
    if (consolaOculta.style.display === 'block') {
        consolaOculta.style.display = 'none';
    }

    let msgOcultoInicial = document.getElementById('subConsolaUno_decoracionInicial');
    let msgOculto = document.getElementById('subConsolaUno_decoracion');
    if (msgOculto.style.display == 'block' && msgOcultoInicial.style.display == 'none') {
        msgOculto.style.display = 'none';
        msgOcultoInicial.style.display = 'block';
    };
}

const errorCerrarVentana = () => {
    let ventanaAlerta = document.getElementById('accesoDenegado');
    let parpadeo = document.querySelector('.subAccesoDenegado');
    let intervalo;

    if (ventanaAlerta.style.display === 'none' || ventanaAlerta.style.display === '') {
        establecerPosRandom(ventanaAlerta);
        ventanaAlerta.style.display = 'block';

        let contador = 0;
        intervalo = setInterval(() => {
            parpadeo.style.backgroundColor = (contador % 2 === 0) ? 'black' : 'red';
            parpadeo.style.color = (contador % 2 === 0) ? 'red' : 'black';
            contador++;
        }, 250)

    };

    setTimeout(() => {
        clearInterval(intervalo);
        ventanaAlerta.style.display = 'none';
    }, 1000)
}

function obtenerPosRandom(element) {
    const x = window.innerWidth - element.clientWidth;
    const y = window.innerHeight - element.clientHeight;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return { x: randomX, y: randomY };
}

function establecerPosRandom(element) {
    const { x, y } = obtenerPosRandom(element);
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}
