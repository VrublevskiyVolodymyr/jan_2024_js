// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arrays1 = [true, 1, "home", 22.5, false, 12, "cat", "dog",100,"one"];
console.log(arrays1[0]);
console.log(arrays1[1]);
console.log(arrays1[2]);
console.log(arrays1[3]);
console.log(arrays1[4]);
console.log(arrays1[5]);
console.log(arrays1[6]);
console.log(arrays1[7]);
console.log(arrays1[8]);
console.log(arrays1[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'alchemist', pageCount: 205, genre: 'novel'};
let book2 = {title: 'fifth mountain', pageCount: 253, genre: 'novel'};
let book3 = {title: 'kaydashev family', pageCount: 232, genre: 'story'};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {title: 'alchemist', pageCount: 205, genre: 'novel', authors: ['Paulo Coelho', 75]};
let book5 = {title: 'fifth mountain', pageCount: 253, genre: 'novel', authors: ['Paulo Coelho', 75]};
let book6 = {title: 'kaydashev family', pageCount: 232, genre: 'story', authors: ['Nechuy-Levytskyi', 79]};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Vasya', username: 'V', password: '123'},
    {name: 'Petya', username: 'P', password: 'qwe'},
    {name: 'Sofiya', username: 'S', password: '123qwe'},
    {name: 'Dima', username: 'D', password: '321'},
    {name: 'Lesya', username: 'L', password: '321dsa'},
    {name: 'Anna', username: 'A', password: 'asd'},
    {name: 'Maria', username: 'M', password: 'dsaasd'},
    {name: 'Kolya', username: 'K', password: '123dsaasd'},
    {name: 'Olya', username: 'O', password: '432'},
    {name: 'Sasha', username: 'S', password: '3434'}];
console.log(users[0].password);
console.log(users[1]['password']);
console.log(users[2].password);
console.log(users[3]['password']);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6].password);
console.log(users[7]['password']);
console.log(users[8].password);
console.log(users[9]['password']);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 1;
// let x = 0;
let x = -3;

if (x!==0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 55;

if (time<=15){
    console.log('I quarter')
}
else if (time>15 && time<=30){
    console.log('II quarter')
}
else if (time>30 && time<=45){
    console.log('III quarter')
}
else {
    console.log('IV quarter')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 21;

if (day<=10){
    console.log('I decade')
}
else if (day>10 && day<=20){
    console.log('II decade')}
else {
    console.log('III decade')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let num_of_day = +prompt("Enter a number of day");
switch (num_of_day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong number")
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt("Enter number 1", "1");
let num2 = +prompt("Enter number 2", "1");

if(num1===num2){
    console.log("number 1 is equal to number 2");
}
else if (num1>num2){
console.log("number 1 is more than number 2");
}
else{
    console.log("number 2 is more than number 1");
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1 = 'fixed';

x1 = x1 || "default";

console.log("x1= " + x1);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log(`${coursesAndDurationArray[0].title}` + " Супер")
}
if(coursesAndDurationArray[1]["monthDuration"] > 5){
    console.log(`${coursesAndDurationArray[1].title}` + " Супер")
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log(`${coursesAndDurationArray[2].title}` + " Супер")
}
if(coursesAndDurationArray[3]["monthDuration"] > 5){
    console.log(`${coursesAndDurationArray[3].title}` + " Супер")
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log(`${coursesAndDurationArray[4].title}` + " Супер")
}
if(coursesAndDurationArray[5]["monthDuration"] > 5){
    console.log(`${coursesAndDurationArray[5].title}` + " Супер")
}