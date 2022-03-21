const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar= document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criarHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
    },1000)
}

iniciar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio()
});

pausar.addEventListener('click', function(e){
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');
    segundos = 0;
});

