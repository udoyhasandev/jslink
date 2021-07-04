// Variables
//Use of var
console.log("Use of Var Started:")

var name = "orko"
console.log(name);
name = "udoy"
console.log(name);

//variable can also use _, $ 

var $name = "orko";
console.log($name);

var _name = "orko";
console.log(_name);

// var can't start with number but number will be inside
// var 2021name = "orko";
// console.log(2021name);

console.log("")
console.log("")
console.log("")

//variable let
console.log("Use of Let Started:")
let word = "orko";
console.log(word)
word = "udoy";
console.log(word);

let $word;
$word = "wow!";
console.log($word);

let _word = "OOPS!";
console.log(_word);

console.log("");
console.log("");
console.log("");

// let can't start with number but number will be inside
// let 2021name = "orko";
// console.log(2021name);

console.log("Use of Const Started:");

const static = "Hi";
console.log(static);

const $static = "Hi";
console.log($static);

const _static = "OOPS!";
console.log(_static);

//const doesn't work like this:
// const _static;
// _static = something;


//But we can't reassign const value for Ex
// static = something

const person = {
  n: "Orko",
  a: 19,
  p: "Programmer"
};

console.log(person)
console.log(person.n)
console.log(person.a)

//but we can change the object value
person.n = "udoy"
person.a = "19y 6m"
person.p = "Coder"

console.log(person)
console.log(person.n)
console.log(person.a)



// const can't start with number but number will be inside
// const 2021name = "orko";
// console.log(2021name);

const array = ['a', 'b', 'c', 'd']
console.log(array)
console.log(array[1])

array.push('e')
console.log(array)