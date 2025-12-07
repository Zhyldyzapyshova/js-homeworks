/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив,
содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/


function findCommonElements(array1, array2) {
    let newArr = [];
    for(let i = 0; i < array2.length; i++){
        let element = array2[i];
        if(array1.includes(element) && !newArr.includes(element)){
            newArr.push(element)
        }
    }
    return newArr;
}
let array11 = ['apple', 'banana']
let array22 = ['banana', 'banana', 'banana', 'apple']

console.log(findCommonElements(array11, array22))