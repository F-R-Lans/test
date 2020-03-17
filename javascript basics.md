//primitive types = string, number, boolean, undefined, null
let isApproved = false //boolean Literal 
let lastName = undefined
let selectedColor = null;



//Cannot be a reserved name
//should be meaningful
//cannot start with a number (1name)
//cannot contain a space or hyphen (-)
//are case-sensitive



//reference types = object, array, function 
let person = {
    name: 'Mosh', 
    age: 30
    
}; //object literal

//dot notation 
person.name = 'john'; //default due to length

//bracket notation
let selection = 'name';
person[selection] = 'mary'; //useful if not known at runtime

console.log(person.name);

let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

//performing a task
function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName);
}
//calc
function square(number) {
    return number * number; 
}

console.log(square(2));

greet('John', 'smith');
