let number;

while (true) {
    number = prompt("Введите число больше 100:", "");
    
    if (number === null || number === "") {
        alert("Отменено");
        break;
    }

    number = Number(number);
    if (number > 100) {
        alert("Спасибо!");
        break;
    } else {
        alert("Введите число больше 100!");
    }
}
