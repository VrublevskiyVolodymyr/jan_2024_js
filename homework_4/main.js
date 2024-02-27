// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area_triangle(a, b) {
    return a * b;
}

console.log('area_triangle= ' + area_triangle(3, 4));
console.log("**********************************************************************")

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function area_circle(r) {
    return (Math.PI * r * r).toFixed(2);
}

console.log('area_circle= ' + area_circle(5));
console.log("**********************************************************************")

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function area_cylinder(h, r) {
    return (2 * Math.PI * r * h + 2 * Math.PI * r * r).toFixed(2);
}

console.log('area_cylinde r= ' + area_cylinder(5, 6));
console.log("**********************************************************************")

// - створити функцію яка приймає масив та виводить кожен його елемент
function print_arr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
print_arr(listOfItems);
console.log("**********************************************************************")

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function write_text(text) {
    document.write(`<p class="text">
${text}
</p>`)
}
let some_text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio doloremque doloribus ea eveniet hic id iure minus molestias mollitia natus, non odio quas, qui quibusdam quis voluptate. Consequuntur, delectus!';
write_text(some_text);
document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function write_li(text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}
let some_text1 = 'Lorem ipsum dolor sit amet';
write_li(some_text1);
document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function write_n_li(text,n) {
    document.write(`<ul>`)
    for (let i = 0; i < n; i++) {
        document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}
write_n_li(some_text1,3);
document.write(`<hr>`);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function write_arr_prim(arr) {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li> ${arr[i]} </li>`)
    }
    document.write(`</ul>`)
}
let arr1 = [12, 'sdcas', 324, 45, 'gfhfgh', 67, 34, 45, true, 'sdc', false];
write_arr_prim(arr1);
document.write(`<hr>`);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function printerArrayObject(array) {
    document.write('<div class="container">')
    for (const arrayElement of array) {
        document.write('<div>')
        for (const item in arrayElement) {
            document.write(`${item}: ${arrayElement[item]}  `);
        }
        document.write('</div>')
    }
    document.write('</div>')
}

let users1 = [
    {id: 0, name: 'vasya', age: 31},
    {id: 1, name: 'petya', age: 30},
    {id: 2, name: 'kolya', age: 29},
    {id: 3, name: 'olya', age: 28},
    {id: 4, name: 'max', age: 30},
    {id: 5, name: 'anya', age: 31},
    {id: 6, name: 'oleg', age: 28},
    {id: 7, name: 'andrey', age: 29},
    {id: 8, name: 'masha', age: 30},
    {id: 9, name: 'olya', age: 31},
    {id: 10, name: 'max', age: 31}
];
printerArrayObject(users1);

// - створити функцію яка повертає найменьше число з масиву
function minArray(array) {
    let min = array[0];
    for (const item of array) {
        if (item<min)
            min=item
    }
    return min
}
let arr2 = [2, 4, 6, 8, 9, 12, -1, 67];
let a = minArray(arr2);
console.log(a);
console.log("**********************************************************************")

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumArray(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}
arr2 = [2, 4, 6, 8, 9, 12, -1, 67];
let s = sumArray(arr2);
console.log(s);
console.log("**********************************************************************")

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2){
    let x = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=x;
    return arr;
}
let arr3=[2,6,50,42,54,62,58,8,9];
console.log(swap(arr3,0,1));
console.log("**********************************************************************")

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const element of currencyValues) {
            if (element.currency===exchangeCurrency) {
                return sumUAH/element.value;
            }
    }
}
let currencyValues = [{currency:'USD',value:40},{currency:'EUR',value:42}];
console.log(exchange(10000,currencyValues,'USD'));