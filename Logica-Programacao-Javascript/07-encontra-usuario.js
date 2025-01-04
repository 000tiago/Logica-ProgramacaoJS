const listaContato = ["Paulo", "Roger", "Cleiton", "Zeca", "Marcio", "Bianca", "Julio", "Natalia"]
//const listaContato = ["Paulo", "Roger", "Cleiton", "Marcio", "Bianca", "Julio", "Natalia"]

// ### Solução 1 ###
// let usuarioEncontradoOuListado = false
// let atingiuFimLista = false
// let indiceDoUsuario = 0

// while (!usuarioEncontradoOuListado && !atingiuFimLista){
// 	const usuarioAtual = listaContato[indiceDoUsuario]
// 	if (usuarioAtual.startsWith('Z')) {
// 		usuarioEncontradoOuListado = true
// 		console.log(`Usuario encontrado: ${usuarioAtual}`)
// 	} 
// 	indiceDoUsuario += 1

// 	if (indiceDoUsuario === listaContato.length){
// 		atingiuFimLista = true
// 		console.log('Usuario não foi encontrado')
// 	}
// }

// ### Solução 2. Codigo com menos condições seguidas, "|| e &&" ###

//let encontrouUsuarioOuPercorreuLista = false
//let indiceDoUsuario = 0

//while (!encontrouUsuarioOuPercorreuLista){
//const usuarioAtual = listaContato[indiceDoUsuario]
// 	if (usuarioAtual.startsWith('Z')) {
// 		encontrouUsuarioOuPercorreuLista = true
// 		console.log(`Usuario encontrado: ${usuarioAtual}`)
// 	} 
// 	indiceDoUsuario += 1

// 	if (indiceDoUsuario === listaContato.length){
// 		atingiuFimLista = true
// 		console.log('Usuario não foi encontrado')
// 	}
// } 

// ### Solução 3. Código com Break, para sair do loop ###

let indiceDoUsuario = 0

while (true) {
	const usuarioAtual = listaContato[indiceDoUsuario]
	if (usuarioAtual.startsWith('Z')) {
		console.log(`Usuario encontrado: ${usuarioAtual}`)
		break
	} 
	indiceDoUsuario += 1

	if (indiceDoUsuario === listaContato.length) {
		console.log('Usuario não foi encontrado')
		break
	} 
}
