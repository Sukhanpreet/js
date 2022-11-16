// Remove element from array

const arrRemove=[1,2,3,4,5,6,7,8];

console.log('Pop '+arrRemove.pop());   //from last
console.log('Shift '+arrRemove.shift()); //from front


console.log(arrRemove);

const arrSplice=['one','two','three','four','five','six','seven','eight'];

let spliced=arrSplice.splice(3,1); // from specific index
console.log(spliced);


for(let i=0;i<arrSplice.length;i++){
    if(arrSplice[i]=='six'){
        let spliced=arrSplice.splice(i,1);
        console.log(spliced);
    }
}

// arrSplice.splice(0,); // remove all elements 

arrSplice.splice(3,0,12,13,14);

console.log(arrSplice);




