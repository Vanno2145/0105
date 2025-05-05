// let name = prompt("Введите имя: ")
// let surname = prompt("Введите фамилию: ")
// let age = parseInt(prompt("Введите возраст: "))
// let gender = prompt("Введите пол: ")

// let rez = confirm(`Имя: ${name} \nФамилия: ${surname} \nВозраст: ${age} \nПол: ${gender} \n\nВсё верно?`)

// if(rez){
//     alert("Спасибо!")
// }else{
//     let choice = confirm("Желаете повторить ещё раз?")
//     if(choice){
//         let name = prompt("Введите имя: ")
//         let surname = prompt("Введите фамилию: ")
//         let age = parseInt(prompt("Введите возраст: "))
//         let gender = prompt("Введите пол: ")
//     }else{
//         alert("Удачи!")
//     }
// }


//Task 2


// let ticket = parseInt(prompt("Enter ticket: "))

// let first_n = ticket % 10 
// let second_n = parseInt(ticket %100 / 10) 
// let thid_n = parseInt(ticket %1000 / 100) 
// let fourth_n = parseInt(ticket %10000 / 1000) 
// let fifth_n = parseInt(ticket %100000 / 10000) 
// let sixth_n = parseInt(ticket %1000000 / 100000) 

// if(first_n + second_n + thid_n == fifth_n + fourth_n + sixth_n){
//     alert("Lucky ticket!")
// }else{
//     alert("Not lucky ticket!")
// }


//Task 3


// let min = 0;
// let max = 100;
// let num;
// let att = 0;

// alert("Загадайте число от 0 до 100. Отвечайте:\n1 — если ваше число больше\n2 — если ваше число меньше\n3 — если я угадал");

// while (true) {
//     att++;
//     num = min + parseInt((max - min) / 2);
    
//     let ans = prompt(`Ваше число > ${num} (1), < ${num} (2) или == ${num} (3)?`);
    
//     if (ans === '1') {
//         min = num + 1;
//     } else if (ans === '2') {
//         max = num - 1;
//     } else if (ans === '3') {
//         alert(`Число: ${num} \n  Попыток: ${att}`);
//         break;
//     } else {
//         alert("Нужно ввести 1, 2 или 3");
//         att--;
//     }

//     if (min > max) {
//         alert("Такого числа не может быть");
//         break;
//     }
// }

