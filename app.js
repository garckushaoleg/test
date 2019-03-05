let result = 0;

//Первое модальное окно
let questionOne = prompt('Сколько будет 2+2', '');

if (questionOne === '4') {
    result+=10;
} else {
    result+=0;
}

//Подсказки
if (questionOne == '') {
    alert('Вы ничего не ввели!');
}

if (Number(questionOne)-Number(questionOne)!==0) {
    alert('Нужно было ввести число!');
}

//Второе модальное окно
let questionTwo = confirm('Солнце встает на востоке?');

if (questionTwo === true) {
    result+=10;
} else {
    result+=0;
}

//Третье модальное окно
let questionThree = prompt('Сколько будет 5 << 2', '');

if (questionThree === '20') {
    result+=10;
} else {
    result+=0;
}

//Подсказки
if (questionThree == '') {
    alert('Вы ничего не ввели!');
}

if (Number(questionThree)-Number(questionThree)!==0) {
    alert('Нужно было ввести число!');
}

alert('Вы набрали ' + result + ' баллов')