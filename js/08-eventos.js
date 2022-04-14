// console.log("Eventos");


/* Chamar função linha do arquivo 06-funcoes.js */




/* Exemplo 01 - Detectando eventos - H2 - linha 14*/
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");

const msg = document.querySelector("#mensagem");

const divResultadosImagem = document.querySelector("#resultados");

// Monitor de eventos
// Ao clicar - aparece Ola
subExemplo01.addEventListener("click", function(){
    msg.textContent = "Olaaaaaa!!!!";
    msg.style.fontsize = "25px"
    subExemplo01.style.backgroundColor = "yellow";
});

// // clicar 2 vezes - desaparece Ola
subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = "";
});

// incluindo imagem ao passar mouse
subExemplo01.addEventListener("mouseover", function(){
    msg.textContent = "Tchau!!!!";
    msg.style.fontsize = "5"
    subExemplo01.style.backgroundColor = "red";

    let imagem = document.createElement("img");
    imagem.src = "imagens/linguagens.png";
    imagem.alt = "Imagem teste";
    divResultadosImagem.appendChild(imagem);

});

subExemplo01.addEventListener("mouseout", function(){
    msg.textContent = "";
    subExemplo01.style.backgroundColor = "white";
    divResultadosImagem.innerHTML = "";
});

/* Exemplo 02 - modo noturno - css interno tag <style> no html*/
/* toggle - ativa e desativa a propriedade, no caso modo-noturno*/
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body");

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");

    // == comparação (dois iguais)
    // = atribuição (um igual)
    // Se o testo do botao for ativar
    if (botao.textContent == `Ativar`) {
        // então mudamos para desativar
        botao.textContent = "Desativar";       
    } else {
        // senão muDAMOS PARA aTIVAR
        botao.textContent = "Ativar";        
    }
});

linha();

/* Exemplo 03 - simulação de cadastro */
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

// Detectar o acionamento do formulario
// A função dentro do listener, é chamado de Callback
// submit - envio de dados do formulario por botao (clique) ou teclado (enter)
formulario.addEventListener("submit", function(event){
    // Anulando comportamento padrão do navegador que tenta redirecionar o formulario automaticamente. Agora o programador fará o tratamento.
    event.preventDefault();

    // 1) Capturar os dados digitados nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

        // parseint() - transformar campo nota em valor ou numero inteiro
        // parsefloat() - transformar campo nota em valor ou numero decimais 

    console.log(nome, nota1, nota2);

    // 2) Calcular a media das notas
    let media = (nota1 + nota2) / 2;

    // 2.1) Programe o necessario para determinar se o aluno esta aprovado ou reprovado. criterio maior ou igual 7, caso contrario reprovado.
    // 2.2) Mostre a situação do aluno junto com o nome e a media

    let situacao = "";

    if(media >= 7){
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }

    // 3) Criar elemento dinamicamente via JS

    // 3.1) Criar a elemento/tag
    let paragrafo = document.createElement("p");

    // 3.2) Montar o conteudo da tag
    // usando o template string (``)
    paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}</i> - ${situacao}`;

    // 3.3) Adicionar tag/conteudo a div resultado, atribuindo ao DOM
    divResultados.appendChild(paragrafo);

    console.log(paragrafo);

    // 3.4) Faça com que os campos do formulario sejam resetados ou limpo ao enviar
    formulario.reset();

    // 4) Devolvendo o foco (cursor) para o campo nome limpo
    campoNome.focus();

});