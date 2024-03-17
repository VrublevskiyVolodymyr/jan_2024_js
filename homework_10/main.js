// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form1 = (document.getElementsByName('f2'))[0];

let userName = (document.getElementsByName('userName'))[0];
let userSurname = (document.getElementsByName('userSurname'))[0];
let userAge = (document.getElementsByName('userAge'))[0];
let buttonSend = (document.getElementById('send'));
let buttonClean = (document.getElementById('clean'));
let div = document.createElement('div');
div.classList.add('div');
let divForm = document.querySelector('div.form');
divForm.appendChild(div);

buttonSend.onclick = function (e) {
    e.preventDefault()
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerText = ` userName: ${userName.value}\n
                userSurname: ${userSurname.value}\n
                userAge: ${userAge.value}`
    div.appendChild(item);
    userName.value = '';
    userSurname.value = '';
    userAge.value = '';
}
buttonClean.onclick = function (e) {
    e.preventDefault();
    div.innerText = '';
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let count = (+localStorage.getItem("count") + 1) || 0;
localStorage.setItem("count", count.toString());
let counterElement = document.querySelector('div.counter');
counterElement.innerText = `${count}`;

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let sessions = JSON.parse(localStorage.getItem("sessions")) || [];

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

sessions.push({visit: formattedDate});
localStorage.setItem("sessions", JSON.stringify(sessions));

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push({
        index: i + 1,
        number: Math.floor(Math.random() * 100)
    })
}

let h2_arr = document.createElement('h2')
h2_arr.classList.add('center');
h2_arr.innerText = "Array with pagination";
document.body.appendChild(h2_arr);

function pagination(arr, pageSize) {
    let divContainerArr = document.createElement('div');
    divContainerArr.classList.add('container_arr');
    document.body.appendChild(divContainerArr);
    let buttonPrev = document.createElement('button');
    buttonPrev.classList.add('button');
    buttonPrev.innerText = 'Prev';
    let buttonNext = document.createElement('button');
    buttonNext.classList.add('button');
    buttonNext.innerText = 'Next';
    divContainerArr.append(buttonPrev, buttonNext);
    let totalCount = arr.length;
    let totalPages = Math.ceil(totalCount / pageSize);
    let currentPage = 1;
    let divArrContent = document.createElement('div');
    divArrContent.classList.add('div_arr_content');
    divContainerArr.appendChild(divArrContent);
    renderPage();

    buttonPrev.onclick = function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage -= 1;
            renderPage();
        }
    }

    buttonNext.onclick = function (e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage += 1;
            renderPage();
        }
    }

    function renderPage() {
        divArrContent.innerHTML = '';
        let paginationArr = arr.slice(((currentPage - 1) * pageSize), currentPage * pageSize);

        paginationArr.forEach(value => {
            let arrElement = document.createElement('div');
            arrElement.classList.add('div_arr_element');
            for (const key in value) {
                let valueArrElement = document.createElement('div');
                valueArrElement.innerText = `${key}: ${value[key]}`;
                arrElement.appendChild(valueArrElement);
            }
            divArrContent.append(arrElement);
        })
    }
}

pagination(arr, 10);
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let h2_toggle = document.createElement('h2')
h2_toggle.classList.add('center');
h2_toggle.innerText = "Toggle";

let button = document.createElement('button');
button.innerText = 'Click me';
let textDiv = document.createElement('div');
textDiv.id = 'text';
document.body.append(h2_toggle, button, textDiv);
button.onclick = function () {
    textDiv.classList.toggle('hidden');
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let h2_age = document.createElement('h2')
h2_age.classList.add('center');
h2_age.innerText = "Age verification";

let formAge = document.createElement('form');
let inputAge = document.createElement('input');
inputAge.name = 'age';
inputAge.placeholder = 'age';
inputAge.type = 'number';
let buttonAge = document.createElement('button');
buttonAge.innerText = "Submit"
formAge.append(inputAge, buttonAge);
document.body.append(h2_age, formAge);

formAge.onsubmit = function () {
    let value = this.age.value;
    if (value < 18) {
        alert('age<18');
    } else if (value >= 18) {
        alert('Ok');
    }
    this.age.value = '';
    return false;
}
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let h2_table = document.createElement('h2')
h2_table.classList.add('center');
h2_table.innerText = "Creating a table";

let divTable = document.createElement('div');
document.body.appendChild(divTable);
let input1 = document.createElement('input');
input1.placeholder = 'lines';
input1.type = 'number';
let input2 = document.createElement('input');
input2.placeholder = 'cells';
input2.type = 'number';
let input3 = document.createElement('input');
input3.placeholder = 'contents';
let button1 = document.createElement('button');
button1.innerText = 'Click'
divTable.append(h2_table, input1, input2, input3, button1);

button1.onclick = function () {
    let value1 = input1.value;
    let value2 = input2.value;
    let value3 = input3.value;
    let table = document.createElement('table');
    table.style.border = 'black 1px solid';
    table.style.margin = '10px';
    divTable.append(table);

    for (let i = 0; i < value1; i++) {
        let lines = document.createElement('tr')
        table.append(lines)
        for (let j = 0; j < value2; j++) {
            let cells = document.createElement('td');
            cells.style.border = 'blue 1px solid';
            cells.style.height = '80px';
            cells.style.width = '80px';
            cells.innerText = `${value3}`;
            lines.append(cells)
        }
    }
    input1.value = '';
    input2.value = '';
    input3.value = '';
}
// (Додатковачастина для завдання)
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається</form>

let h2_currency = document.createElement('h2')
h2_currency.classList.add('center');
h2_currency.innerText = "Currency";

let divElementCurrency = document.createElement('div');
divElementCurrency.classList.add('counter');
divElementCurrency.innerText = '100грн';
document.body.append(h2_currency, divElementCurrency);

let currency = (JSON.parse(localStorage.getItem("currency"))) || [];

if (currency.length < 1) {
    currency.push({value: 100, date: (new Date()).getTime()})
    localStorage.setItem("currency", JSON.stringify(currency));
} else if (((new Date()).getTime() - currency[currency.length - 1].date) > 10000) {
    currency.push({value: `${+currency[currency.length - 1].value + 10}`, date: (new Date()).getTime()})
    localStorage.setItem("currency", JSON.stringify(currency));
    divElementCurrency.innerText = `${+currency[currency.length - 1].value}грн`;
} else {
    divElementCurrency.innerText = `${+currency[currency.length - 1].value}грн`;
}

