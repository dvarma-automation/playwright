let x = 'typescript';
console.log(`hello ${x}`);
let y = 10;
console.log(`${y}`);
let z;
console.log(z);
let list1 = [1, 2, 3, 4];
let list2 = ['a', 'b', 'c', 'd'];
console.log(list1[0]);
console.log(list2[2]);
let tuple1;
tuple1 = [8, 'john'];
console.log(tuple1);
console.log(tuple1[0]);
console.log(tuple1[1].substring(2));
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 40] = "Green";
    color[color["Blue"] = 11] = "Blue";
})(color || (color = {}));
;
// let e: color=color.Blue;
// console.log(e);
let colorIndex = color.Green;
console.log(colorIndex);
let colorName = color[11];
console.log(colorName);
let unsure = 'dynamic';
console.log(unsure);
let anyValue;
anyValue = 1;
anyValue = 'One';
anyValue = true;
console.log(anyValue);
//anyValue()
//anyValue.toUpperCase();
console.log(anyValue);
function returnNothing() {
    console.log('hello world');
}
returnNothing();
//union type
let u;
u = 10;
u = false;
console.log(u);
//function
function a() {
    console.log('Hello finctions');
}
a();
function sum(num1, num2) {
    if (num2)
        return (num1 + num2);
    else
        return (num1);
}
console.log(sum(3, 4));
console.log(sum(3));
function sum2(num1, num2 = 10) {
    if (num2)
        return (num1 + num2);
    else
        return (num1);
}
console.log(sum2(3, 4));
console.log(sum2(3));
function getEmployeeDetails(emp) {
    console.log(emp.firstName);
    console.log(emp.lastName);
    console.log(emp.id);
}
getEmployeeDetails({
    firstName: 'John',
    lastName: 'Doe',
    id: 1001
});
getEmployeeDetails({
    firstName: 'John2',
    lastName: 'Doe2',
    id: 1002
});
//class
class Employee {
    eName;
    constructor(name) {
        this.eName = name;
    }
    helloEmp() {
        console.log(`Hello employee ${this.eName}`);
    }
}
let e = new Employee('John');
e.helloEmp();
// inheritence
class Manager extends Employee {
    constructor(name) {
        super(name);
        console.log('Hello from manger');
    }
    helloEmp() {
        console.log(`Hello from Manager ${this.eName}`);
    }
}
let m = new Manager('Raghav');
m.helloEmp();
console.log(`${m.helloEmp}`);
export {};
