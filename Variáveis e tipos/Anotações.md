STRING, NUMBER e BOOLEAM -> Tipo primitivo

var variável = "variável";
var variável2 = "variável2"

console.log(typeof variável) -> retorna o tipo da variável. Nesse caso, string.

console.log(variável.concat(variável2)); -> concatena unindo as duas variáveis.

percent = 10;
console.log(percent);

console.log(typeof percent + "%")

let numero = 1.4;
let novoNumero = Math.floor(numero);
console.log(novoNumero);

let numero = 1;
let string = numero.toString();
console.log(typeof numero, typeof string);

push -> adiciona um item no final do array
pop -> remove um item no final do array

unshift -> adiciona um item no começo do array
shift -> remove um item no começo do array


let array = [8, 5, 9];
array.push (1);
array.push (2);
array.pop ();
array.shift ();
array.unshift (8);
array.pop ();
console.log(array);

let obj = {
     name: "gabriel",
     age: 19,
     adress: "monte castelo",
};
console.log(typeof obj);

console.log(obj["name"]);

let mom = "nameOfMom";
obj[mom] = "nilda";

obj.nameOfDad = "elizeu";
console.log(obj);

