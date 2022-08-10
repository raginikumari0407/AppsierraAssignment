
let name1 = "Rai";
function myFunc() {
    let name1 = "Ragini";
    console.log(name1);
}

myFunc(); //function scope

console.log(name1); //local scope

//global scope
function myFunc1(){
    console.log(name1);
}
myFunc1();