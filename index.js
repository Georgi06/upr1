let a = [1,2,3,4];
let b = [6,7,8,9];

function addition(i,j){
    let x = i + j ;
    return x ;
};

function subtract (i,j){
    let x = i - j ;
    return x ;
};

function multiply(i,j){
    let x = i * j ;
    return x ;
};

function division(i,j) {
    let x = i/j;
    return x.toFixed(2) ;
};

//console.log(){addition(),subtract(),multiply(),division()};

// console.log(addition(a[0],b[0]));
// console.log(subtract(a,b));
// console.log(multiply(a,b));
// console.log(division(a,b));

let m =[];
let m1 =[];
let m2 =[];
let m3 =[];

for(let i = 0; i<a.length; i++){
    m.push(addition(a[i],b[i]));
    m1.push(subtract(a[i],b[i]));
    m2.push(multiply(a[i],b[i]));
    m3.push(division(a[i],b[i]));
};

console.log("Addition",m);
console.log("subtract",m1);
console.log("multiply",m2);
console.log("division",m3);

