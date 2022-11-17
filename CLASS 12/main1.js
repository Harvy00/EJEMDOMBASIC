const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult= document.querySelector('#resultado');
const form= document.querySelector('#form');

// EN COMPARACION CON EL ONCLICK DEL HTML AQUI LA FUNCION btnOnclick() NO LLEVA PARENTESIS SOLO btnOnclick

// PRIMERO DEBEMOS ESTABLECER DE CUAL SELECTOR HTML ESTA HABLANDO, LUEGO TENEMOS QUE DECIRLE LOS EVENTOS A ESCUCHAR EN ESTE CASO CLICK Y POR ULTIMO PONER LA FUNCION QUE DEBE MANDAR A LLAMAR CUANDO SE REALICE LA ACCION

// ESTA ES LA MEJOR MANERA DE EJECUTAR UNA ACCION PARA UN BOTON
// btn.addEventListener('click',btnOnclick);

// PARA EJECUTAR UNA FUNCION DESDE UN FORMULARIO AL CLICK DEL BOTOM
form.addEventListener('click',sumarimputsvalor);


// AÑADIMOS EL event PARA AJUSTAR QUE LA PAGINA NO SE REFRESQUE AL MOMENTO DE ENVIAR EL FORMULARIO
function sumarimputsvalor(event){
// console.log(parseInt(input1.value) + parseInt(input2.value));

event.preventDefault();

const sumaInputs =Number(input1.value) +Number(input2.value);
pResult.innerText = "Resultado: " + sumaInputs;

}

