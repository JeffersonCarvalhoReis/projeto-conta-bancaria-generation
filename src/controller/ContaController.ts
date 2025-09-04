import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
           buscaConta.visualizar(); 
        }else {
            console.log(colors.fg.red, "\nA Conta número: "+ numero +" não foi encontrada!", colors.reset);
        }
    }
    listarTodas(): void {
        for (const conta of this.listaContas) {
            conta.visualizar();
        };
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: " + conta.numero + " foi criada com sucesso!", colors.reset);
        
    }
    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA Conta número: "+ conta.numero + " foi atualizada com sucesso!", colors.reset);

        } else {
            console.log(colors.fg.red, "\nA Conta número: "+ conta.numero +" não foi encontrada!", colors.reset)
        }
    }
    deletar(numero: number): void {
       const buscaConta = this.buscarNoArray(numero);

       if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nA Conta número: "+ numero +" foi apagada com sucesso!", colors.reset);
       } else {
            console.log(colors.fg.red, "\nA Conta número: "+ numero +"não foi encontrada!", colors.reset);
       }
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    gerarNumero(): number {
        return ++this.numero;
    }
    buscarNoArray(numero: number): Conta | null {
        for (const conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }    
    
}