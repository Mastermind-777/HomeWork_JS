/*При открытии страницы поприветствовать пользователя и спросить его имя, далее обратившись по имени, спросить как дела.
  Далее надо спросить, что он кушал на обед, после его ответа, надо ему вывести сообщение о том,
  что "К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки"
Далее попрощаться с пользователем и пользователь также должен попрощаться. В консоль вывести диалог формата:
  - R
  - Василий
  - Как Василий Ваши дела?
  - Пока не родила
- Чем потчевал сегодня барин?
  - Котлетки с пюрешкой
- К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....
- Пока бездушная машина*/

const answer = prompt('Здравствуйте. Представьтесь, пожалуйста');
console.log(answer);
const answer1 = prompt('Как,' + ' ' + answer + ', ' + 'Ваши дела?');
console.log(answer1);
const answer2 = prompt('Чем Вы кормили себя сегодня,' + ' ' + answer + '?');
console.log(answer2);
alert('К сожалению, я робот и не кушаю. Поэтому ваши человечьи вкусы мне не близки!');
const answer3 = prompt('Прощайте,' + ' ' + answer + '!');
console.log(answer3);