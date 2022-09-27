console.log('Script working');

const ques= document.getElementById('ques');
const magicBall=document.getElementById('ball');

let ball={
    advice:['It is certain.','It is decidedly so.','Without a doubt.','Yes definitely.'
    ,'You may rely on it.','As I see it, yes.','Most likely.','Outlook good.','Yes.','Signs point to yes.','Reply hazy, try again.','Ask again later.','Better not tell you now.','Cannot predict now.','Concentrate and ask again.','Don\'t count on it.','My reply is no.','My sources say no.','Outlook not so good.','Very doubtful.'],

    getAdvice: function(ques){
        if(ques.value!=''){
            return this.advice[Math.floor(Math.random()*this.advice.length)];
        }
        else{
            return 'ask something';
        }
    }

}

magicBall.addEventListener('click',function(){
    let ans=ball.getAdvice(ques);
    console.log(ans);
    magicBall.innerHTML=ans;
});