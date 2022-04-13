// console.log("Eventos");


/* Chamar função linha do arquivo 06-funcoes.js */




/* Exemplo 01 - Detectando eventos - H2 - linha 14*/
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");

const msg = document.querySelector("#mensagem");

// Monitor de eventos
subExemplo01.addEventListener("click", function(){
    msg.textContent = "Olaaaaaa!!!!";
    msg.style.fontsize = "25px"
    subExemplo01.style.backgroundColor = "yellow";
});

subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = "";
});

subExemplo01.addEventListener("mouseover", function(){
    msg.textContent = "Tchau!!!!";
    msg.style.fontsize = "5"
    subExemplo01.style.backgroundColor = "red";
});

subExemplo01.addEventListener("mouseout", function(){
    msg.textContent = "";
    subExemplo01.style.backgroundColor = "white";
});

/* Exemplo 02 - modo noturno - css interno tag <style> no html*/
/* toggle - ativa e desativa a propriedade, no caso modo-noturno*/
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body");

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");
});


linha();


let total = soma(15, 500);
console.log(total);