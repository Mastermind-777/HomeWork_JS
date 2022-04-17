/*Написать программу, которая выполняет следующие операции:

        1. Запрашивает у пользователя число.
        2. Последовательно задает вопрос Сколько отнять/прибавить/умножить/разделить от предыдущего результата?
        3. По окончании вывести пользователю alert, содержащий формулу и результат например: ((((6 + 10) - 5) * 20) / 2 = 110).*/

const answer = prompt('Введите Ваше любимое число, пожалуйста:');
console.log(answer);
const answer1 = prompt('Сколько отнимем от Вашего любимого числа?');
console.log(answer1);
const answer2 = prompt('Сколько прибавим к результату?');
console.log(answer2);
const answer3 = prompt('Теперь давайте умножим то, что получилось на...');
console.log(answer3);
const answer4 = prompt('И, наконец, полученный результат разделим на...');
console.log(answer4);
const result = ((answer - answer1 + answer2) * answer3) / answer4;
alert('((' + answer + ' - ' + answer1 + ')' + ' + ' + answer2 + ')' + ' * ' + answer3 + ')' + ' / ' + answer4 + '=' + result);