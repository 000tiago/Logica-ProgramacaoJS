//Produto: Define um tipo com duas propriedades:
type Produto = {
	nome: string
	valor: number
}
//Propriedade _filaDeEspera: Inicializa a fila de espera com o valor padrão de 10.
class Estabelecimento{
	private _filaDeEspera = 10
//Construtor: Define as propriedades endereco, setor, produtos e um parâmetro opcional filaDeEspera
	constructor(
		public endereco: string,
		public setor: string,
		private produtos: Produto[],
//Se filaDeEspera não for fornecido, usa o valor padrão _filaDeEspera.
		filaDeEspera?: number
	) {
		this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
	}

	public retornaNomeDosProdutos() {
		return this.produtos.map(produto => produto.nome)
	}
//Getter e Setter filaDeEspera: Permitem acessar e modificar _filaDeEspera com validação.
	get filaDeEspera(){
		return this._filaDeEspera
	}
	set filaDeEspera(fila: number) {
		if (fila <= 0) {
			return
		}
		this._filaDeEspera = fila
	}
//Diminui o valor de _filaDeEspera em 1, se for maior que 0.
	diminuiFilaDeEspera(){
		if (this._filaDeEspera ===0){
			return
		}
		this._filaDeEspera -= 1
	}
}

const padaria = {
	endereco: 'Rua Avenida A - N- 1',
	setor: 'Alimentação',
	produtos: [
		{ nome: 'Pão', valor: 2.0},
		{ nome: 'Ovos', valor: 0.70},
		{ nome: 'Leite', valor: 5.0}
	],
	
	retornaNomeDosProdutos(){
		return this.produtos.map(produtos => produtos.nome)
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
}
//padaria2 não retornaNomedosProdutos, pois não possui o new Est., e nem o método() 
const padaria2 = {
	endereco: 'Rua Avenida B - N- 2',
	setor: 'Alimentção',
	produtos: [
		{ nome: 'Queijo', valor: 10.0},
		{ nome: 'Linguiça', valor: 7.0},
		{ nome: 'Manteiga', valor: 5.0}
	],
}
const padaria3 = new Estabelecimento(
	'Campo dos Planaltos - C, N- 3',
	'Alimentação',
	[
		{ nome: 'Lolita', valor: 3.0},
		{ nome: 'Empada', valor: 2.0},
		{ nome: 'Broa', valor: 1.0}
	],
	3
)

const padaria4 = new Estabelecimento(
	'Deposito - D, N- 4',
	'Alimentação',
	[],
	27
)

console.log(padaria)
padaria.filaDeEspera = 20
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
console.log(padaria.filaDeEspera)

console.log(padaria.retornaNomeDosProdutos())
console.log(padaria3.retornaNomeDosProdutos())
console.log(padaria4.retornaNomeDosProdutos())