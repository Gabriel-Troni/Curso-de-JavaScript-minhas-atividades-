JAVASCRIP ASSÍNCRONO 

Por padrão, o JavaScript é executado de forma síncrona.

PROMISSE -> obeto de processamento assíncrono. Inicialmente não possui valor.
Possui três estados: pending (pendente), fulfilled (resolvido) e rejected(rejeitado).

ASYNC -> Palavra reservada para uso de funções assíncronas
AWAIT -> vai fazer com que o código "espere" a promisse ser resolvida.

API (Aplication Programing Interface) -> É uma maneira de intermediar os resultados do Back End
com os resultados do Front End. Você pode acessar por URLs

JSON -> JavaScript Object Notation -> Formato usual de APIs para JavaScript

CONSUMINDO APIs

Fetch(url, options)
.then (response => response.json())
.then (json => console.log(json))

fetch retorna uma promisse, logo precisa usar também um await.