let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
a = Number(a);
b = Number(b);
alert(a + b);

//Проблема в том, что prompt возвращает введенное значение как строку, а не как число