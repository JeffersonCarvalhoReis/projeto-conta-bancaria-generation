import { Conta } from './model/Conta';
import { ContaCorrente } from './model/ContaCorrente';
import { ContaPoupanca } from './model/ContaPoupanca';
import { colors } from './util/Colors';
import leia from 'readline-sync';


export function main() {
    
    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
        `
        **************************************************************

                            BANCO GENERATION

        **************************************************************
                        1 - Criar Conta
                        2 - Listar todas as Contas
                        3 - Buscar Conta por Número
                        4 - Atualizar Dados da Conta
                        5 - Apagar Conta
                        6 - Sacar
                        7 - Depositar 
                        8 - Transferir valores entre Contas
                        9 - Sair
                        
        **************************************************************

        Entre com a opção desejada: 
        `
        ,colors.reset)
              
        opcao = leia.questionInt("");

        if (opcao === 9) {
            console.log(colors.fg.greenstrong, 
                "\nBanco Generation - O Banco da sua geração!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()

                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
        
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

function sobre(): void {
    console.log(
        `\n
        ***************************************************
        Projeto Desenvolvido por: Jefferson Carvalho
        Generation Brasil - generation@generation.org
        github.com/conteudoGeneration
        ***************************************************
        `
    )
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}

main();
