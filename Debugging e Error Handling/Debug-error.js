function testaErro (array, number) {

try {

    if (!array && !number) throw new ReferenceError ('Insira os parâmetros');

    if (typeof array !== "object") throw new TypeError ('Insira um objeto');

    if (typeof number !== "number") throw new TypeError ('Insira um número');

    if (array.length !== number) throw new RangeError ('Valores incompatíveis');

    return array;
}
catch (e) {
    if (e instanceof ReferenceError) {
        console.log('Este é um ReferenceError');
        console.log(e.message);
    } else if (e instanceof TypeError) {
        console.log('Este é um TypeError');
        console.log(e.message);
    } else if (e instanceof RangeError) {
        console.log('Este é um RangeError');
        console.log(e.message);
    } else {
        console.log("Ocorreu um erro não esperado" + e);
    }

}
}
console.log(testaErro());

