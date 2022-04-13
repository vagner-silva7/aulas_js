console.log("funções!")

/* Funções são blocos de códigos que podem ser executados e reaproveitados em praticamente qualquer parte de sua aplicação.

Usar funções também é uma forma de separar a lógica e organizar melhor sua programação. */


/* Sintaxe tradicional - função que cria rotinas. exemplo: linha entre espaços*/
function linha () {
    console.log("-----------------");
}

let curso = "Programador Web"
let escola = "Senac"
let ano = 2022;

console.log(`Curso: ${curso}`);
linha();
console.log(`Escola: ${escola}`);
linha();
console.log(`Ano: ${ano}`);

linha ();

/* Versão 1 - Sintaxe tradicional, função com parametros ou argumentos */
/* function soma (valor1, valor2) {
    let total= valor1 + valor2;
    return total;
} */


// Versão 2: sintaxe Arrow funtion (função seta/flecha)
/* const soma = (valor1, valor2) => {
    let total = valor1 + valor2;
    return total;
}; */


// Versão 3: sintaxe Arrow funtion (com retorno implicito)
// retorno implicito remove {} e o return
// Quando tem um parametro (ou numero). pode tirar o ()

const soma = (valor1, valor2) => valor1 + valor2;


console.log ( soma(100,50));

/* reaproveitando a função soma2 */

let resultado = soma (100, 50);
console.log(`Total: ${resultado}`);

if(resultado < 1000){
    console.log(`Abaixo da meta`)
}

linha();


// Versão 1: Tradicional
/* function dobra(numero){
    let resultado = numero * 2;
    return resultado;
} */


// Versão 2: Tradicional
/* function dobra(numero){
    return resultado * 2;
} */


// Versão 3:Arrow funtion
/* const dobra = (numero) => {
    let resultado = numero * 2;
    return resultado;
}; */


/* Versão 4: Arrow funtion (com retorno implicito)*/
// retorno implicito remove {} e o return
// Quando tem um parametro (ou numero). pode tirar o ()
/* const dobra = (numero) => {
    return numero * 2;
}; */


/* Versão 5: Arrow funtion (com retorno implicito) */
// retorno implicito remove {} e o return
// Quando tem um parametro (ou numero). pode tirar o ()
const dobra = numero => numero * 2;


console.log( dobra(10) );
console.log( dobra(150) );

linha();



