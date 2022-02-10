let a = [1,2,3,4,5] ;
let b = [6,7,8,9] ;

for (let i = 0; i<a.length; i++);
for (let j = 0; j<b.length; j++);

const addition = (i,j) => {
    let x = i + j ;
    console.log("Subiraneto e =" ,x)
};

const subtract = (i,j) => {
    let x = i - j ;
    console.log("Izvajdaneto e =" ,x)
};

const multiply = (i,j) => {
    let x = i * j ;
    console.log("Umnojenieto e =" ,x)
};

const division = (i,j) => {
    let x = i/j;
    console.log("Deleneto e =",x)
};

console.log(addition());
console.log(subtract());
console.log(multiply());
console.log(division());