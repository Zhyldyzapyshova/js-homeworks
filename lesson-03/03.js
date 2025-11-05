// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    let theLargest;
    if ((num1 >= num2) && (num1 >= num3)) {
        theLargest = num1;
    } else if ((num2 >= num1) && (num2 >= num3)) {
        theLargest = num2;
    } else {
        theLargest = num3;
    }
    return theLargest;
}
console.log(findLargest())




