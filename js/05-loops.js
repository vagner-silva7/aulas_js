console.log("loops!");

console.log("-----------------------------------");

/* 3 Estruturas de loops ou laços de repetição 
- While    --> Significa enquanto
- do/While --> Significa faça/enquanto
- For      --> Significa para 
*/

console.log("-----------------------------------");

/* While (enquanto) */

console.log("while");

/* variavel de controle do loop "i" "j" "k" ou contador*/

let i = 1;

while ( i <= 10 ){
    console.log(`valor de i: ${i}`);    
    i++; /* incremento da vaviavel contador i + 1 até chegar 10 */
}

console.log("-----------------------------------");

/* do/While (faça/enquanto) */

console.log("do/while");

/* variavel de controle do loop "i" "j" "k" ou contador*/

let j = 1;

do { console.log (`valor de J: ${j}`);
     j++;
} while ( j <= 3 )

console.log("-----------------------------------");

/* for (para) */

console.log("for");

/* variavel de controle do loop "i" "j" "k" ou contador*/

for ( let i = 1; i <= 5; i++ ) {
    console.log(`Valor de i: ${i}`);
}

console.log("-----------------------------------");

console.log("Loop e estrutura de dados");

/* Acessar Arrays (vetor) */
let alunos = [ "Eduardo", "Vagner", "Thalia", "Claudio", "Jessica"];

for (let i = 0; i < 5; i++) {
    console.log( alunos[i]);

}

/* Sort - ordena a Array */

console.log( alunos.sort());

console.log("-----------------------------------");

console.log("Loops exclusivos do JS");

/* Acessar Arrays (vetor) */
let alunos = [ "Eduardo", "Vagner", "Thalia", "Claudio", "Jessica"];    


// for/of (otimo para arrays)  */
for ( let alunos of alunos ){
    console.log(alunos);
}

/* Acessar objetos */
let livro = {
    titulo: "Senhor dos aneis",
    ano: 1954,
    volumes: 3,
};

/* for/in */
for ( let dados in livro ){
    console.log(livro[dados] );
}






