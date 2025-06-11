let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    let chute = Number(document.querySelector("input").value);
    tentativas++;
    limparCampo();

    if (chute === numeroSecreto){
        let tentativasPalavra = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", `Você acertou o número secreto com ${tentativas} ${tentativasPalavra}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor!");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior!");
        }
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    campo = document.querySelector("input");
    campo.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    limparCampo();
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
    document.getElementById("reiniciar").setAttribute("disabled", true);
}