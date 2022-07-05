TIPOS DE ERROS

Os erros podem ser de ECMAScript ou DOMException

Erros de ECMAScript acontecem durante a execução de um código e a mensagem
costuma aparecer no console ou até mesmo como alert no navegador.

Erros de DOMException acontecem por problemas estruturais da árvore de elementos em uma 
página da web, como arquivos destruídos.

TRATANDO ERROS

Diferença entre THROW e RETURN

O return pode ser usado para mostrar uma mensagem dizendo que aconteceu um erro, porém essa
mensagem é mostrada em forma de string e definida pelo autor do código.
O throw retorna uma mensagem de erro de fato, mostrando ícone e apontando o local deste erro.

TRY...CATCH

Usado para testar um código e manipular possíveis erros em blocos diferentes.

FINALLY

Este código pode ser utilizado após o try...catch, porém irá rodar com ou sem erro.
Pode ser usado para retornar, por exemplo, o valor inserido no código.

O OBJETO ERROR

Todos os parâmetros são opcionais, mas somente o message é padrão. É possível que os demais
não sejam compatíveis com algum navegador.

new Error (message, fileName, lineNumber)

const MeuErro = new Error ('You are poor');

throw MeuErro;

outro exemplo

const MeuErro = new Error ('You are poor')
MeuErro.name = 'coding not allowed';

throw MeuErro;
