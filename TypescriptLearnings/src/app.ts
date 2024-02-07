
import { Payment } from './classes/payments.js';
import { HasFormatter } from './interfaces/Hasformatter.js';
import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
    // let inv1 =  new Invoice("raju","study",200)
    // let inv2 = new Invoice("suresh","groceries",300)

    // let invoices: Invoice[]=[]
    // invoices.push(inv1)
    // invoices.push(inv2)

    // invoices.forEach((invoice)=>{
    //     console.log(invoice.client,invoice.format())
    // })

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;

const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

// form.addEventListener("submit",(e:Event)=>{
// e.preventDefault()

// console.log(type.value,tofrom.value,details.value,amount.valueAsNumber)

// })
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    let doc: HasFormatter;
    if (type.value === 'invoice') {
      doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
      doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');

  });





// let greet: Function;

// type cart = number| string

// greet = (a:number,b:number,c:cart)=>{
//     console.log(a*b)
//     console.log(c)
// }

// greet(9,6)



// const FirstName= "vinay"

// const age = "25"
// console.log(age)

// const area = (length: number,breadth: number)=>{
// return length*breadth
// }

// console.log(area(10,7))

// let names = ["raghu", "ravi", "rakshit",12,19]
// names.push("namrath")
// names.push(67)
// // names.push(true)
// console.log(names)

// const person = {
//     name:"surender",
//     age:27,
//     satus:"single"
// }

// person.name="sai teja"
// // person.age="20"

// console.log(person)


// let array1: string[];

// let array2: (string|number|boolean)[]=[]
// array2.push("karan")
// console.log(array2)

// let char: any;
// char="sudden"
// console.log(char)
// char=45
// console.log(char)