//For in, para manipular objetos.
//For of, para manipular arrays. 

const user = {
	name: 'JosÉ mAriA dOs saNTos',
	email: 'JOSE.MARIA@gmail.com',
	age: 22,
	address: 'x Street' 
}

// ### Valor de user (name, e email) retornando em LowerCase

for (const key in user) {
	if (key === 'name') {
		const names = user[key].split(' ') //Criando uma array a partir de um string, e dividindo onde tem espaço.
		user[key] = ''
		for (const name of names){ //Percorrendo arrays com 'of'
			const normalizedName = name.toLowerCase()
			const [primeiraLetra, ...restoNome] = normalizedName //[] Quebra a declaração em um ou mais termos, primeira letra, ...resto

		console.log(primeiraLetra)
		console.log(restoNome) //Continua sendo uma Array com cada letra do nome

		user[key] = user[key] + ' ' + primeiraLetra.toLocaleUpperCase() + restoNome.join('') //Join junta os elementos da Array criando uma String
		user[key] = user[key].trim() //Retira os espaços indevidos "Espaço no começo do José"
	}
	}

	if (key === 'email') {
		user[key] = user[key].toLowerCase()
	}
}
console.log(user)


