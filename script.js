//1. Описати своїми словами навіщо потрібні функції у програмуванні.

// функция єто так сказать блок программі, т.е. формула которая вводится одн аз чтоб не прописывать ее несколько раз. т.е. прописываем ее один раз
// а позже используем ее просто подставляя нужные значения переменных
// 2. Описати своїми словами, навіщо у функцію передавати аргумент.

// потому что без аргументов функция не сможет производить действия (складывать, умножать, вычетать, умножать ) и не будет  работать,
// функции нужны аргументы чтобы функция производила с ними какието действия (математические) и возвращала нам результат

// 3. Що таке оператор return та як він працює всередині функції?
//  завершает выполнение текущей функции и возвращает её значение.



let firstNum = Number(prompt('Enter first number') );
let secondNum = Number(prompt('Enter second number') );


let operator = prompt ('математичну операцію, яку потрібно виконати. Сюди може бути введено +, -, *, /');


function result(a, b, operator) {
   if (operator == '+') {
        let summ = a + b;
        return summ;
   }
   else if(operator == '-') {
      let summ = a - b;
      return summ;
   }
   else if(operator == '*') {
      let summ = a * b;
      return summ;
   }
   else if(operator == '/') {
      let summ = a / b;
      return summ;
   }
   else {alert ('где-то ошибка, обновите страницу и попробуйте еще раз ');}
}

// result (5, 3);
console.log(result(firstNum, secondNum, operator));

alert ('РЕЗУЛЬТАТ В КОНСОЛИ, СПАСИБО ЗА ВНИМАНИЕ');






