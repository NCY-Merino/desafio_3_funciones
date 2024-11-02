// Variable global para almacenar el color
let colorGlobal = 'white';

// Función para cambiar el color del div 'key'
function cambiarColor(element, color) {
    element.style.backgroundColor = color;
}

const divKey = document.getElementById("key");

// Función para crear un nuevo div
function crearDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '1px solid black';
    document.body.appendChild(nuevoDiv);
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            colorGlobal = 'pink';
            cambiarColor(divKey, colorGlobal);
            break;
        case 's':
            colorGlobal = 'orange';
            cambiarColor(divKey, colorGlobal);
            break;
        case 'd':
            colorGlobal = 'skyblue';
            cambiarColor(divKey, colorGlobal);
            break;
        case 'q':
            crearDiv('purple');
            break;
        case 'w':
            crearDiv('gray');
            break;
        case 'e':
            crearDiv('brown');
            break;
        default:
            return;
    }
});
