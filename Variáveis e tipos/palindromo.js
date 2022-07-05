// SOLUÇÃO 1
function palindromo (string) {
if (!string) return `string inexistente`;

if (string.split("").reverse().join("") == string) {
    return `A palavra ${string} é um palíndromo`;
} else return `A palavra ${string} não é um palíndromo`;

}

//SOLUÇÃO 2
function palindromo2(string) {
    if (!string) return `string inexistente`;
    
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }

    return true;

    }
}
console.log(palindromo2('arara'));