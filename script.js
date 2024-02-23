let altura = 0;
let largura = 0;
let vidas = 3;
let tempo = 10
let criaMosquitoTempo = 1500;

let nivelGame = window.location.search;
nivelGame = nivelGame.replace('?', '');

if(nivelGame === 'facil') {
    criaMosquitoTempo = 1500;
} else if(nivelGame === 'normal') {
    criaMosquitoTempo = 1000;

} else if(nivelGame === 'dificil') {
    criaMosquitoTempo = 750;
}

console.log(nivelGame)

function ajustaTamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoTela()

let cronometro =  setInterval(function(){
    tempo -=1;
    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
        }   

    }, 1000);

function posicaoRandomica() {

    //removendo o mosquito anterior, caso exista

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        //remove vidas
        if(vidas < 1) {
            // alert('Game Over');
            // vidas = 3;
            // renovaVidas();
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v'+vidas).src = 'imagens/coracao_vazio.png';
        vidas--;
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //criando elemento html
    let mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);

    switch(classe) {
        case 0: return 'mosquito1 ';
        case 1: return 'mosquito2 ';
        case 2: return 'mosquito3 '; 
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2);

    switch(classe) {
        case 0: return 'ladoB';
        case 1: return 'ladoA';
    }
}

function renovaVidas() {
    for(let i=1; i<4; i++) {
       document.getElementById('v'+i).src = 'imagens/coracao_cheio.png';
        
    }
}    

