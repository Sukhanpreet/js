console.log('script working');

const customName=document.getElementById('custom-name');
const createStory=document.querySelector('.create-story');
const storyArea= document.querySelector('.story');

let nameArr=['Willy the Goblin','Big Daddy','Father Christmas'];
let placeArr=['the soup kitchen','Disneyland','the White House'];
let eventArr=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

createStory.addEventListener('click',(e)=>{
    e.preventDefault();
    let name='Bob';
    let insertX;
    let insertY;
    let insertZ;
    let weight='300 pounds';
    let temp='94 fahrenheit';
    let story;
    if(customName.value!=''){
        name=customName.value;
    }
    insertX=randomValueFromArray(nameArr);
    insertY=randomValueFromArray(placeArr);
    insertZ=randomValueFromArray(eventArr);

    if(document.getElementById('uk').checked){
        weight=`${Math.round(300*0.0714286)} stone`;
        temp=`${Math.round((94-32) * 5 / 9)} centigrade`;
    }

    story=`It was ${temp} outside, so ${insertX} went for a walk. When they got to ${insertY}, they stared in horror for a few moments, then ${insertZ}. ${name} saw the whole thing, but was not surprised — ${insertX} weighs ${weight}, and it was a hot day.'`

    storyArea.innerHTML=story;
});


