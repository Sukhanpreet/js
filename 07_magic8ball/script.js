console.log('Script working');

const ques= document.getElementById('ques');
const err=document.querySelector('.err');
const magicBall=document.querySelector('.ball-inner');
const outerBall=document.querySelector('.ball-outer');

let ball={
    advice:['It is certain.','It is decidedly so.','Without a doubt.','Yes definitely.'
    ,'You may rely on it.','As I see it, yes.','Most likely.','Outlook good.','Yes.','Signs point to yes.','Reply hazy, try again.','Ask again later.','Better not tell you now.','Cannot predict now.','Concentrate and ask again.','Don\'t count on it.','My reply is no.','My sources say no.','Outlook not so good.','Very doubtful.'],
    ballState: false,
    getAdvice: function(ques){
        if(!this.ballState){
            this.ballState=true;
            return this.advice[Math.floor(Math.random()*this.advice.length)];
        }
        else{
           ques.value='';
           this.ballState=false;
           outerBall.classList.remove('shake');
           return;
        }   
    }
}

ques.addEventListener('focus',function(){
    if(ball.ballState){
        ques.value='';
        ball.ballState=false; 
        magicBall.innerHTML=`<div class="eight">8</div>`;
        outerBall.classList.remove('shake');
    }
});

magicBall.addEventListener('click',function(){
    if(ques.value==''){
        alert('You have to ASK something to get the answer');
    } else{
        outerBall.classList.add('shake');
        let ans=ball.getAdvice(ques);
        if(ans==undefined){
            magicBall.innerHTML=`<div class="eight">8</div>`
        }
        else{
            magicBall.innerHTML=`<div class="triangle"></div>
            <div class="text">${ans}</div>`;             
        }
    }
});