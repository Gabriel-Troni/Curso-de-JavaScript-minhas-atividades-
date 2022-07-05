DIFERENÇA ENTRE DOM E BOM

DOM ->  Document Object Model HTML é um padrão de como acessar e modificar elementos HTML
de uma página na web. 

BOM -> Browser Object Model compõe tudo que está dentro do objeto window, incluindo o Document
que é o DOM. Todo Browser de navegação possui um BOM e um DOM.

MANIPULANDO DOM

É possível manipular documentos HTMl usando os códigos 
document.getElementById ('nomeId')
document.getElementsByClassName ('nomeClass')
document.getElementsByTagName ('nomeTag')
document.querySelectorAll ('nomeTag nomeClass')
document.querySelectorAll ('nomeClass nomeClass2')

É possível adicionar e deletar documentos no HTML

document.createElement (element); -> cria um novo elemento HTML
document.removeChild (element); -> remove um elemento
document.appendChild (element); -> adiciona um elemento
document.replaceChild (new, old); -> substitui um elemento

MANIPULANDO ESTILOS

É possível manipular classes usando o código Element.classList. Ex: classList.add; classList.remove

meuElemento.classList.toggle ('dark-mode')

Obs: O termo toggle é como um botão liga/desliga. Se o elemento existir, é apagado. Se não
existir, é adicionado.

É possível manipular css diretamente pelo javascript
document.getElementsByTagName ('p').style.color = "blue";

EVENTOS -> qualquer ação que o usuário faz na página

Tipos: 
eventos do mouse: mouseOver/mouseOut -> semelhante ao hover do CSS
eventos de clique: click/dbclick -> efeitos de click ou double click;
evento de atualização: load/change -> executado assim que a página carrega ou algo é inserido;

Event Listener: código usado para "observar" um evento até que ele seja ativado.
botao.addEventListener ("click", outraFunçao);

É possível adicionar um evento pelo próprio HTML usando a propriedade onclick, onmouseover etc.
E também codar em javascript usando a tag <script></script>


