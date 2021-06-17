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

averageMark(3, 4, 5)

function sayHello(userName) {
	
    // реализуйте здесь задание №2
    
	return // ваш ответ;
}

function calculateFormula() {
    
	// реализуйте здесь задание №3
    
    return // ваш ответ;
}
