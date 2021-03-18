const div=document.getElementById('change-me');
const button=document.getElementById('change-button');
const input=document.getElementById('change-input');

const blackButton=document.getElementById('black');
const purpleButton=document.getElementById('purple');
const greenButton=document.getElementById('green');
const background=document.getElementById('middle');

const liberationSans=document.getElementById('liberation-sans');
const firaSans=document.getElementById('fira-sans');
const ubuntu=document.getElementById('ubuntu');

let count = 0;

button.addEventListener('click', () => {
    const userTyped=input.value;

    div.textContent=userTyped+"\n\n Name changed "+count+" times";
    count++;
});

blackButton.addEventListener('click', () => {
    background.style.backgroundColor='black';
});

purpleButton.addEventListener('click', () => {
    background.style.backgroundColor='purple';
});

greenButton.addEventListener('click', () => {
    background.style.backgroundColor='green';
});

liberationSans.addEventListener('click', () => {
    div.style.fontFamily='liberation sans';
});

firaSans.addEventListener('click', () => {
    div.style.fontFamily='fira sans';
});

ubuntu.addEventListener('click', () => {
    div.style.fontFamily='ubuntu';
});