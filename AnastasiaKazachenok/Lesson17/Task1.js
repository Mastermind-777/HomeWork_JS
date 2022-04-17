/*
Если　a = 1, b = 2, c = 3 ... z = 26

Тогда l + o + v + e = 54

и f + r + i + e + n + d + s + h + i + p = 108

Получается что дружба в два раза больше чем любовь :-)

Напишите функцию которая принимает слово и возвращает число соответствующее слову.

1. Не использовать объекты. Мы их на следующем занятии только пройдём.

2. Максимально применять методы массива где возможно.

3. Можно скопировать как константу стрингу с алфавитом 'абв...АБВ...';

*/

// const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getSum(total,num) {return total + num};
function val(article,symbol,numb){ rgxp = new RegExp(numb,'gim'); text = article.toLowerCase();
if (text.indexOf(symbol) > -1){
  result = text.split(symbol).join(numb).match(rgxp).map(Number).reduce(getSum);}
  else{ result=0 };
  return result;}

String.prototype.abjad = function() {
a = val(this,'a','1'); b = val(this,'b','2'); c = val(this,'c','3'); d = val(this,'d','4');
e = val(this,'e','5'); f = val(this,'f','6'); g = val(this,'g','7'); h = val(this,'h','8');
i = val(this,'i','9'); j = val(this,'j','10'); k = val(this,'k','11'); l = val(this,'l','12');
m = val(this,'m','13'); n = val(this,'n','14'); o = val(this,'o','15'); p = val(this,'p','16');
q = val(this,'p','17'); r = val(this,'r','18'); s = val(this,'s','19'); t = val(this,'t','20');
u = val(this,'u','21'); v = val(this,'v','22'); w = val(this,'w','23'); x = val(this,'x','24');
y = val(this,'y','25'); z = val(this,'z','26');
return a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+r+s+t+u+v+w+x+y+z
};

Ask();
function Ask() {
    text = prompt('Please enter your word');
    if (text != null) {
    alert('Gematrical value of the word is: ' + text.abjad());
    }
}