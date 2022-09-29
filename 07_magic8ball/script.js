console.log('Script working');

const ques= document.getElementById('ques');
const err=document.querySelector('.err');
const magicBall=document.getElementById('ball');

let ball={
    advice:['It is certain.','It is decidedly so.','Without a doubt.','Yes definitely.'
    ,'You may rely on it.','As I see it, yes.','Most likely.','Outlook good.','Yes.','Signs point to yes.','Reply hazy, try again.','Ask again later.','Better not tell you now.','Cannot predict now.','Concentrate and ask again.','Don\'t count on it.','My reply is no.','My sources say no.','Outlook not so good.','Very doubtful.'],
    ballState: false,
    getAdvice: function(ques){
        if(!this.ballState){
            this.ballState=true;
            let ans=this.advice[Math.floor(Math.random()*this.advice.length)];
            magicBall.innerHTML=ans;
        }else{
           ques.value='';
           magicBall.innerHTML='8'; 
           this.ballState=false;
        }
        
    }

}

ques.addEventListener('focus',function(){
    if(ball.ballState){
        ques.value='';
        magicBall.innerHTML='8'; 
    }
});

magicBall.addEventListener('click',function(){
    if(ques.value==''){
        alert('You have to ASK something to get the answer');
    } else{
        ball.getAdvice(ques);   
    }
    
});