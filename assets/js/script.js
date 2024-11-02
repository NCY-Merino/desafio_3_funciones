// Agregue el document addEvenListener para que no generara un error al estar en uno de los archivos
// y no encontraran los divs que se encontraban en el otro archivo
    const ele = document.getElementById("ele1");

   // si el elemento ele existe
    if (ele) {
        function pintar(elemento, _color = 'green') {
            elemento.style.backgroundColor = _color;
        }

        pintar(ele);

        ele.addEventListener('click', function () {
            pintar(ele, 'yellow');
        });
    }

    const divBlue = document.getElementById("divBlue");
    const divRed = document.getElementById("divRed");
    const divGreen = document.getElementById("divGreen");
    const divYellow = document.getElementById("divYellow");

    function cambiarColor(event) {
        console.log('evento', event);
        event.target.style.backgroundColor = 'black';
    }

    // si los elementos existen escuchalos
    if (divBlue) divBlue.addEventListener('click', cambiarColor);
    if (divRed) divRed.addEventListener('click', cambiarColor);
    if (divGreen) divGreen.addEventListener('click', cambiarColor);
    if (divYellow) divYellow.addEventListener('click', cambiarColor);
