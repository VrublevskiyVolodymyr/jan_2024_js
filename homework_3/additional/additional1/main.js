// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr = [12, 23, 34, 45, 56, 'qwe', 'asd', 'ghj', 'dtd', 'vbn', 'uwe', 345, false, true, 34];
console.log(arr);
console.log('--------------------------------------------')

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr1 = [];
arr1[0] = 456;
arr1[1] = 345;
arr1[2] = 32;
arr1[3] = 'saqw';
arr1[4] = false;
arr1[5] = 'hjhd';
arr1[arr1.length] = 'asd';
arr1[arr1.length] = 78;
console.log(arr1);
console.log('--------------------------------------------')

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
let i = 0;
while (i < arr2.length) {
    console.log(arr2[i]);
    i++;
}
console.log('--------------------------------------------')

//     2. перебрати його циклом for
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
console.log('--------------------------------------------')

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0
while (i < arr2.length) {
    if (i % 2)
        console.log(arr2[i]);
    i++;
}
console.log('--------------------------------------------')

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arr2.length; i++) {
    if (i % 2)
        console.log(arr2[i]);
}
console.log('--------------------------------------------')

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arr2.length) {
    if (arr2[i] % 2 === 0)
        console.log(arr2[i]);
    i++;
}
console.log('--------------------------------------------')

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0)
        console.log(arr2[i]);
}
console.log('--------------------------------------------')

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 3 === 0) {
        arr2[i] = "okten";
    }
}
// 8. вивести масив в зворотньому порядку.
console.log(arr2.reverse());
console.log('--------------------------------------------')

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while, але в зворотньому циклі(с заду на перед)

i = arr2.length - 1;
while (i >= 0) {
    console.log(arr2[i]);
    i--;
}
console.log('--------------------------------------------')

//     2. перебрати його циклом for, але в зворотньому циклі (с заду на перед), але в зворотньому циклі (с заду на перед)

for (let i = arr2.length - 1; i >= 0; i--) {
    console.log(arr2[i]);
}
console.log('--------------------------------------------')

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом, але в зворотньому циклі (с заду на перед)

i = arr2.length - 1;
while (i >= 0) {
    if (i % 2)
        console.log(arr2[i]);
    i--;
}
console.log('--------------------------------------------')

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом, але в зворотньому циклі (с заду на перед)

for (let i = arr2.length - 1; i >= 0; i--) {
    if (i % 2)
        console.log(arr2[i]);
}
console.log('--------------------------------------------')

// 5. перебрати циклом while та вивести  числа тільки парні  значення, але в зворотньому циклі (с заду на перед)

i = arr2.length - 1;
while (i >= 0) {
    if (arr2[i] % 2 === 0)
        console.log(arr2[i]);
    i--;
}
console.log('--------------------------------------------')

// 6. перебрати циклом for та вивести  числа тільки парні  значення, але в зворотньому циклі (с заду на перед)

for (let i = arr2.length - 1; i >= 0; i--) {
    if (arr2[i] % 2 === 0)
        console.log(arr2[i]);
}
console.log('--------------------------------------------')

// 7. замінити кожне число кратне 3 на слово "okten", але в зворотньому циклі (с заду на перед)

for (let i = arr2.length - 1; i >= 0; i--) {
    if (arr2[i] % 3 === 0)
        arr2[i] = "okten"
    console.log(arr2[i]);
}
console.log('--------------------------------------------')

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr3 = [];
for (let j = 0; j < 10; j++) {
    arr3.push(Math.floor(Math.random() * 100));
    console.log(arr3[j])
}
console.log('--------------------------------------------')

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr4 = ['sdfsdf', 'ftyh', 'fghj', 'vbnm', 'hjk', 'hjk', 'fgh', 'gh', 'jk', 'jkl'];
i = 0;
while (i < arr4.length) {
    console.log(arr4[i]);
    i++;
}
console.log('--------------------------------------------')

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr5 = [false, 0, '34', 'cvbbcv', true, 56, 'vbn', 'cvb', 'vcb', 980];
for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}
console.log('--------------------------------------------')

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr6 = [324, 'ftyh', false, 345, 'hjk', true, 'fgh', 54, 'jk', 567];
i = 0;
while (i < arr6.length) {
    if (typeof (arr6[i]) === "boolean") {
        console.log(arr6[i]);
    }
    i++;
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
i = 0;
while (i < arr6.length) {
    if (typeof (arr6[i]) === "number") {
        console.log(arr6[i]);
    }
    i++;
}
console.log('--------------------------------------------')

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
i = 0;
while (i < arr6.length) {
    if (typeof (arr6[i]) === "string") {
        console.log(arr6[i]);
    }
    i++;
}
console.log('--------------------------------------------')

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr7 = [];
arr7[0] = 1;
arr7[1] = 'dfdfg';
arr7[2] = 435;
arr7[3] = 'dfdfg';
arr7[4] = false;
arr7[5] = 467;
arr7[6] = 'dfdfg';
arr7[7] = 879;
arr7[8] = true;
arr7[9] = 90;
for (i = 0; i < arr7.length; i++) {
    console.log(arr7[i]);
}
console.log('--------------------------------------------')

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<p>`)
for (i = 1; i <= 10; i = i + 1) {
    console.log(i);
    document.write(i + ' ');
}
document.write(`</p>`)
console.log('--------------------------------------------')

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<p>`)
for (i = 1; i <= 100; i = i + 1) {
    console.log(i);
    document.write(i + ' ');
}
document.write(`</p>`)
console.log('--------------------------------------------')

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write('<p>');

for (i = 1; i <= 100; i = i + 2) {
    console.log(i);
    document.write(i + ' ');
}
document.write(`</p>`);
console.log('--------------------------------------------');
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write('<p>');

for (let i = 1; i <= 100; i = i + 1) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i + ' ');
    }
}
document.write(`</p>`);
console.log('--------------------------------------------');
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write('<p>');

for (let i = 1; i <= 100; i = i + 1) {
    if (i % 2) {
        console.log(i);
        document.write(i + ' ');
    }
}
document.write(`</p>`);
console.log('--------------------------------------------');
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: 'alchemist',
        pageCount: 205,
        authors: ['Paulo Coelho'],
        genre: ['novel', 'adventures', 'novel']
    },
    {
        title: 'fifth mountain',
        pageCount: 253,
        authors: ['Paulo Coelho'],
        genre: ['novel', 'story']
    },
    {
        title: 'kaydashev family',
        pageCount: 232,
        authors: ['Nechuy-Levytskyi'],
        genre: ['novel', 'story', 'adventures']
    },
    {
        title: 'George code',
        pageCount: 220,
        authors: ['Lucy Hawking', 'Stephen Hawking'],
        genre: ['adventures']
    }
];
// -знайти наібльшу книжку.
let max_page = 0;
let max_book = '';
for (const book of books) {
    if (book.pageCount > max_page) {
        max_page = book.pageCount;
        max_book = book.title
    }
}
console.log("Max book: " + max_book + " with " + max_page + " pages");
console.log('--------------------------------------------');

// - знайти книжку/ки з найбільшою кількістю жанрів
let max_genre = 0;
for (const book of books) {
    if (book.genre.length > max_genre) {
        max_genre = book.genre.length;
    }
}
for (const book of books) {
    if (book.genre.length === max_genre) {
        console.log("book with max genre: " + book.title);
    }
}
console.log('--------------------------------------------');

// - знайти книжку/ки з найдовшою назвою
let max_title = 0;

for (const book of books) {
    if (book.title.length > max_title) {
        max_title = book.title.length;
    }
}
for (const book of books) {
    if (book.title.length === max_title) {
        console.log("book with max title: " + book.title);
    }
}
console.log('--------------------------------------------');

// - знайти книжку/ки які писали 2 автори
let arr_books2 = [];

for (const book of books) {
    if (book.authors.length === 2) {
        arr_books2.push(book.title);
    }
}
console.log("Books with 2 authors: " + arr_books2)
console.log('--------------------------------------------');

// - знайти книжку/ки які писав 1 автор
let arr_books1 = [];

for (const book of books) {
    if (book.authors.length === 1) {
        arr_books1.push(book.title);
    }
}
console.log("Books with 1 authors: " + arr_books1)
console.log('--------------------------------------------');
