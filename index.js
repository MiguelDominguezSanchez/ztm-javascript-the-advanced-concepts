/*
function printName() {
	return 'Andrei Neagoie'
}

function findName() {
	function a() {}
	return printName()
}

function sayMyName() {
	return findName()
}

console.log(sayMyName())
*/

////////// 4. Hoisting

console.log('1-------')
console.log(teddy)
var teddy = 'bear'
function sing() {
	console.log('oohhhh la la la')
}
