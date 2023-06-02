function tocaSom(seletorAudio){    
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){
        console.log('Elemento não encontrado');
    } else if (elemento.localName != 'audio'){
        console.log('Elemento não é um áudio');
    } else {
        elemento.play();
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento){
        if (evento.code === "Espaço" || evento.code === "Enter"){
            listaDeTeclas[i].classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento){
        if (evento.code === "Espaço" || evento.code === "Enter"){
            listaDeTeclas[i].classList.remove('ativa');
        }
    }
}
