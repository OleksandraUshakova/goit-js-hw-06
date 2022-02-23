// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const textSpan = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');
console.log(inputRef)
console.log(textSpan.textContent);

inputRef.addEventListener('input', function(event){
    textSpan.style.fontSize = `${event.currentTarget.value}px`;
})