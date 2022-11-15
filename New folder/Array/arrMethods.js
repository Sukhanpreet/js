// Array methods

console.clear();

let myArr=['one',2,'three',false,5,{'num':6,'name':'six'},[7,'seven']];

// add at the end ===========================
for(let i=0;i<5;i++){
    myArr[myArr.length]='counter '+i;
}



// remove from the end======================
for(let i=0;i<2;i++){
    myArr.length -= 1;

}

// add at the front========================
let temp=[];
for(let i=4;i>=0;i--){
    temp[temp.length]=`counter ${i}`;
}

for(let i=0;i<myArr.length;i++){
    temp[temp.length]=myArr[i];
}
myArr=temp;




// // remove for front ========================
function removeFirst(arr){
    let temp=[];
    for(let i=1;i<arr.length;i++){
        temp[temp.length]=arr[i];
    }
    arr=temp;
    return arr;
}
myArr=removeFirst(myArr);



console.log(myArr);
