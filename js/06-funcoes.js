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

/* Sintaxe tradicional, função com parametros ou argumentos */
function soma (valor1, valor2) {
    let total= valor1 + valor2;
    return total;
}

console.log ( soma(10,5));

/* reaproveitando a função soma */

let resultado = soma (100, 50);
console.log(`Total: ${resultado}`);

if(resultado < 1000){
    console.log("Abaixo da meta")
}