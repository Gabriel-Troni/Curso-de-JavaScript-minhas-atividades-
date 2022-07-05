class contaBancária {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        _saldo = valor;
    }

    sacar (valor) {
        if (valor > this._saldo) {
            return `Saldo insuficiente`;
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar (valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contaCorrente extends contaBancária {
    constructor (agencia, numero, cartaoCredito) {
    super (agencia, numero);
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito () {
        return this._cartaoCredito;
    }

    set cartaoCredito (valor) {
        return this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancária{
    constructor (agencia, numero) {
    super (agencia, numero);
    this.tipo = 'poupança';
    }
}

class contaUniversitaria extends contaBancária {
    constructor (agencia, numero) {
    super (agencia, numero);
    this.tipo = 'universitária';
    }

    sacar (valor) {
        if (valor > 500) return `Pedido de saque acima do limite máximo`;
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
}