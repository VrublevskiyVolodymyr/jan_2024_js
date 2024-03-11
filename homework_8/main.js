// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let names = ['John', 'Alice', 'Bob', 'Emily'];
let surnames = ['Smith', 'Johnson', 'Brown', 'Taylor'];

function generateRandomPhone() {
    let phone = '+';
    for (let i = 0; i < 12; i++) {
        phone += Math.floor(Math.random() * 10);
    }
    return phone;
}

let users = [];
for (let i = 0; i < 10; i++) {
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    let phone = generateRandomPhone();
    users.push(new User(i + 1, randomName, randomSurname, `${randomName + (i + 1)}@gmail.com`, phone))
}
console.log(users);
console.log('------------------------------------------------------')
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(value => value.id % 2 === 0));
console.log('------------------------------------------------------')

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));
console.log('------------------------------------------------------');

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];

function generateProducts(count) {
    let productNames = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G', 'Product H', 'Product I', 'Product J'];
    let products = [];
    for (let i = 0; i < count; i++) {
        let randomProduct = productNames[Math.floor(Math.random() * productNames.length)];
        products.push(randomProduct);
    }
    return products;
}

for (let i = 0; i < 10; i++) {
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    let phone = generateRandomPhone();
    clients.push(new Client(i + 1, randomName, randomSurname, `${randomName + (i + 1)}@gmail.com`, phone, generateProducts(Math.floor(Math.random() * 10 + 1))))
}
console.log(clients);
console.log('------------------------------------------------------');

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));
console.log('------------------------------------------------------');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, age, speed, engine) {
    this.model = model;
    this.producer = producer;
    this.age = age;
    this.speed = speed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    }
    this.info = function () {
        console.log(`model - ${this.model}; producer - ${this.producer}; age - ${this.age}; speed - ${this.speed}; engine - ${this.engine};`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        return this.speed += newSpeed;
    }
    this.changeYear = function (newValue) {
        return this.age = newValue;
    }
    this.addDriver = function (driver) {
        return this.driver = driver;
    }
}

let car = new Car("golf", "volkswagen", 1988, 240, 1.3);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2005);
car.addDriver({name: 'Vasya', surname: "Shevchenko", age: 45});
console.log(car);
console.log('------------------------------------------------------');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car1 {
    constructor(model, producer, age, speed, engine) {
        this.model = model;
        this.producer = producer;
        this.age = age;
        this.speed = speed;
        this.engine = engine;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    }
    info() {
        console.log(`model - ${this.model}; producer - ${this.producer}; age - ${this.age}; speed - ${this.speed}; engine - ${this.engine};`)
    }
    increaseMaxSpeed(newSpeed) {
        return this.speed += newSpeed;
    }
    changeYear(newValue) {
        return this.age = newValue;
    }
    addDriver(driver) {
        return this.driver = driver;
    }
}

let car1 = new Car1("cadet", "opel", 1990, 250, 1.6);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(50);
car1.changeYear(2010);
car1.addDriver({name: 'Petya', surname: "Pupkin", age: 35});
console.log(car1);
console.log('------------------------------------------------------');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let cinderellas = [];
let namesCinderellas = ['Cinderella', 'Aurora', 'Belle', 'Jasmine', 'Ariel', 'Snow White', 'Rapunzel', 'Merida', 'Tiana', 'Mulan'];
for (let i = 0; i < 10; i++) {
    cinderellas.push(new Cinderella(namesCinderellas[Math.floor(Math.random() * namesCinderellas.length)], Math.floor(Math.random() * (35 - 18) + 18), 20 + i));
}
console.log(cinderellas);
console.log('------------------------------------------------------');

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella {
    constructor(name, age, size) {
        super(name, age, size);
        this.faundedSize = size;
    }
}

let prince = new Prince('Vasya', 35, 25);
console.log(prince);
console.log('------------------------------------------------------');

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (cinderella.size === prince.faundedSize) {
        console.log(cinderella);
    }
}
console.log('------------------------------------------------------');

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(cinderella => cinderella.size === prince.faundedSize));