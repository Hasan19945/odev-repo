/* console.log('Hello World')


const add = (a:any ,b:number) => a+b */

// Merhaba

// Dünya

//& Type annotations & Basic Types
/* let x: number = 5

x = 25

let yy = 'Dünya'

let y : string = `Hello ${yy}`

yy = 5

let z : boolean = true


let a: number;

let b; */

//& Arrays

/* let arr:number[] = [1,2,3,4]

arr.push('a')


//? Boş array tanımlaması
let arr2: string[] = []

arr2.push('Hello')
arr2.push(false)


let arr3: any[] = []

arr3.push('Hello')
arr3.push(false)
arr3.push(5) */

//& Tuples

/* let myTuple: [number,string]

myTuple = [ 1, 'Mark' ]

console.log(myTuple)

myTuple.push(false)
myTuple.push('Hello') */

//& Array of Tuples

/* let arrTuple : [number,string][] = []


arrTuple.push([1,'Mark'])
arrTuple.push([2,'Anthony'])

console.log(arrTuple) */

//& Enums

/* const enum Role{
    User, //0
    Admin //1
}

let currentUser:Role = Role.User

console.log(currentUser)

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = NotFound - 4,
    
}

const request: StatusCodes = StatusCodes.Success

//? String Enums



enum Tshirts {
    Small = 'S',
    Medium = 'M',
    Large = 'L'
}

let size : Tshirts = Tshirts.Large

//? Mixed enum
enum Tshirts2 {
    Small = 'S',
    Medium = 'M',
    Large = 'L',
    XLarge = 42,
    XXlarge, //43
    XXXLarge = XLarge +4,
    XXXXLarge //47
}


//? Değer ataması için fonksiyon kullanımı

enum PrintMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }
}

PrintMedia.Newsletter; // returns 5
PrintMedia.Magazine; // returns 15

PrintMedia["Magazine"] // returns 15 */

//& Any Types

/* let anyVar: any = 5
anyVar = 'Hello'
anyVar = true

let abc : boolean = anyVar
console.log(abc) */

//& Unknown Types

/* let ukn: unknown = 5
ukn = 'Hello'
ukn = true

let abc : boolean = ukn as boolean
let abd : boolean = ukn

let any2: any = ukn // Unknown sadece any ye atanabilir
 */

//& Void

/* function greet(): void{ //^ Void bir şey return etmeyen fonksiyonlar için kullandığımız dönüş tipi belirtici
    console.log('Hello')

    // return 'Hello World'
}


let a = greet() */

//& Never

/* function error(message: string): never {
    throw new Error(message);
   }

   
console.log(error('Hata Oluştu')) */

//& Union Type


// let abc: number | string = 0

// abc ='hello'

// abc = true

//? Type Narrowing

/* function checkNumber (n: string | number ):void{

    
    if(typeof n == 'string'){
        
    }else{
        
    }
} */


//& Type Aliases

/* type StrNum = String | Number

let sumValue: StrNum = 0
sumValue = 'Hello'
// sumValue = false

console.log(sumValue.length)

function checkNumber2 (n: StrNum ):void{

    
    if(typeof n == 'string'){
        
    }else{
        
    }
} */

//&  String Literals

/* type Car = 'BMW' | 'Mercedes' | 'Ferrari'


let car1: Car = 'Mercedes'
let car2: Car = 'fiat'
let car3: Car = 'Audi'
let car4: Car = 'Ferrari' */


//& Intersection

// const car: {
//     type: string,
//     model?: string,
//     readonly year:number,
//     age(year: number):void,
//     sunroof: boolean,
// } = {
//     type : 'Toyota',
//     year :2020,
//     // model: 'Corolla',
//     sunroof: false,
//     age(year:number):void{
//         console.log(`Age is ${year - 2009}`)
//     }
// }


// car.age(2024)

// car.year = 2019


/* type Book = {
    book_id: number;
    book_name: string;
}

type Author = {
    Author_Id: number;
    Author_Name: string;
    other_books: string[]
}

type Product = Book & Author

let book1: Product ={
    book_id: 1234,
    book_name: 'Lord of the Rings',
    Author_Id: 1892,
    Author_Name: 'JRR Tolkien',
    other_books:['Hobit']

}

let author1: Author = {
    Author_Id: 1892,
    Author_Name: 'JRR Tolkien',
    other_books:['Hobit']
} */


//& Type Assertions

/* let score : unknown = '350'

console.log((<String>score).split(''))

console.log((score as string).length)

 */

//& Functions


/* function selam (mesaj: string, isim: string): string{


    return `${mesaj+ ' '+ isim}`
}

console.log(selam('Merhaba', 'Mark'))
console.log(selam('Merhaba', 'Mark' , 'Anthony'))

function selam2 (mesaj: string, isim: string): void{

    console.log(`${mesaj+ ' '+ isim}`) 
}

selam2('Merhaba', 'Mark')

let getResult =  (username:string, points: number):string => {
    return `Hello ${username + points}`
} */

//? optional parameters

/* function selam3 (mesaj: string, isim?: string ): string{

if(!isim) isim = 'user'

    return `${mesaj+ ' '+ isim}`
}


console.log(selam3('Merhaba', 'Mark'))
console.log(selam3('Merhaba')) */

//? Overloading


/* function add(a:string,b:number):string;
function add(a:string,b:string):string;
function add(a:number,b:number):number;
function add(a:any,b:any):any{
    return a+b
}

console.log(add(2,3))
console.log(add('Hello', 'World'))
console.log(add('Hello', 2)) */

//? Rest parameters

/* function selam4 (mesaj: string, ...isim: string[] ): string{

    
        return `${mesaj+ ' '+ isim.join(",")+'!'}`
}


console.log(selam4('Merhaba', 'Mark'))
console.log(selam4('Merhaba', 'Mark', 'Anthony', 'Ch15')) */