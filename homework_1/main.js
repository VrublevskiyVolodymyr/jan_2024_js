// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let greeting = 'hello';
let okten = 'owu';
let m = 'com';
let u = 'ua';
let v = 1;
let q = 10;
let d = -999;
let e = 123;
let g = 3.14;
let f = 2.7;
let h = 16;
let k = true;
let l = false;
console.log(greeting);
console.log(okten);
console.log(m);
console.log(u);
console.log(v);
console.log(q);
console.log(d);
console.log(e);
console.log(g);
console.log(f);
console.log(h);
console.log(k);
console.log(l);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = "Volodymyr ";
let middleName = "Yosypovych ";
let lastName = "Vrublevskyi";
let person = firstName + middleName + lastName;
console.log(person);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log("a " +typeof a);
console.log("b " + typeof b);
console.log("d " + typeof d);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt("Enter you name");
console.log("name " + name);

let surname = prompt("Enter you surname");
console.log("surname " + surname);

let age = prompt("Enter you age");
console.log("age " + age);