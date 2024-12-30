//Ternários (Atribuição condicional, onde o valor de uma variavel depende de outras)
const idade = 18;
const temCNH = true;
const podeDirigir = idade => 18 && temCNH && idade <= 65;


if (podeDirigir) {
	console.log("Pessoa está habilitada para dirigir");
} else {
	console.log("Pessoa não está habilitada para dirigir");
}

const numeroPassageiros = podeDirigir ? 4 : 0

//let numeroPassageiros
//if (podeDirigir) {
//	numeroPassageiros = 4
//} else {
//	numeroPassageiros = 0
//}

console.log({ numeroPassageiros });