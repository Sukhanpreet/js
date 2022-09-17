console.log("Script Running");


const timer=document.querySelector('.timer');
const playPause= document.querySelector('.playpausebtn');
const restart=document.querySelector('.restartbtn');

let second=0;
let minute=0;
let hour=0;

let leadingSecond=0;
let leadingMintue=0;
let leadingHour=0;

function startstoptimer(){
    second++;
    if(second/60 === 1){
        second=0;
        minute++;
        if(minute/60 === 1){
            minute=0;
            hour++;
        }
    }

    if(second<10){
        leadingSecond='0'+ second.toString();
    }
    else{
        leadingSecond=second;
    }
    if(minute<10){
        leadingMintue='0'+ minute.toString();
    }
    else{
        leadingMintue=minute;
    }
    if(hour<10){
        leadingHour='0'+ hour.toString();
    }
    else{
        leadingHour=hour;
    }

    timer.innerHTML= leadingHour+":"+ leadingMintue + ":" + leadingSecond;
}


let timerState='stopped';
let timerInterval;

playPause.addEventListener('click',()=>{
    if(timerState==='stopped'){
        timerState='running';
        timerInterval=setInterval(startstoptimer,10);
        playPause.innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`
    }else{
        timerState='stopped';
        clearInterval(timerInterval);
        playPause.innerHTML=`<i class="fa-solid fa-play" id="play"></i>`
    }
})


restart.addEventListener('click',()=>{
    clearInterval(timerInterval);
    timer.textContent='00:00:00';
    playPause.innerHTML=`<i class="fa-solid fa-play" id="play"></i>`
    second=0;
    minute=0;
    hour=0;
})