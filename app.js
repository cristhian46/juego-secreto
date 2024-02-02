/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'juego del numero Secreto';*/

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Escoje un numero del 1 al 10';*/

let numeroSecreto = 0;

let numinten = 0;

let lista = [];

let nummax = 10;

function verificar(){
    let numerodeusu =  parseInt(document.getElementById('valorusu').value);
   /* console.log(typeof(numerodeusu));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numerodeusu);*/
   

    if( numerodeusu === numeroSecreto){
         asignartextoElemento('p',`Acertaste el numero ${numinten} ${(numinten === 1) ? 'vez' : 'veces'}`);
         document.getElementById('reiniciar').removeAttribute('disabled');
            } else{
        if(numerodeusu > numeroSecreto){
            asignartextoElemento('p','El numero secreeto es Menor');
        }
       
        else{
            asignartextoElemento('p','El numero secreeto es Mayor');
        }
       
     numinten++;
     limpiarCaja();
    }
    return;
}

function asignartextoElemento(elmento, texto){
    let elemetoHtml = document.querySelector(elmento);
    elemetoHtml.innerHTML = texto;
    return;
}

function limpiarCaja(){
  document.querySelector('#valorusu').value   = '';
 
}

function CondicionesIniciales() {
    asignartextoElemento('h1','jeugo del numero secreto');
    asignartextoElemento('p',`Escoje un numero del 1 al ${nummax}`);
    numeroSecreto = generarnum();
    numinten = 1;
}

function reiniciarjue() {
    limpiarCaja();
 
    CondicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function generarnum() {
   let numerogen =  Math.floor(Math.random()*nummax)+1;
    
   console.log(numerogen);
   console.log(lista);

if(lista.length == nummax){
    asignartextoElemento('p','Ya se sortearon todos los numeros posibles');
}
else{

    if(lista.includes(numerogen)){
        return generarnum();
      }else{
       lista.push(numerogen);
       return numerogen
      }
}
   
}

CondicionesIniciales();