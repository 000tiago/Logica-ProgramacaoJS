//For Of (Indicado com lista, númerico)
const listaDeNumeros = [33, 22, 555, 25, -10, 0]
const usuarios = ['josé', 'antonio']

/*
// ### Código imperativo ###
for (let contador = 0; contador < listaDeNumeros.length; contador += 1) {
	console.log(listaDeNumeros[contador])
}
*/
console.log("\nPrint via: While")
let indiceNumero = 0
while (indiceNumero < listaDeNumeros.length){
	console.log(listaDeNumeros[indiceNumero])
	indiceNumero += 1
}

// ### Código declarativo ###
// ### Estrutura/Lista no plural, e o elemento que sai no singular

console.log("Print via: For Of\n")
for (let numero of listaDeNumeros ){
	console.log(numero)
}

/*
for (const usuario of usuarios){
	console.log(usuario)
}
*/ 