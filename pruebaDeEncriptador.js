const probarEncriptado = () => {
    let textoPrueba = 'hola';

    let textoEncriptado = [];

    let codigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    for (let i = 0; i < textoPrueba.length; i++) {
        let encontrado = false;

        for (let j = 0; j < codigo.length; j++) {
            if (textoPrueba[i] == codigo[j][0]) {
                textoEncriptado.push(codigo[j][1]);
                encontrado = true;
                break;
            };
        };

        if (!encontrado) {
            textoEncriptado.push(textoPrueba[i]);
        };
    };

    console.log(textoEncriptado.join(''));
}

console.log(probarEncriptado());