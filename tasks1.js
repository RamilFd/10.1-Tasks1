
//*------------------------------ Уровень 1.1 задачника JavaScript ------------------------------*/

// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

let num = -1;
if (num < 0) {
	console.log(`Число ${num} отрицательное.`)
} else {
	console.log(`Число ${num} НЕ отрицательное.`)
}


// Дана строка. Выведите в консоль длину этой строки.

let str = 'something string';
console.log(str.length);


// Дана строка. Выведите в консоль последний символ строки.

let str1 = 'something string';
let numstr1 = str1.length;
console.log(str1[numstr1 - 1]);


// Дано число. Проверьте, четное оно или нет.

let num1 = 23;
if (num1 % 2 == 0) {
	console.log(`Число ${num1} чётное.`)
} else {
	console.log(`Число ${num1} НЕчётное.`)
}


// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

let string1 = 'бочка';
let string2 = 'Букет';

string1 = string1.toLowerCase();
string2 = string2.toLowerCase();

if (string1[0] == string2[0]) {
	console.log('true');
} else {
	console.log('false');
}


// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

let string3 = 'букварь';

if (string3[string3.length - 1] !== 'ь') {
	console.log(string3[string3.length - 1]);
} else {
	console.log(string3[string3.length - 2]);
}



//*------------------------------ Уровень 1.2 задачника JavaScript ------------------------------*/


// Дано число. Выведите в консоль первую цифру этого числа.

let num2 = 56879;
let str2 = num2.toString();
console.log(str2[0]);


// Дано число. Выведите в консоль последнюю цифру этого числа.

console.log(str2[str2.length - 1]);


// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

console.log(+str2[0] + +str2[str2.length - 1]);


// Дано число. Выведите количество цифр в этом числе.

console.log(str2[length]);


// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let num21 = 348;
let num22 = 7842457839;

if (num21.toString()[0] == num22.toString()[0]) {
	console.log('true');
} else {
	console.log('false');
}



//*------------------------------ Уровень 1.3 задачника JavaScript ------------------------------*/


// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let str3 = 'Если в этой строке более одного символа';
if (str3.length > 1) {
	console.log(str3[str3.length - 2]);
} else {
	console.log('В этой строке меньше 1 буквы!');
}


// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let num31 = 4;
let num32 = 10;

if (num32 % num31 == 0) {
	console.log(true);
} else {
	console.log(false);
}



//*------------------------------ Уровень 1.4 задачника JavaScript ------------------------------*/

// Выведите в консоль все целые числа от 1 до 100.

for (let i = 1; i < 100; i++) {
	console.log(i);
}


// Выведите в консоль все целые числа от -100 до 0.

let i = -100;
while (i < 0) {
	console.log(i);
	i++;
}


// Выведите в консоль все целые числа от 100 до 1.

for (let i = 100; i > 0; i--) {
	console.log(i);
}


// Выведите в консоль все четные числа из промежутка от 1 до 100.

for (let i = 1; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}


// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

for (let i = 1; i <= 100; i++) {
	if (i % 3 == 0) {
		console.log(i);
	}
}



//*------------------------------ Уровень 1.5 задачника JavaScript ------------------------------*/


// Найдите сумму всех целых чисел от 1 до 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
	sum += i;
}
console.log(sum);


// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

let sum5 = 0;
for (let i = 1; i <= 100; i++) {
	if (i % 2 == 0) {
		sum5 += i;
	}
}
console.log(sum5);


// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

let sum51 = 0;
for (let i = 1; i <= 100; i++) {
	if (i % 2 != 0) {
		sum51 += i;
	}
}
console.log(sum51);


// Даны два целых числа. Найдите остаток от деления первого числа на второе.

let num51 = 9;
let num52 = 2;

console.log(num51 % num52);


// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

let str5 = 'Гиппопотам';
// let q = str5.length;
// console.log(q)
for (let i = str5.length - 1; i >= 0; i--) {
	console.log(str5[i]);
}



//*------------------------------ Уровень 1.6 задачника JavaScript ------------------------------*/

// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = 0;
for (let elem of arr) {
	res += elem ** 2;
}
console.log(res);


// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

let arr5 = [4, 9, 16];
let res5 = 0;
for (let elem of arr5) {
	res5 += Math.sqrt(elem);
}
console.log(res5);


// Дан массив с числами. Найдите сумму положительных элементов этого массива.

let arr51 = [-23, 0, -18, 3, 10, 90];
let res51 = 0;
for (let elem of arr51) {
	if (elem > 0) {
		res51 += elem;
	}
}
console.log(res51);


// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

let arr52 = [-23, 0, -18, 3, 10, 7, 15, 90];
let res52 = 0;
for (let elem of arr52) {
	if (elem > 0 && elem < 10) {
		res52 += elem;
	}
}
console.log(res52);



//*------------------------------ Уровень 1.7 задачника JavaScript ------------------------------*/

// Дана строка: Получите массив букв этой строки.

let str7 = 'abcde';
console.log(str7.split(''));

// Дано некоторое число: Получите массив цифр этого числа.

let num7 = 12345;
console.log(num7.toString().split(''));


// Дано некоторое число: Переверните его:

let num71 = 12345;
console.log(num71.toString().split('').reverse().join(''));


// Дано некоторое число: Найдите сумму цифр этого числа.

let num72 = 12345;
let res72 = 0;
for (let elem of num72.toString().split('')) {
	res72 += Number(elem);
}
console.log(res72);



//*------------------------------ Уровень 1.8 задачника JavaScript ------------------------------*/

// Заполните массив целыми числами от 1 до 10.

let arr8 = [];
for (let i = 1; i < 11; i++) {
	arr8.push(i);
}
console.log(arr8);


// Заполните массив четными числами из промежутка от 1 до 100.

let arr81 = [];
for (let i = 1; i < 101; i++) {
	if (i % 2 == 0) {
		arr81.push(i);
	}
}
console.log(arr81);


// Дан массив с дробями: Округлите эти дроби до одного знака в дробной части.

let arr82 = [1.456, 2.125, 3.32, 4.1, 5.34];
let arr83 = [];

for (let elem of arr82) {
	arr83.push(Number(elem.toFixed(1)));
}
console.log(arr83);



//*------------------------------ Уровень 1.9 задачника JavaScript ------------------------------*/


// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let arr91 = [
	'http://code.mu/ru/javascript/tasker/stager/1/9/',
	'https://code.mu/ru/javascript/tasker/stager/1/9/',
	'https://google.com',
	'http://google.com',
	'http://ya.ru',
	'https://ya.ru'
];

let arrRes = arr91.filter(function (elem) {
	if (/^http\:\/\//.test(elem)) {
		return true;
	};
})
console.log(arrRes)


// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

let arr92 = [
	'index.html',
	'index.css',
	'index.js',
	'main.html',
	'main.css',
	'main.js',
];

let arrTrue = arr92.filter(function (elem) {
	if (/\.html$/.test(elem)) {
		return true;
	};
})
console.log(arrTrue);


// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

let arr93 = [10, 15, 20, 35, 40];
let arr933 = arr93.map(function (el) {
	el += el / 10;
	return el;
})
console.log(arr933);



//*------------------------------ Уровень 1.9 задачника JavaScript ------------------------------*/

// Заполните массив случайными числами из промежутка от 1 до 100.

let arr101 = [];
let q = 0;
while (q < 10) {
	arr101.push(Math.floor(Math.random() * 100) + 1);
	q++;
}
console.log(arr101);


// Дан некоторый массив, например, вот такой: По очереди выведите в консоль подмассивы из двух элементов нашего массива: [1, 2] [3, 4] [5, 6]

let arr102 = [1, 2, 3, 4, 5, 6];
let arrNew = [];
function sliceArr(arr, num) {
	for (let i = 0; i < arr.length; i += num) {
		arrNew.push(arr.slice(i, i + num))
	}
	return arrNew;
}
console.log(sliceArr(arr102, 2));


// Даны два массива: Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6].

let arr103 = [1, 2, 3];
let arr104 = [4, 5, 6];

let arr105 = arr103.concat(arr104);
console.log(arr105);