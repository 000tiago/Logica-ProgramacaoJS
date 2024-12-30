//const listaContato = ["Paulo", "Roger", "Cleiton", "Zeca", "Marcio", "Bianca", "Julio", "Natalia"]
const listaContato = ["Paulo", "Roger", "Cleiton", "Marcio", "Bianca", "Julio", "Natalia"]

let encontrouUsuarioOuPercorreuLista = false
let indiceDoUsuario = 0

do {
	const usuarioAtual = listaContato[indiceDoUsuario]
 	if (usuarioAtual.startsWith('Z')) {
 		encontrouUsuarioOuPercorreuLista = true
 		console.log(`Usuario encontrado: ${usuarioAtual}`)
 	}

	indiceDoUsuario = indiceDoUsuario + 1

 	if (indiceDoUsuario === listaContato.length) {
 		encontrouUsuarioOuPercorreuLista = true
 		console.log('Usuario não foi encontrado')
 	}
} while (!encontrouUsuarioOuPercorreuLista)

//