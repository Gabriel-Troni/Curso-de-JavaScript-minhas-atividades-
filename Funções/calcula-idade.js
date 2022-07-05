const pessoa1 = {
		nome: 'João',
		idade: 5,
	};

const pessoa2 = {
		nome: 'Maria',
		idade: 55,
	};

const animal = {
		nome: 'meredith',
		idade: 2,
	};

function calculaIdade(anos) {

return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
} anos de idade.`;

}
console.log(calculaIdade.apply(animal, [10]));