var comparação = 5 >= 5.1;
console.log(comparação);

var e = true && true;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !false;
console.log(nao);

let array = ['string', 1, true, ['array1'], ['array2']];

array.forEach(function(item, indice){console.log(item, indice)});

array.push('novo item');
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift('novo item no inicio');
console.log(array);

console.log(array.indexOf(true));

array.splice(0, 2);
console.log(array);

let novoArray = array.slice(0, 2);
console.log(novoArray);

let object = {string: 'string', number: 1, boolean: true, array: ['array']};
console.log(object.array);

var number = object.number;
console.log(number);

var arrayInterno = object.array;
console.log(arrayInterno)

var {string, number, boolean} = object;
console.log(string, number, boolean);

JOGO

var jogador1 = 1;
var jogador2 = 0;
var placar;

jogador1 >= 0 && jogador2 >= 0 ? console.log('Os jogadores são válidos!') : console.log('Jogadores inválidos!');

if (jogador1 > 0 && jogador2 == 0) {
    console.log('jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;

} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;

} else {
    console.log('Ninguém marcou ponto!');
}

switch (placar) {
    case placar = jogador1 > jogador2:
    console.log('jogador 1 ganhou');
    break;
    case placar = jogador2 > jogador1:
    console.log('jogador 2 ganhou');
    break;
    default:
    console.log('ninguém ganhou');
}

REPETIÇAO

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

for (let i in array) {
    console.log(i);
}

for (let i in object) {
    console.log(i);
}

for (let i of array) {
    console.log(i);
}

For Of não funciona em objetos
for (let i of object.propriedade1) {
    console.log(i);
}

While

var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

Do WHILE
do {
    a++;
    console.log(a);
} while (a < 10);

FUNCTION
function função() {
    console.log('Que fome')
}

função();

function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo);
}

mensagem ('que', 'fome');


FUNÇOES DECLARATIVAS
nome da função obrigatório

function funçao () {
    console.log('tudo certo jovem!')
}

funçao ();

EXPRESSOES DE FUNÇOES
nome é opcional

var funçao = function () {
    console.log('tudo certo jovem!');
}

funçao ();

ARROW FUCTION
sempre anônimas, não podem ser nomeadas

var funçao = () => {
    console.log('sou uma arrow function')
}

funçao ();

