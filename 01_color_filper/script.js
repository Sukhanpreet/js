let colorArr=[
    "#023047",
    "#e63946",
    "#f08080",
    "darkorchid",
    "forestgreen",
    "hsl(174, 72%, 56%)",
    "hsl(146, 50%, 36%)",
    "rgb(220, 147, 220)",
    "rgb(128, 0, 0)"
];

let colorName= document.querySelector('h2');

changeColor();
let button=document.getElementById('button');

button.addEventListener('click',changeColor);

function changeColor(){
    let randomColor=colorArr[Math.floor(Math.random()*colorArr.length)];
    document.body.style.backgroundColor = randomColor;

    colorName.innerHTML=randomColor;
    colorName.style.color=randomColor;
}