function printName() {
	return 'Andrei Neagoie'
}

function findName() {
	return printName()
}

function sayMyName() {
	return findName()
}

console.log(sayMyName())
