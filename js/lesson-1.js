//console.log("Hello blended");
//prompt, alert, confirm;
// let newAlert = alert(`Hello blended`);
// console.log(newAlert);undefined

// const userLogin = prompt(`you login`);
// console.log(userLogin);//login

// const isSure = confirm(`Are you sure?`);
// console.log(isSure);//true


//№1
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().
//const number = Number(prompt("Enter number:"));
// if (number === 10) {
//     alert(`true`);
// } else {
//     alert(`false`);
//  }
// const number = Number(prompt("Enter number:"));
// number === 10 ? alert(`true`) : alert(`false`);

//№2
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


//№3
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

//№4
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


//№5
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
//   if (login === null || login === "") {
//     alert("Сanceled");
// } else if (login !== "Admin") {
//     alert("I don't know you");
// }
//   else {
//     const password = prompt("Enter password");

//  if (password === null || password === "") {
//     alert("Сanceled");
//     }
//  else if (password !== "I am head") {
//      alert("incorrect password")
// } else {
//     alert("Hello boss!")
// }
// }


//№6
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }


//№7
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// function getNumbers(min, max) {
//     let totaleven = 0;
//     let totalodd = 0;
//     for (max; max >= min; max--) {
//         console.log(max);
//         if (max % 2 === 0) {
//             totaleven += max;
//         }
//         else if (max % 2 === 1 ) {
//             totalodd += max;
//         }
//     }
//     console.log(`Сума парних чисел:${totaleven}; Сума непарних чисел:${totalodd}`);
// }
// getNumbers(0, 10);


//№8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
// function min(a, b) {
    
//     if (typeof a !== "number" || typeof b !== "number") {
//         console.log('Not a number!');
//     }
//     console.log(Math.min(a, b));
// }
// min("9", 98);

//№9
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).
// function isAdult(age) {
    
//     if (age < 18) {
//         confirm = (`Are you sure`);
//         alert (`Ви неповнолітній, Вам лише ${age} років`);
//     } else {
//         alert (`Вітаємо Вас, Шановний`);
//     }
// }
// isAdult(prompt(`Enter You age`));


//№10
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
// function fizzBuzz(num) {
//     let res3 = num / 3;
//     let res5 = num / 5;
//     if (num > 1 && num % 3 === 0 && num % 5 === 0) {
//     console.log(`fizzbuzz...ділиться на 3 та 5. Результат /3= ${res3}, Результат /5 = ${res5} `);   
//     }
//     else if (num > 1 && num % 5 === 0) {
//         console.log(`buzz...ділиться на 5. Результат /5 = ${res5}`);
//     }
//     else if (num > 1 && num % 3 === 0){
//         console.log(`fizz... ділиться на 3. Результат /3= ${res3}`);
//     }
//     else {
//         console.log(`Число не ділиться на 3 та 5.`);
//     }
// }
// fizzBuzz(Number(prompt(`Ця функія дозволяє знайти число, яке ділиться на 3, на 5 та 3 і 5 одночасно. Enter You number`)));