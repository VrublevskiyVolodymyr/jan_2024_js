// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';
console.log('string1.length = ' + string1.length);
console.log('string2.length = ' + string2.length);
console.log('string3.length = ' + string3.length);
console.log("-------------------------------------------------")

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());
console.log("-------------------------------------------------")

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let string4 = 'HELLO WORLD';
let string5 = 'LOREM IPSUM';
let string6 = 'JAVASCRIPT IS COOL';

console.log(string4.toLowerCase());
console.log(string5.toLowerCase());
console.log(string6.toLowerCase());
console.log("-------------------------------------------------")

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str = ' dirty string   ';
console.log(str.trim());
console.log("-------------------------------------------------")

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let str7 = 'Ревуть воли як ясла повні';

const stringToarray = str => {
    return str.split(" ");
}

let arr = stringToarray(str7);
console.log(arr);
console.log("-------------------------------------------------")

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.]
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(numbers.map(value => value.toString()));
console.log("-------------------------------------------------");

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];
const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    } else console.log('Error');
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log("-------------------------------------------------");

// ==========================


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let sortCoursesAndDurationArray =
    coursesAndDurationArray
        .sort((a, b) => b.monthDuration - a.monthDuration)
        .filter(value => value.monthDuration > 5);
console.log(sortCoursesAndDurationArray);
console.log("-------------------------------------------------");

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let transformedArray = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, ...value};
});
console.log(transformedArray);
console.log("-------------------------------------------------");

// =========================


//     описати колоду карт (від 6 до туза без джокерів)
let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];
let color = ['red', 'black'];


const deckOfCards = (cardSuit, value, color) => {
    let cards = [];

    for (let i = 0; i < value.length - 1; i++) {
        for (const card of cardSuit) {
            let colorCard;
            if ((card === 'clubs') || (card === 'spade')) {
                colorCard = 'black'
            } else if ((card === 'diamond') || (card === 'heart'))
                colorCard = 'red';
            cards.push({value: value[i], cardSuit: card, color: colorCard})
        }
    }
    for (const col of color) {
        cards.push({value: value[value.length - 1], color: col})
    }
    return cards;
}

let cards = deckOfCards(cardSuit, value, color);
console.log(cards);
console.log("-------------------------------------------------");

// - знайти піковий туз
let aceofspades = cards.find(value => value.value === 'ace' && value.cardSuit === 'spade');
console.log(aceofspades);
console.log("-------------------------------------------------");

// - всі шістки
let allsixes = cards.filter(value => value.value === '6');
console.log(allsixes);
console.log("-------------------------------------------------");

// - всі червоні карти
let allredcards = cards.filter(value => value.color === 'red');
console.log(allredcards);
console.log("-------------------------------------------------");

// - всі буби
let allbubs = cards.filter(value => value.cardSuit === 'diamond');
console.log(allbubs);
console.log("-------------------------------------------------");

// - всі трефи від 9 та більше
let clubs = cards.filter(value => ((value.cardSuit === 'clubs') && (value.value >= '9') || (value.cardSuit === 'clubs') && (value.value === '10')))
console.log(clubs);
console.log("------------------------------***-------------------");


// or

let sortCards = cards.reduce((accumulator, card) => {
        if (card.value === 'jack' && card.cardSuit === 'spade') {
            accumulator.aceofspades.push(card)
        }
        if (card.value === '6') {
            accumulator.allsixes.push(card)
        }
        if (card.color === 'red') {
            accumulator.allredcards.push(card)
        }
        if (card.cardSuit === 'diamond') {
            accumulator.allbubs.push(card)
        }
        if ((card.cardSuit === 'clubs') && (card.value >= '9') || (card.cardSuit === 'clubs') && (card.value === '10')) {
            accumulator.clubs.push(card)
        }
        return accumulator
    },
    {aceofspades: [], allsixes: [], allredcards: [], allbubs: [], clubs: []})
console.log(sortCards);
console.log("-------------------------------------------------");


//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let sortCardSuit = cards.reduce((accumulator, card) => {
        switch (card.cardSuit) {
            case 'spade':
                accumulator.spades.push(card);
                break;
            case 'diamond':
                accumulator.diamonds.push(card);
                break;
            case 'heart':
                accumulator.hearts.push(card);
                break;
            case 'clubs':
                accumulator.clubs.push(card);
                break;
            default:
                console.log("joker");
        }
        return accumulator
    },
    {spades: [], diamonds: [], hearts: [], clubs: []})
console.log(sortCardSuit);
console.log("-------------------------###------------------------");

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(value => value.modules.includes('sass')));
console.log("-------------------------------------------------");


// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(value => value.modules.includes('docker')));
console.log("-------------------------------------------------");
