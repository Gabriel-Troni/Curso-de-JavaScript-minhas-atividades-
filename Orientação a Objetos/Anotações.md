ORIENTAÇÃO A OBJETOS

Há dois tipos de paradigmas: Imperativos e Declarativos
Os declarativos apenas declaram informações, como banco de dados ou programação funcional
Já o paradigma imperativo diz respeito à como as coisas vão acontecer e em que ordem.
A orientação a objetos é um paradigma imperativo.

Os quatro pilares da Orientação a Objetos são:

Herança: objetos filhos herdam propriedades e métodos dos objetos pais, 
         mas também possuem os seus próprios traços;

Polimorfismo: objetos podem herdar a mesma classe pai, mas se comportar de maneiras diferentes
              quando forem invocados;

Encapsulamento: cada classe tem propriedades e métodos independentes do restante do código;

Abstração: generalizar e simplificar informações ignorando detalhes que não forem relevantes;

ORIENTAÇÃO A OBJETOS NO JAVASCRIPT

Protótipo: todos os objetos JavaScript herdam propriedades e métodos de um prototype.
o objeto Object.prototype está no topo dessa cadeia (da pra ver pelo console);

Quando não existe uma determinada característica no objeto, ele procura nos seus pais.

CLASSES -> o JavaScript não possui classes nativamente. Todas as classes são objetos
e a herança se dá por protótipos. anatomia da classe: contrutor, getter e setter e 
métodos como o super() e o makeSound().

Syntatic Sugar -> Uma sintaxe feita para facilitar a escrita. As novas atualizações do 
ECMAScript6 permitem uma linguagem mais simples, mas por baixos dos panos são objetos sendo 
usados.

