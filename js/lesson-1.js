//console.log("Hello blended");
//prompt, alert, confirm;
// let newAlert = alert(`Hello blended`);
// console.log(newAlert);undefined

// const userLogin = prompt(`you login`);
// console.log(userLogin);//login

// const isSure = confirm(`Are you sure?`);
// console.log(isSure);//true
//const number = Number(prompt("Enter number:"));
// if (numberumber === 10) {
//     alert(`true`);
// } else {
//     alert(`false`);
//  }
// const number = Number(prompt("Enter number:"));
// number === 10 ? alert(`true`) : alert(`false`);

//#2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 15) {
//     alert(`${min} входить в 1 четверть`);
// } else if (min <= 30) {
//    alert(`${min} входить в 2 четверть`);
// } else if (min <= 45) {
//     alert(`${min} входить в 3 четверть`);
// } else {
//     alert(`${min} входить в 4 четверть`);
// }


//#3
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
// const num = Number(prompt(`Введіть число від 1 до 4`));
// let result;
// switch (num) {
//     case 1:
//         result = `winter`;
//         break;
//     case 2:
//         result = `spring`;
//         break;
     
//     case 3:
//         result = `summer`;
//         break;
//     case 4:
//         result = `autumn`;
//         break;
//     default:
//       alert ("Вибачте, але ви маєте ввести значення від 1 до 4 включно");
// }
// console.log(result);

//#4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
// const minutes = Number(prompt(`Введіть кількість хвилин`));
// let hours = Math.floor(minutes / 60);
// const stringHours = String(hours).padStart(2, 0);
// const stringMinutes = String(minutes % 60).padStart(2, 0);
// console.log(`${stringHours}:${stringMinutes}`);


//#5
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt("Введіть логін");
// console.log(login);
// if (login === "Адмін") {
//    const password = prompt("Введіть пароль");
// } else if (password === null || password === "") {
//     alert("Скасовано");
// } else if (password === "Я головний") {
//     alert("Добрий день!");
// } else {
//     alert(`Невірний пароль!`)
// }

//#6

//#7

//№8Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
// function min(a, b) {
    
//     if (typeof a !== "number" || typeof b !== "number") {
//         console.log('Not a number!');
//     }
//     console.log(Math.min(a, b));
// }

// min("9t", 98);