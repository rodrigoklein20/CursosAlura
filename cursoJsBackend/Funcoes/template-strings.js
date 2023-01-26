const nome = "Ju";
const idade = 2022 - 2000;
const cidadeDeNascimento = "Sao Paulo";

//const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao);

const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)