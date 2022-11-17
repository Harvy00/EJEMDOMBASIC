const h1 = document.querySelector('h1');
const p = document.querySelector('p');

// SI FUERA QUERYSELECTOR
// const parrafito = document.querySelector('.parrafito');

// SI FUERA CON getElementsByClassName YA NO SE PONE LOS PUNTOS
const parrafito = document.getElementsByClassName('.parrafito');

// SI FUERA CON querySelector 
// const pid = document.querySelector('#pid');

// SI FUERA YA CON getElementById NO SE PONE EL #
const pid = document.getElementById('pid');

const input = document.querySelector('input');


console.log(h1);
console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'ALO <br> Hello';

h1.innerText = 'Convierte todo a texto';

// h1.getAttribute('pantalla') Leer los atributos de clases o otro objeto

// console.log(h1.getAttribute('pantalla'));

console.log(h1.getAttribute('class'));


// h1.setAttribute Pasar de un atributo a otro cuando se ejecute

h1.setAttribute('class','Rojo')

// AGREGAR CLASES A LOS ATRIBUTOS

h1.classList.add('Verde');

// ELIMINAR LAS CLASES A LOS ATRIBUTOS

h1.classList.remove('Rojo');

// toggle ES PARA PONER O QUITAR CLASES CON UNA MISMA PALABRA SI LA TIENE LA QUITA SI NO LA PONE

// CONTAINS ES UN BOOLEANO QUE DEVUELVE VERDADERO SI LA CLASE EXISTE Y FALSO SI NO

// MODIFICAR EL CONTENIDO DE LOS IMPUTS
input.value = 8998;

// CREAR UN ELEMENTO DESDE CERO

// document.createElement

// console.log(document.createElement('img'));

const img = document.createElement('img');
img.setAttribute('src','https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png');

// console.log(img);

// INSERTAR LA IMAGEN DENTRO DE UN CONTENEDOR EN ESTE CASO EN LA CLASE PID

// AMBOS APPEND Y APPENDCHILD FUNCIONAN IGUAL AGREGAN EL ELEMENTO DESPUES DEL CONTENIDO DEL HTML
// pid.append(img);

// pid.appendChild(img);

// ESTAMOS REESCRIBIENDO EL CONTENIDO DE ANTES, EN OTRAS PALABRAS BORRANDO
// pid.innerHTML =img;

// BORRAR EL CONTENIDO Y AGREGAR LA IMAGEN

// HACEMOS QUE SEA IGUAL A UN STRING VACIO, ESTAMOS BORRANDO TODO LO QUE HAYA TODO LO QUE HAYA POR DENTRO DE PID
pid.innerHTML = "";
// Y AHORA LE MANDAMOS, VA A PONER LA IMAGEN DONDE EL ANTERIOR BORRO EL CONTENIDO
pid.appendChild(img);



