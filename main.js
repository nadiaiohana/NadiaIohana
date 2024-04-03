const botoes = document.querySelectorAll(".texto");
const botoes = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
    }
}
const contadores=document.querySelectorAll(".contador")
const tempoObjetivo1= new Date("2024-31-12T00:00:00);
const tempoObjetivo1= new Date("2024-27-04T00:00:00);
const tempoObjetivo1= new Date("2024-25-12T00:00:00);
const tempoObjetivo1= new Date("2024-31-12T00:00:00);                               
let tempoAtual= new Date();                               
