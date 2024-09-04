/*Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:
rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.
Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.
No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

const pessoa = {
    nome: 'Heric',
    idade: 26,
    solteiro: true,
    hobbies: ["Ler", "Games", "Praia"],
    endereco: {
        rua: 'Rua dos Alfineiros',
        cidade: 'Mogi das Cruzes',
        estado: 'São Paulo',
        
    }
}

function mostrarInfoPessoa(pessoa){
    console.log("Informações Pessoais: ");
    console.log(`Seu nome é: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`A sua idade é: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
    console.log(`Seu estado cívil é: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Seus Hobbies são: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
    console.log("Endereco: ");
    console.log(`Rua: ${pessoa.endereco.rua}`);
    console.log(`Cidade: ${pessoa.endereco.cidade} `);
    console.log(`Estado: ${pessoa.endereco.estado} `);


}

mostrarInfoPessoa(pessoa);*/

const contaBancaria = {
    titular: "Heric",
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
};

const cliente = {
    nome: "Eduarda",
    conta: contaBancaria
};

function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}


cliente.conta.depositar(500);
cliente.conta.sacar(200);


mostrarSaldo(cliente)