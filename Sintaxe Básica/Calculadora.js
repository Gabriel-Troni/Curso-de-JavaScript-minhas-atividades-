function calculadora() {
    const operaçao = Number(prompt('escolha a operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

    if (!operaçao || operaçao > 6) {
        alert('Operação inválida');
        calculadora();
    } else {

        let n1 = Number(prompt('insira o primeiro valor'));
        let n2 = Number(prompt('insira o segundo valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('Parâmetros inválidos');
            calculadora();
        } else {

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperaçao();
            }

            function subtraçao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperaçao();
            }

            function multiplicaçao() {
                resultado = n1 * n2;
                alert(`${n1} x ${n2} = ${resultado}`);
                novaOperaçao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} ÷ ${n2} = ${resultado}`);
                novaOperaçao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`A divisão ${n1} por ${n2} possui sobra igual a ${resultado}`);
                novaOperaçao();
            }

            function potenciaçao() {
                resultado = n1 ** n2;
                alert(`${n1} ^ ${n2} = ${resultado}`);
                novaOperaçao();
            }

            function novaOperaçao() {
                let opçao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');

                if (opçao == 1) {
                    calculadora();
                } else if (opçao == 2) {
                    alert('Volte sempre!')
                } else {
                    alert('digite uma opção válida')
                    novaOperaçao();
                }
            }
        }


        // if (operaçao == 1) {
        //     soma ();
        // }   else if (operaçao == 2) {
        //         subtraçao ();
        //     }
        //     else if (operaçao == 3) {
        //         multiplicaçao ();
        //     }
        //     else if (operaçao == 4) {
        //         divisaoReal ();
        //     }
        //     else if (operaçao == 5) {
        //         divisaoInteira ();
        //     }
        //     else if (operaçao == 6) {
        //         potenciaçao ();
        //     }

        switch (operaçao) {
            case 1:
                soma();
                break;
            case 2:
                subtraçao();
                break;
            case 3:
                multiplicaçao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciaçao();
                break;
        }

    };


}

calculadora();