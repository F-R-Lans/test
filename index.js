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

//oop encapsulation removes parameters and makes code cleaner