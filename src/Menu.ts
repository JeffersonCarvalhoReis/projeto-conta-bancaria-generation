import { ContaController } from "./controller/ContaController";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";
import { colors } from "./util/Colors";
import leia from "readline-sync";

export function main() {

  const contas: ContaController = new ContaController();
  let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tiposContas = ['Conta Corrente', 'Conta Poupança'];

  console.log("\nCriar Contas\n");

  let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
  contas.cadastrar(cc1);

  let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
  contas.cadastrar(cc2);

  let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
  contas.cadastrar(cp1);

  let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
  contas.cadastrar(cp2);

contas.listarTodas();

  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.yellow,
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
        `,
      colors.reset
    );

    opcao = leia.questionInt("");

    if (opcao === 9) {
      console.log(
        colors.fg.greenstrong,
        "\nBanco Generation - O Banco da sua geração!"
      );
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
        
        console.log("Digite o Número da agência: ");
        agencia = leia.questionInt("");

        console.log("Digite o Nome do Titular da conta: ");
        titular = leia.question("");

        console.log("\nDigite o tipo da conta: ");
        tipo = leia.keyInSelect(tiposContas, "", {cancel: false}) + 1;

        console.log("\nDigite o Saldo da conta (R$): ");
        saldo = leia.questionFloat("");

        switch (tipo) {
            case 1:
                console.log("Digite o Limite da Conta (R$): ");
                limite = leia.questionFloat("");
                contas.cadastrar(
                    new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                )
                break;
            case 2: 
                console.log("Digite o Dia do aniversário da Conta Poupança: ");
                aniversario = leia.questionInt("");
                contas.cadastrar(
                    new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                );
        
            default:
                break;
        }       
        
        keyPress();

        break;
      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );
        
        contas.listarTodas();

        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset
        );

        console.log("Digite o número da Conta: ");
        numero = leia.questionInt("");
        contas.procurarPorNumero(numero);
        
        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );

        console.log("Digite o número da Conta: ");
        numero = leia.questionInt("");

        const conta = contas.buscarNoArray(numero);

        if (conta != null) {
            
            console.log("Digite o Número da agência: ");
            agencia = leia.questionInt("");

            console.log("Digite o Nome do Titular da conta: ");
            titular = leia.question("");

            tipo = conta.tipo;
            
            console.log("\nDigite o Saldo da conta (R$): ");
            saldo = leia.questionFloat("");

            switch (tipo) {
                case 1:
                    console.log("Digite o Limite da Conta (R$): ");
                    limite = leia.questionFloat("");
                    contas.atualizar(
                        new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                    )
                    break;
                case 2:
                    console.log("Digite o Dia do aniversário da Conta Poupança: ");
                    aniversario = leia.questionInt("");
                    contas.atualizar(
                        new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                    );
                    break;
            
            }
        } else {
            console.log(colors.fg.red, "\nA Conta número: "+ numero +" não foi encontrada!", colors.reset);
        }

        keyPress();
        break;
      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar uma Conta\n\n",
          colors.reset
        );

        console.log("Digite o número da conta: ");
        numero = leia.questionInt("");
        contas.deletar(numero);
        
        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        );

        keyPress();
        break;

      default:
        console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

        keyPress();
        break;
    }
  }
}

function sobre(): void {
  console.log(
    `\n
        **************************************************************
        
        Projeto Desenvolvido por: Jefferson Carvalho
        Generation Brasil - generation@generation.org
        github.com/conteudoGeneration

        **************************************************************
        `
  );
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  leia.prompt();
}

main();
