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

/*OOP pillars:
1: encapsulation 
2: abstraction 
3: inheritance
4: polymorphism
*/

//encapsulation 

/*let baseSalary = 30_000;
let overtime = 10;
let rate = 20; 

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overTime * rate);
} */

let employee = {
    baseSalary: 30_000,
    overtime: 10, 
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();

//oop encapsulation removes parameters and makes code cleaner/reusable

//abstraction makes for a simpler interface and reduces the impact of change

//inheritance helps eliminate redundant code by defining several elements as one and having others inherit

//polymorphism (many forms) refactors switch/case statements 


\" will "escape" quotes so it won't be considered the end
single quotes ', and backticks do the same. 

let and var are almost the same, the scope does change, learn more. 

/***** 
CODE OUTPUT 
\' single quote
\" double quote 
\\ backslash
\n newline
\r carriage return (what)
\t tab
\b backspace 
\f form feed 

ex: var myStr = "FirstLine\n\t\\SecondLine\nThirdLine" will log three seperate lines. 

ADD A SPACE WHEN CONCOTINATING 

list for remembering 

1: dot notation 
2: "this", is weird

madlibs ex 

function wordBlanks(myNoun, myAjective, myVerb myAdverb)

var result = "";
result += "the " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb.;

console.log(wordBlanks("dog", "big", "ran", "quickly"));

array uses brackets [], use comma's with any datatype 

nest arrays with more brackets 

logging works the same