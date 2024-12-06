class Banco {
    constructor() {
      this.clientes = [];
    }
  //adasdasdasdasd
    criarConta(cliente, tipo) {
      const conta = new Conta(cliente, tipo);
      cliente.adicionarConta(conta);
      this.clientes.push(cliente);
    }
  
    getClientes() {
      return this.clientes;
    }
  
    toString() {
      return this.clientes.map((cliente) => cliente.toString()).join("\n");
    }
  }
  //asdasdasdas
  class Cliente {
    constructor(nome, sobrenome, documento, banco) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.documento = documento;
      this.banco = banco;
      this.contas = [];
    }
  
    adicionarConta(conta) {
      this.contas.push(conta);
    }
  
    getContas() {
      return this.contas;
    }
  
    toString() {
      return `${this.nome} ${this.sobrenome} - ${this.documento}`;
    }
  }
  
  class Conta {
    constructor(cliente, tipo) {
      this.cliente = cliente;
      this.tipo = tipo;
      this.saldo = 0;
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de ${valor} realizado na conta ${this.tipo}. Saldo atual: ${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor > this.saldo) {
        console.log(`Saldo insuficiente na conta ${this.tipo}. Saldo atual: ${this.saldo}`);
      } else {
        this.saldo -= valor;
        console.log(`Saque de ${valor} realizado na conta ${this.tipo}. Saldo atual: ${this.saldo}`);
      }
    }
  
    transferir(valor, contaDestino) {
      if (valor > this.saldo) {
        console.log(`Transferência não realizada. Saldo insuficiente na conta ${this.tipo}.`);
      } else {
        this.saldo -= valor;
        contaDestino.depositar(valor);
        console.log(`Transferência de ${valor} realizada para conta ${contaDestino.tipo}.`);
      }
    }
  
    imprimirExtrato() {
      console.log(`Extrato da conta ${this.tipo} - Cliente: ${this.cliente.nome} ${this.cliente.sobrenome}`);
      console.log(`Saldo atual: ${this.saldo}\n`);
    }
  
    toString() {
      return `${this.tipo} - Saldo: ${this.saldo}`;
    }
  }
  
  // Main Simulation
  const banco = new Banco();
  
  // Criar Clientes
  const cliente1 = new Cliente("Alejandro", "Garcia", "12312321", banco);
  const cliente2 = new Cliente("Jão", "Pedro", "23423", banco);
  
  // Criar Contas
  banco.criarConta(cliente1, "corrente");
  banco.criarConta(cliente1, "poupanca");
  banco.criarConta(cliente2, "corrente");
  
  // Cliente 1
  const [ccCliente1, poupancaCliente1] = cliente1.getContas();
  
  ccCliente1.imprimirExtrato();
  poupancaCliente1.imprimirExtrato();
  
  ccCliente1.depositar(100);
  ccCliente1.sacar(25);
  ccCliente1.transferir(23, poupancaCliente1);
  
  ccCliente1.imprimirExtrato();
  poupancaCliente1.imprimirExtrato();
  
  // Cliente 2
  const [ccCliente2] = cliente2.getContas();
  ccCliente2.depositar(160);
  ccCliente2.transferir(50, ccCliente1);
  
  ccCliente2.imprimirExtrato();
  ccCliente1.imprimirExtrato();
  
  // Informações dos Clientes
  console.log("Informação do cliente:", ccCliente1.toString());
  
  console.log("Clientes no banco:");
  banco.getClientes().forEach((cliente) => console.log(cliente.toString()));
  
  // Informações completas do banco
  console.log("\nInformações completas do banco:");
  console.log(banco.toString());
  