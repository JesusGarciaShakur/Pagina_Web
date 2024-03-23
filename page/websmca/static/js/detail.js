const acordeones = document.querySelectorAll('details');

acordeones.forEach(acordeon => {
    const visable = acordeon.querySelector("#answer");

    let contador = 0;
    let altoInicial = acordeon.offsetHeight;
    const anchoFinal = visable.offsetHeight + 45;
    const incremento = 6;
    const intervaloTiempo = 0.1;
    let intervaloa = 0;

    function crecerContenedor() {
        if (acordeon.open) {
            if (altoInicial < anchoFinal) {
                altoInicial += incremento;
                acordeon.style.height = altoInicial + "px";
            } else {
                clearInterval(intervaloa);
            }
        }
    }

    function cerrarContenedor() {
        if (altoInicial > 50) {
            altoInicial -= incremento;
            acordeon.style.height = altoInicial + "px";
        } else {
            clearInterval(intervaloa);
            acordeon.open = false;
            contador = 0;
        }
    }

    acordeon.addEventListener('click', function () {
        contador++;
        if (contador === 1) {
            clearInterval(intervaloa);
            intervaloa = setInterval(crecerContenedor, intervaloTiempo);
        } else if (contador === 2) {
            clearInterval(intervaloa);
            intervaloa = setInterval(cerrarContenedor, intervaloTiempo);
        } else if (contador > 2) {
        }
    });
});