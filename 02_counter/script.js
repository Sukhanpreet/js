let count=0;

let counter=document.getElementById('num');

counter.innerHTML=0;

counterColor();

let decreaseButton=document.getElementById('decrease');
let resetButton=document.getElementById('reset');
let increaseButton=document.getElementById('increase');

decreaseButton.addEventListener('click',()=>{
    count-=1;
    counter.innerHTML=count;
    counterColor();
});

increaseButton.addEventListener('click',()=>{
    count+=1;
    counter.innerHTML=count;
    counterColor();
});

resetButton.addEventListener('click',()=>{
    count=0;
    counter.innerHTML=count;
    counterColor();
});

function counterColor(){
      if(counter.innerHTML==0){
        counter.style.color='blue';
    }else if(counter.innerHTML>0){
        counter.style.color='green';
    } else{
        counter.style.color='red';
    }
}



