const desencriptarTexto = (texto) => {
    let codigoRevertido = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "i"],
        ["ober", "o"],
        ["ufat", "u"]
    ];

    let textoDesencriptado = texto;

    for (let i = 0; i < codigoRevertido.length; i++) {
        let [patron, reemplazo] = codigoRevertido[i];
        textoDesencriptado = textoDesencriptado.split(patron).join(reemplazo);
    }

    return textoDesencriptado;
};

console.log(desencriptarTexto('fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!'))

const desencriptarTexto_Logica = (texto) => {
    if (texto == '') {
        desencriptarTexto_V1();
        return;
    };
}