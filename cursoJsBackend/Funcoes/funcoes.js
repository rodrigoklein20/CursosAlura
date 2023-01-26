// let x = "";
// console.log(x);
// x = "oi";

function imprimeTexto(texto){
    console.log(texto);
}

imprimeTexto(soma(10, 5));

//três formas de escrever funções

function soma(a, b){
    return a + b;
}

console.log(soma(10, 5));

console.log(Math.round(3.14));

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos`;
}

console.log(nomeIdade("Rodrigo",22));

function cumprimentar(){
    return 'Oi gente!'
   }
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
   
cumprimentaPessoa('Rodrigo')