//Par ou Impar


const listaNumero = [22, 17, 45, 86, 245, 110, 19, 4];
const listaPares = [];
const listaImpar = [];

let indiceNumero = 0;

while (indiceNumero < listaNumero.length) {
	if (listaNumero[indiceNumero] % 2 === 0) {
		listaPares.push(listaNumero[indiceNumero]);
	} else {
		listaImpar.push(listaNumero[indiceNumero]);
	}

	indiceNumero += 1;
}
console.log(listaPares);
console.log(listaImpar);
