// 1. Створити пустий масив та :
let arr1 = [];

//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 2; i <= 100; i += 2) {
    arr1.push(i);
}
console.log(arr1);

//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 1; i < 100; i += 2) {
    arr1.push(i);
}
console.log(arr1);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr1.push(Math.floor(Math.random() * 100));
}
console.log(arr1);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr1.push(Math.floor(Math.random() * (8 + 732)));
}

console.log(arr1);
console.log("*****************************************************************************");

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arr1.length; i += 3) {
    console.log(arr1[i]);
}
console.log("*****************************************************************************");
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arr1.length; i += 3) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}
console.log("*****************************************************************************");

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr2 = [];
for (let i = 0; i < arr1.length; i += 3) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
        arr2.push(arr1[i]);
    }
}
console.log(arr2);
console.log("*****************************************************************************");
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i + 1] % 2 === 0) {
        console.log(arr1[i]);
    }
}
console.log("*****************************************************************************");
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let s = 0;
let ser = 0;
let arr3 = [100, 250, 50, 168, 120, 345, 188];
for (let i = 0; i < arr2.length; i++) {
    s = s + arr3[i];
}
ser = s / arr3.length;
console.log(ser);
console.log("*****************************************************************************");

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr4 = [];
let arr5 = [];
for (let i = 0; i < 20; i++) {
    arr4[arr4.length] = Math.floor(Math.random() * (100 - 5) + 5);
    arr5[arr5.length] = arr4[i] * 5;
}
console.log(arr4);
console.log(arr5);
console.log("*****************************************************************************");

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr6 = [];
let arr7 = [12, 'sdcas', 324, 45, 'gfhfgh', 67, 34, 45, true, 'sdc', false];
for (let i = 0; i < arr7.length; i++) {
    if ((typeof (arr7[i]) === 'number')) {
        arr6[arr6.length] = arr7[i];
    }
}
console.log(arr6);
console.log("*****************************************************************************");

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//
//        ]
let usersWithCities = [];

for (const city of citiesWithId) {
    for (const user of usersWithId) {
        if (city.user_id === user.id) {
            user.address = city;
            usersWithCities.push(user)
        }
    }
}
console.log(usersWithCities);
console.log("*****************************************************************************");

//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr8 = [3, 5, 6, 8, 9, 54, 5, 4, 6, 7];
for (const number of arr8) {
    if (number % 2 === 0) {
        console.log(number)
    }
}
console.log("*****************************************************************************");

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr9 = [];
for (const number of arr8) {
    arr9[arr9.length] = number;
}
console.log(arr9);
console.log("*****************************************************************************");

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let word = '';
let arr10 = ['a', 'b', 'c'];
for (let i = 0; i < arr10.length; i++) {
    word = word + arr10[i];
}
console.log(word);
console.log("*****************************************************************************");

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i = 0;
word = '';
while (i < arr10.length) {
    word = word + arr10[i];
    i++;
}
console.log(word);
console.log("*****************************************************************************");

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
word = '';
for (const string of arr10) {
    word = word + string;
}
console.log(word);
