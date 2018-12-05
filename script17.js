function calculateSum(x, y) {
    var sum = x + y;
    return sum;
}
x = prompt("Введите первое число", 'Первое слагаемое=');
y = prompt("Введите второе число", 'Второе слагаемое=');
alert(calculateSum(x, y).toFixed(2));
