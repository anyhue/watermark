const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const textForm = document.querySelector("#text-form");
const textInput = document.querySelector("#text-input");
const fontFamilySelect = document.querySelector("#font-family-select");
const fontSize = document.querySelector("#font-size");
const textColor = document.querySelector("#color");

const option = document.querySelector("option");
let fontFamily = 'ONE-Mobile-Regular';

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

function textSubmit(event) {
    event.preventDefault();

    if(fontFamily === 'ONE-Mobile-Regular') {
        ctx.font = '30px ONE-Mobile-Regular';} 
    else if(fontFamily === 'ONE-Mobile-POP') {
        ctx.font = '30px ONE-Mobile-POP'}
    else if(fontFamily === 'SunBatang-Light') {
        ctx.font = '30px SunBatang-Light';}
    
    let count = 1
    while(30*count <= CANVAS_HEIGHT) {
        ctx.fillText((textInput.value + "   ").repeat(50), 0, 50*count);
        count ++;
        if(30*count > CANVAS_HEIGHT) break;
    }
    textInput.value = "";
}

function colorChange(event) {
    ctx.fillStyle = event.target.value;
}

/*
function fontSizeSelect(event) {
    console.log(event);
}
*/

function fontChange(event) {
    if(event.target.value === "ONE 모바일고딕") {
        fontFamily = 'ONE-Mobile-Regular';}
    else if(event.target.value === "ONE 모바일POP") {
        fontFamily = 'ONE-Mobile-POP';}
    else if(event.target.value === '순바탕') {
        fontFamily = 'SunBatang-Light';}
}

textForm.addEventListener("submit", textSubmit);
textColor.addEventListener("change", colorChange);
// fontSize.addEventListener("click", fontSizeSelect);
fontFamilySelect.addEventListener("change", fontChange);