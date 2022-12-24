console.log(`script working`);

const buyBtn=document.querySelector('.buy');
const counter=document.querySelector('.proCount');
const count=document.querySelector('.count');
const buttons=counter.querySelectorAll('[data-operation]');

buyBtn.addEventListener('click',function(){
    this.classList.remove('show');
    counter.classList.add('show');
});

buttons.forEach((btn)=>{
    
    btn.addEventListener('click',function(){
        if(btn.dataset.operation==='add'){
            count.innerHTML=parseInt(count.innerHTML)+1;
        }
        else{
            if(count.innerHTML!=0){
                count.innerHTML=parseInt(count.innerHTML)-1;
            }else{
                buyBtn.classList.add('show');
                counter.classList.remove('show');
            }
        }
    });
});


