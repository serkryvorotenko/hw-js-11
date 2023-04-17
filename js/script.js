const hideText = document.getElementById('hide-text');
const innerParagraph = document.getElementById('inner__paragraph');
let isHidden = false;
hideText.onclick = onButtonHideText;

function onButtonHideText() {
    const buttonMinMax = document.getElementById('button__min-max');

    innerParagraph.classList.toggle('hidden');
    buttonMinMax.classList.toggle('hidden');

    if (isHidden) {
        isHidden = false;
        hideText.innerText = 'Скрыть текст';
    } else {
        isHidden = true;
        hideText.innerText = 'Показать текст';
    }
}

const buttonMax = document.getElementById('button__max');
const buttonMin = document.getElementById('button__min');
let fontSize = 16;

function fontZoom() {
    fontSize++
    innerParagraph.style.fontSize = fontSize + 'px';
}

function fontSmall() {
    fontSize--
    innerParagraph.style.fontSize = fontSize + 'px';
}

buttonMax.onclick = fontZoom;
buttonMin.onclick = fontSmall;