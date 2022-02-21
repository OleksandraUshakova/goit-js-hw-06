
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;
const onButtonDecrClick = event =>{
    value.textContent = counterValue -=1;
}
const onButtonIncrClick = event =>{
    value.textContent = counterValue +=1;
}
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#counter');

buttonDecr.addEventListener("click", onButtonDecrClick);
buttonIncr.addEventListener ("click", onButtonIncrClick);
const value = document.querySelector ('#value');

console.log(counterValue);
