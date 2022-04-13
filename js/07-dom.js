/* console.log("DOM"); */

/* Fuções (ou metodos) de acesso/selção ao Dom

- getElementById() -> seleciona 1 elemento atraves do Id
exemplo: 
#teste

- querySelector() -> seleciona 1 elemento através de um seletor (classe)
exemplo:  
.teste

- querySelectorAll() -> seleciona varios elementos através de seletor
exemplo:
.teste

Obs.: Os 3 modelos deve ser começados por document

*/

/* Exemplo: */

/* const titulo = document.getElementById("titulo-principal");
 */

const titulo = document.querySelector("#titulo-principal");

const subtitulos = document.querySelectorAll("h2");

console.log(titulo);
console.log(subtitulos);
console.log(subtitulos[0]);

// Leitura do conteudo
// titulo é objeto
// textContent é propriedade
console.log( titulo.textContent);
console.log( subtitulos[1].textContent);

// Alterando o conteudo
titulo.textContent = "Ola Dom, meu velho amigo.";
subtitulos[0].innerHTML = "<i>Aprendendo DOM</i>"

// 1) Manipulando CSS Inline via JS 
const pagina = document.querySelector("body");
pagina.style.backgroundColor = "lightblue";
pagina.style.margin = 0;

// 1) Manipulando CSS classe via JS
// first-child - primeiro
// segundo em diante nth-child(1 ou 2 ou 3...)
const primeiroItem = document.querySelector("#lista-editores li:first-child");
console.log(primeiroItem); 

primeiroItem.classList.add("destaque-item");