const user = {
	name: 'JosÉ mAriA',
	email: 'JOSE.MAARIA@gmail.com',
	age: 22,
	address: 'x Street' 
}

for (const key in user) {
	if (key === 'name' || key === 'email') {
		user[key] = 'novo valor'
	}
}