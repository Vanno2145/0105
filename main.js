//1

// let str = "Зтут как5ой то т4.?екст ! 1 2 ";
// let ch = 0, digit = 0, other = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] >= '0' && str[i] <= '9') {
//     digit++;
//   } else if ((str[i] >= 'a' && str[i] <= 'я') || (str[i] >= 'A' && str[i] <= 'Я')) {
//     ch++;
//   } else {
//     other++;
//   }
// }
// document.writeln(`Количество букв = ${ch.toString().fontcolor("red")}<br>`);
// document.writeln(`Количество цифр = ${digit.toString().fontcolor("red")}<br>`);
// document.writeln(`Количество других символов = ${other.toString().fontcolor("red")}<br>`);



//2



// let one = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"]
// let f_ten = ["одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семьнадцать", "восемьнадцать", "девятнадцать"]
// let ten = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "смдесят", "восемдесят", "девяносто"]

// let number = parseInt(prompt("Enter number: "))
// let f_num = parseInt(number / 10)
// let s_num = number % 10
//     if(number < 9 && number > 0){
//         document.writeln(one[number-1])
//     }else if(number > 9 && number < 19){
//         document.writeln(f_ten[number % 10 - 1])
//     }else{
//         document.writeln(ten[f_num-2])
//         document.writeln(one[s_num-1])
//     }



//3



// let str = "There Is S8ome t5e1Xt";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] >= 'A' && str[i] <= 'Z') {
//     document.writeln(str[i].toLowerCase());
//     continue
//   }else if(str[i] >= 'a' && str[i] <= 'z'){
//     document.writeln(str[i].toUpperCase());
//     continue
//   }else if(str[i] >= '0' && str[i] <= '9'){
//     document.writeln("_")
//     continue
//   }

// }



//4


// let str = "background-color"
// let res = ""

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "-") {
//     i++
//     if (i < str.length) {
//       res += str[i].toUpperCase()
//     }
//   } else {
//     res += str[i]
//   }
// }

// document.writeln(res)



//5




// let str = "cascading style sheets"
// let res = ""
// let words = str.split(" ")

// for (let i = 0; i < words.length; i++){
//   res += words[i][0].toUpperCase()
// }

// document.writeln(res)



//6





// let words = [];
// while (true) {
//   let word = prompt("Enter string(enter '-' to end): ");
//   if (word === "-") {
//     break;
//   } else {
//     words.push(word);
//   }
// }

// document.writeln(words.join(" "));



//7



// let Sum = (a, b) => a + b;
// let Min = (a, b) => a - b;
// let Mult = (a, b) => a * b;
// let Div = (a, b) => a / b;

// let a = parseFloat(prompt("Введіть перше число:"))
// let b = parseFloat(prompt("Введіть друге число:"))
// let s = prompt("Введіть операцію (+, -, *, /): ")

// switch (s) {
//   case '+':
//     document.write(`${Sum(a, b)}`);
//     break;
//   case '-':
//     document.write(`${Min(a, b)}`);
//     break;
//   case '*':
//     document.write(`${Mult(a, b)}`);
//     break;
//   case '/':
//     if (b === 0) {
//       document.write("ділення на нуль");
//     } else {
//       document.write(`${Div(a, b)}`);
//     }
//     break;
//   default:
//     document.write("Невідома операція");
// }



//8


// let adress = "https://itstep.org/ua/about"
// let addressInfo = []

// let start = adress.indexOf("://")
// let protocol = ""
// if (start != -1) {
//   protocol = adress.substring(0, start + 3)
//   adress = adress.substring(start + 3)
// }

// let end = adress.indexOf("/")
// let domain = ""
// let path = ""
// if (end !== -1) {
//   domain = adress.substring(0, end)
//   path = adress.substring(end)
// } else {
//   domain = adress
//   path = "/"
// }

// document.write("Protocol:", protocol)
// document.write("Domain:", domain)
// document.write("Path:", path)




//9



// let textWithNumbers = "10/08/2020"
// let sep = "/"
// let numbersList = []
// let currentNumber = ""

// for (let i = 0; i < textWithNumbers.length; i++) {
//   if (textWithNumbers[i] === separator) {
//     numbersList.push(currentNumber)
//     currentNumber = ""
//   } else {
//     currentNumber = currentNumber + textWithNumbers[i]
//   }
// }
// numbersList.push(currentNumber);

// document.write("Original Text:", textWithNumbers)
// document.write("Separated Numbers:", numbersList)




//10



let template = "Today is %1.%2.%3"
let wordsToInsert = ["Monday", 10, "08.2025"]
let finalText = ""

for (let i = 0; i < template.length; i++) {
  if (template[i] === '%' && i + 1 < template.length) {
    let wordNumber = parseInt(template[i + 1])
    if (!isNaN(wordNumber) && wordNumber >= 1 && wordNumber <= wordsToInsert.length) {
      finalText = finalText + wordsToInsert[wordNumber - 1]
      i++
    } else {
      finalText = finalText + template[i]
    }
  } else {
    finalText = finalText + template[i]
  }
}

document.write("Template:", template)
document.write("Words to Insert:", wordsToInsert)
document.write("Final Text:", finalText)

