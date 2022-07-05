FUNÇÃO AUTO INVOCÁVEL

(function exemplo() {
    console.log("função auto invocável");
})();

ARRAY -> SPREAD E REST

Spread faz com que os elementos de um array sejam interpretados como elementos independentes
para usar, adiciona ... na hora de chamar uma função. Ex:

function funçao (x, y, z) {
    return x + y + z;
}

const array = [1, 2, 3];

console.log(funçao(...array))

Rest faz com que elementos independentes sejam interpretados como parte de um array
para usar, adiciona ... na hora de declarar a função. Ex:

function funçao (...argumentos) {
    console.log(argumentos.length)
}

funçao (); -> retorna 0
funçao (1, 2); -> retorna 2

OBJECT DESTRUCTURING
Desestrutura um objeto

const user = {
    id: "19",
    fullname: {
        firstName: "Gabriel",
        lastName: "troni"
    }
}

function userId ({id}) {
    return id;
}

function getFullName ({fullname: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId (user);
getFullName (user);

FOR, FOR...IN e FOR...OF 

FOR -> loop dentro de elementos iteráveis, como arrays e strings 

for (let i = 0; i < Array.length; i++) {
    return `alguma instrução`;
}

FOR IN -> loop entre propriedades enumeráveis de um objeto

for (prop in obj) {
    console.log(prop);
}

exemplo de saída: chaves ou valores

FOR OF -> loop entre estruturas iteráveis (array, string)

for (letra of palavra) {
    console.log(letra);
}

for (num of nums) {
    console.log(num);
}

exemplos de saída: letras, números.

WHILE E DO...WHILE

WHILE -> loop que funciona até que uma condição se torne falsa
ex:

function exemploWhile () {
    let num = 0

    while (num <=5) {
        console.log(num);
        num++;
    }
}

exemploWhile ()

DO...WHILE -> loop que funciona até que uma condição se torne falsa, porém sempre ocorre
a primeira execução.

function exemploDoWhile () {
    let num = 6;

    do {
        console.log(num);
        num++;
    } while(num <= 5)
}

exemploDoWhile ();

THIS -> quando usado dentro de um método*, se refere ao objeto daquele método.
Método -> quando há uma função dentro de um objeto ocupando o lugar do valor.

const pessoa = {
    firstName: "Gabriel",
    lastName: "Troni",
    fullName: function () {
        return `this.firstName + " " + this.lastName`;
    },
};

pessoa.fullName();
também pode ser usado fora e dentro de uma função e no navegador.
no navegador se refere ao Window(objeto global). dentro da função se refere ao objeto global.
Também pode ser usado dentro do HTML.

O valor de THIS pode ser manipulado usando
CALL:

const pessoa = {
    nome: "miguel",
};

function getSomething() {
    console.log(this.nome);
};

getSomething.call(pessoa);

APPLY -> mesma coisa do call, porém quando for chamar a função e se ela tiver outros argumentos,
estes argumentos devem ser declarados como array, enquando o call declara apenas com vírgula.

const myObj = {
    num1: 1,
    num2: 3,
};

function soma (a, b) {
    console.log(this.num1 + this.num2 + a + b);
};

soma.apply(myObj, [2, 5]);

BIND -> clona uma função e aplica o valor do objeto que foi passado como parâmetro

const retornaNomes = function () {
    return this.nome;
};

let bruno = retornaNomes.bind({ nome: "bruno"});

bruno();

ARROW FUNCTIONS -> Servem como funções que, se tiverem uma linha, dispensam uso de chave e return;
se o argumento for um único elemento, também dispensa uso de parênteses. Ex:

const soma = (a, b) => a + b;

soma(1, 2);

OBS: função normal faz hoisting, mas a arrow function não faz.
outras restrições: não pode manipular o THIS, não pode usar o ARGUMENTS e nem o construtur.





