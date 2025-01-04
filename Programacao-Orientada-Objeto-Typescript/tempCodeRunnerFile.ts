type Produto = { 
    nome: string;
    valor: number;
};


class Estabelecimento {
    // Propriedades da classe
    public filaDeEspera: number;

    // Construtor define os parâmetros obrigatórios
    constructor(
        public endereco: string,
        public setor: string,
        private produtos: Produto[],
        filaDeEspera?: number // Parâmetro opcional
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    // Retorna uma array com os nomes dos produtos
    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    },

	get filaDeEspera(){
		return this._filaDeEspera
	}

	set filaDeEspera(fila: number){
		if (fila <= 0){
			return
		}
		this._filaDeEspera = fila
	}

    // Método que diminui o valor da filaDeEspera em -1 a cada chamado()
    diminuiFilaDeEspera() {
		if (this.filaDeEspera === 0){
			return
		}
        this.filaDeEspera -= 1;
    }
}

const padaria = {
    endereco: 'Rua 1',
    setor: 'Alimentação',
    produtos: [
        { nome: 'geleia', valor: 8.0 },
        { nome: 'peixe', valor: 10.3 },
        { nome: 'cocada', valor: 4.0 } 
    ],
    // Retorna uma array com os nomes dos produtos usando .map
    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    },
	_filaDeEspera: 5,
	get filaDeEspera(){
		return this._filaDeEspera
	},

	set filaDeEspera(fila: number){
		if (fila <= 0){
			return
		}
		this._filaDeEspera = fila
	}
};


const padaria2 = new Estabelecimento(
    'Rua 2 Dragão', 
    'Alimentação', 
    [
        { nome: 'pão', valor: 1.0 },
        { nome: 'arroz', valor: 5.3 },
        { nome: 'leite', valor: 4.0 }
    ],
	3
);

const padaria3 = new Estabelecimento(
    'Rua das 3 Neves',
    'Alimentação Plus',
    [
        { nome: 'vinho', valor: 25.0 },
        { nome: 'amendoim', valor: 5.0 },
        { nome: 'queijo', valor: 70.0 }
    ],
	3
);

// Saída com os nomes dos produtos listados:
console.log('Padaria:');
console.log(padaria);
console.log(padaria.retornaNomeDosProdutos());

console.log('Padaria 2:');
console.log(padaria2);
console.log(padaria2.retornaNomeDosProdutos());

console.log('Padaria 3:');
console.log(padaria3);
padaria3.diminuiFilaDeEspera();
padaria3.diminuiFilaDeEspera();
padaria3.diminuiFilaDeEspera();
padaria3.filaDeEspera= -100
padaria3.diminuiFilaDeEspera();
console.log(padaria3.filaDeEspera);
