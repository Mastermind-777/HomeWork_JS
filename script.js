let n = prompt('Введи целое положительное число');

for (;;) {

  if (isNaN(n)) {
      alert('Напиши цифрами, пожалуйста');
      n = prompt('Введи целое положительное число');}
      else if (n <= 0) {
      n = prompt('Введи целое положительное число');}
      else break;
      
}

function showMessage(n) {
  const arr = [];
  function checkByHayes(n) {
    if (arr.length === 0) {
      arr.push(n);
    }
    if (n === 1) {
      const result =
        arr.join(" ") +
        `\nКоличество шагов: ${arr.length - 1} Вершина: ${Math.max(...arr)}`;
      alert(result);
      return result;
    }
    if (n % 2 === 0) {
      n = n / 2;
      arr.push(n);
      return checkByHayes(n);
    } else {
      n = n * 3 + 1;
      arr.push(n);
      return checkByHayes(n);
    }
  }
  return checkByHayes(n);
}

showMessage(n);