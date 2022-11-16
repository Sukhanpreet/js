const arr1=[1,2,3,4,5,6,7,8];
const arr2=['one','two','three'];


// join
let a=joinFunc(arr1);
console.log(a);

// concat
let b=concatFunc(arr1,arr2);
console.log(b);
console.log(arr2.concat(4,['five'],[6,7]));


// includes
let c= includeFunc(arr1,'2');
console.log(c);
console.log(arr1.includes(2,2)); // .includes(elem, start) : start optional


//indexOf
let d= indexOfFunc(arr2,'thre'); // return index if present if not return -1
console.log(d);


const arr3={'one':'one','two':'twp'};
// isArray
let e=Array.isArray(arr1); 
e=Array.isArray(arr3);  //object
e=Array.isArray('hello');  //string

console.log(e);

console.log('-------------');
console.log(arr1);


function joinFunc(arr){
    let a= arr1.join('| |');
    return {'join':a, 'type':typeof a};
}

function concatFunc(a1,a2){
    let b= a1.concat(a2,a1,a2);
    return {'concat': b, 'type': typeof b}
}

function includeFunc(arr,elem){
    return arr.includes(elem);
}

function indexOfFunc(arr,elem){
    return arr.indexOf(elem);
}


// console.clear();

// let print=JSON.parse('{"one":"one","two":"two"}');

// console.log(print);


// var text = '{ "var1":"Amanda", "gender":"male"}';
          
// var obj = JSON.parse(text, function (key, value) {
//     if (value == "male") {
//         return ("female");
//     } else {
//         return value;
//     }
// });

// console.log(`${obj.var1}  ${obj.gender}`);
// console.log(`${obj} : ${typeof obj}`);

// var obj2=JSON.stringify(obj);
// console.log(`${obj2} : ${typeof obj2}`);

// const value = {
//     Company: "GeeksforGeeks",
//     Estd: 2009,
//     location: "Noida"
// };
// const result = JSON.stringify(value);
// console.log("value of result = " + result);


let obj = {
    name: "GFG",
    add : {
        country: "India",
        state : {
            code : "JS",
            topic : "stringify"
        }
    }
}
 
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.add.state.topic  = "stringify json object";
console.log(obj);
console.log(obj2);

var value = ["Logan", 21, "Peter", 24];
    var result = JSON.stringify(value);
 result=JSON.parse(result);
console.log(result);