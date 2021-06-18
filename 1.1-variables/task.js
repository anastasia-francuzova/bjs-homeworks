 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */



function averageMark(a, g, p) {
	
    let algebra = a;
	let geogpaphy = g;
	let physics = p;

	let avgMark = (algebra + geogpaphy + physics) / 3;
    
	return avgMark;
}

function sayHello(userName) {
	
    let myName = userName;
	let message = `Привет, мир! Меня зовут ${myName}`
    
	return message;
}

let x;
let y;
let z;

function calculateFormula(x, y, z) {
    
	x = 2;
	y = 22; 
	z = 0;

	let result = x*y + 5*z - 1;
    
    return result;
}

calculateFormula(x, y, z)