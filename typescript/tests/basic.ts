import { reduceEachLeadingCommentRange } from "typescript/unstable/ast";

export{}
let x = 'typescript';
console.log (`hello ${x}`);

let y=10;
console.log (`${y}`);

let z: undefined;
console.log(z);

let list1: number[] = [1,2,3,4];
let list2: Array<string> = ['a','b','c','d'];

console.log(list1[0]);
console.log(list2[2]);

let tuple1: [number,string];

tuple1=[8,'john'];
console.log(tuple1);
console.log(tuple1[0]);
console.log(tuple1[1].substring(2));

enum color {Red=5,Green=40,Blue=11};
// let e: color=color.Blue;
// console.log(e);

let colorIndex: number =color.Green;
console.log(colorIndex);

let colorName: string = color[11];
console.log(colorName);

let unsure: unknown ='dynamic';
console.log(unsure);

let anyValue : any;
anyValue=1;
anyValue='One';
anyValue= true;

console.log(anyValue);
//anyValue()
//anyValue.toUpperCase();
console.log(anyValue);

function returnNothing(): void{
console.log('hello world');

}
returnNothing();

//union type

let u: number|boolean;
u=10;
u=false;
console.log(u);

//function

function a(){
    console.log('Hello finctions');
    }

    a();

 function sum(num1: number,num2?: number):number{
   if(num2)
    return(num1+num2);
    else
        return(num1);
 } 
 console.log(sum(3,4));
 console.log(sum(3));

  function sum2(num1: number,num2: number=10):number{
   if(num2)
    return(num1+num2);
    else
        return(num1);
 } 
 console.log(sum2(3,4));
 console.log(sum2(3));

 //interface

 interface empDetails{
    firstName:string;
    lastName:string;
    id:number;
 }

 function getEmployeeDetails(emp:empDetails){
    console.log(emp.firstName);
    console.log(emp.lastName);
    console.log(emp.id);
 }

 getEmployeeDetails({
    firstName:'John',
    lastName:'Doe',
    id:1001});
 
     getEmployeeDetails({
    firstName:'John2',
    lastName:'Doe2',
    id:1002});

    //class

    class Employee{
       protected eName:string;
        constructor(name:string){
            this.eName=name;
        }
        helloEmp(){
            console.log(`Hello employee ${this.eName}`)
        }
    }
    let  e = new Employee('John'); 
    e.helloEmp();

    // inheritence

    class Manager extends Employee{
        constructor(name:string){
            super(name);
            console.log('Hello from manger')
        }
        helloEmp(){
            console.log(`Hello from Manager ${this.eName}`)
        }
            }
   
   let m= new Manager('Raghav');
   m.helloEmp();
   console.log(`${m.helloEmp}`)