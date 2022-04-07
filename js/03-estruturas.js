/* Estruturas de dados no javaScript 

Constante

Quando for um, usar somente ""

let aluno = ""

----------------------

Array (significa vetor) usando a simbologia []

Lista de dados indexados

Quando for varios ["","","",""]

let alunos = ["","","",""]

*/ 

let alunos = ["tiago","João","Marilia","Vagner"];

/* Acessando o aluno armazenado no indice 1 e 3 */

console.log(alunos[1]); /* João */
console.log(alunos[3]); /* Vagner */ 

/* Conseguindo ver todos os indices por numeros que representam */

console.log(alunos);

/* Exercício Array 

1) Crie um array contendo os seguintes dados de uma pessoa:

Nome e sobrenome
Idade
Cidade
Estado

2) Devendo mostrar no final uma frase no console XXXXXX (nome) é da cidade de XXXX / xx (estado) e tem XX anos.

*/

let dados = ["João da Silva",50,"São Paulo","SP"]

/* resultado - demonstração */

console.log(dados[0]," é da cidade de ",dados[2]," / ", dados[3]," e tem ",dados[1]," anos.");

/*     OU      */

console.log(
    `${dados[0]} é da cidade de ${dados[2]} e tem ${dados[1]} anos.`
);

/* Criar linha de separação */

console.log("-----------------------------------------------");

/*  Objeto - Lista de dados não-indexados, usando a simbologia {} e , */

let filme = {
    // propriedade: valor
    titulo: "Homem Aranha",
    ano: 2021,
    genero: "Ação/Ficção",
    classificacao: 18,
};

/* resultado - demonstração */

console.log(filme.titulo);
console.log(filme.genero);
console.log(
    `${filme.titulo} foi lançado em ${filme.ano} com classificacao de +${filme.classificacao} anos.`);


/* Criar linha de separação */

console.log("-----------------------------------------------");    


/* Exercício Objeto

1) Crie objeto cvontendo os dados (ficticios) de um pedido de loja virtual.
- data do pedido
- pedido comprado
- preço do pedido
- prazo de entrega

2) Mostre frase exemplo:
O produto XYZ foi comprado em 07/04/2022 com entrega em 7 dias uteis.*/   

let pedido = {
    data: "07/04/2022",
    produto: "XYZ",
    valor: 2400.00,
    prazo: 7,
};

/* resultado - demonstração */

console.log(pedido.produto);
console.log(pedido.data);
console.log(pedido.valor);
console.log(pedido.prazo);
console.log(`O produto ${pedido.produto} foi comprado em ${pedido.data} com entrega em ${pedido.prazo} dias uteis.`)




 