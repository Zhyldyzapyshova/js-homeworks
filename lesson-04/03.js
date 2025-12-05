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
    for(let i = 0; i < array1.length; i++){
        let element = array1[i];
        if(array2.includes(element) && !newArr.includes(element)){
            newArr.push(element)
        }
    }
    return newArr
}

let array11 = [1, 2, 3, 5, 6, 2]
let array22 = [2, 4, 6, 7 ]

console.log(findCommonElements(array11, array22))