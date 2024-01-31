//& Classes

/* class Employee {
    empCode: number;
    empName: string;

    constructor (code:number, name:string){
        this.empCode = code;
        this.empName = name;
    }
}


let emp1 = new Employee(1 ,'Mark')
// let emp2 = new Employee('Mark',2)
let emp3 = new Employee(2 ,'Anthony')

console.log(emp3.empCode) */


//& Inheritance

/* class Person {
    name: string;

    constructor(name: string){
        this.name = name
    }

    greet():void{
        console.log(`Merhaba ${this.name}`)
    }
}

class Employee extends Person {
    emplyCode:number;

    constructor(emplyCode: number, name:string){
        super(name);
        this.emplyCode = emplyCode;
    }
}

let person1 = new Person('Mark')

console.log(person1.name)

let emp4 = new Employee(100, 'Anthony')

console.log(emp4.name)

person1.greet()
emp4.greet() */

//& Abstract Classes

/* abstract class Vehicle{

    year:number;
    color:string;

    constructor(year: number, color:string){
        this.year = year;
        this.color = color;
    }

    startEngine():void{
        console.log(`Motor Calisti`)
    }

    abstract stopEngine(): void;
}

//let Vehicle1 = new Vehicle(1990, 'Siyah')

class Car extends Vehicle{
    model: string;
    numOfDoors: number;

    constructor(year: number, color:string, model:string,numOfDoors:number ){
        super(year, color);
        this.model = model;
        this.numOfDoors = numOfDoors
    }

    stopEngine(): void {
        console.log('Motor Durduruldu')
    }
}

let car1 = new Car (1990, 'Siyah', 'Fiat', 4)

console.log(car1)

car1.startEngine()
car1.stopEngine() */


//& Class Data Modifiers

//? Private

/* class Student {
    private studCode: number;
    public studName: string;

    constructor(code: number, name: string) {
        this.studCode = code;
        this.studName = name;
    }

    displayCode():void{
        console.log(this.studCode)
    }

    setCode(newCode:number):void{
       if(newCode > 0 && newCode <=2000){

           this.studCode = newCode
       }else{
        console.log('Hatalı giris yaptınız')
       }
       
       
    }

}

const Mathias = new Student(1576, 'Mathias')


console.log(Mathias.studName)

Mathias.setCode(2000)

Mathias.displayCode() */

//? protected

/* class Student {  
    private studCode: number;  
    protected studName: string; 

    constructor(code: number, name: string){  
        this.studCode = code;  
        this.studName = name;  
        }  
        public display() {
            return (`My unique code: ${this.studCode}, my name is : ${this.studName}.`);
        }

        protected getCode(){
            return this.studCode
        }
} 

class Person extends Student {  
    public department: string;  
  
    constructor(code: number, name: string, department: string) {  
        super(code, name);  
        this.department = department;  
    }  
    public getStudCode() {  
        return (`My unique code: ${this.getCode()}, my name is: ${this.studName}.`)
    }  
}  

let person1: Person = new Person(1, "Mark", "FS");  

console.log(person1.getStudCode())
console.log(person1.display()) */

//? Read only

/* class Employee {
    empName: string;
    readonly empCode: number;
  
    constructor(empCode: number, name: string) {
      this.empCode = empCode;
      this.empName = name
    }
  }
  
  let emp = new Employee(100, "John")
  emp.empCode = 20 // Compiler Error */

  //? Static

/*   class Circle {
    static pi: number = 3.14;
  
    static calcArea(radius:number) {
      return this.pi * radius * radius
    }
}

console.log(Circle.pi)
console.log(Circle.calcArea(10)) */


//& Interfaces

/* interface Calender {
    events: string[];
    addEvents(event: string): void;
}


class LMSCalender implements Calender{
    constructor(public events: string[]){}

    addEvents(event: string): void {
        this.events.push(event);
    }
}

const cohort15 = new LMSCalender(['HTML', 'CSS','JS'])


cohort15.addEvents('TS')

console.log(cohort15) */

//? bir Class birden fazla interface implement edebilir.
/* 
interface Color {
    color: { r: number, g: number, b: number }
  }
  
  interface Shape {
    area: number;
  }
  
  class Square implements Color, Shape {
    color: { r: number, g: number, b: number }
    area: number;
    constructor(c: { r: number, g: number, b: number }, a: number) {
      this.color = c;
      this.area = a;
    }
  } */
/*   interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // Optional property
  }
  
  // Example usage
  const person1: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
  };
  
  const person2: Person = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25
  };

  const person3 = {
    name: "Jane",
    sirname: "Smith",
    age: 30
  };

  function displayPersonInfo(person: Person): void {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    console.log(`Age: ${person.age}`);
    if (person.email) {
      console.log(`Email: ${person.email}`);
    }
  }
  
  // Call the function with the examples
  displayPersonInfo(person1);
  displayPersonInfo(person2);
  displayPersonInfo(person3); */