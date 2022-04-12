/* Testar o console do desenvolvedor do navegador (F12) */

/* Comentar depois de testado */

// console.log("ok")



/* Estrutura condicional 

- if (se), else (senão), else if (senão se)

- Operadores relacionais
    > maior que
    < menor que
    >= maior ou igual
    <= menor ou igual
    == igualdade
    != diferente

*/

/* Exemplo 1: condicional simples (IF)*/

let numero = 10;

if(numero > 0){
    console.log(`${numero} é maior que zero`);
}

console.log("-----------------------------------");  


/* quando for diferente, fica em branco */
let numeroa = -10;

if(numeroa > 0){
    console.log(`${numeroa} é maior que zero`);
}

console.log("-----------------------------------");

/* Exemplo 2: condicional composta (IF/ELSE)*/

let aluno = "João";
let nota1 = 8;
let nota2 = 7;
let media = (nota1 + nota2) / 2;
let situacao =""; /* variaveis indefinida */
let faltas = 10;


console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Media: ${media}`);
console.log(`Faltas: ${faltas}`);

/* && significa operador logico "e", quando precisamos avaliar mais de uma condição ao mesmo tempo, tipo: media e faltas */

if(media >= 7 && faltas < 15){ 
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

console.log(situacao);

console.log("-----------------------------------");

/* quando for diferente,  */

let alunoa = "João";
let nota10 = 5;
let nota20 = 5;
let media2 = (nota10 + nota20) / 2;
let situacao2 = ""; /* variaveis indefinida */


console.log(`Alunoa: ${alunoa}`);
console.log(`Notas: ${nota10} e ${nota20}`);
console.log(`Media2: ${media2}`);


if(media2 >= 7){
    situacao2 = "Aprovado";
} else {
    situacao2 = "Reprovado";
}


console.log(situacao2);


console.log("-----------------------------------");

/* Exemplo 3 - Condicional encadeada (if / else if / else) */

let desempenho;
if(media <3){
    desempenho = "péssimo";
} else if(media <5){
    desempenho = "ruim";
} else if(media <7){
    desempenho = "regular";
} else if(media <9){
    desempenho = "bom"; 
} else {
    desempenho = "otimo";
}
console.log(desempenho);       
