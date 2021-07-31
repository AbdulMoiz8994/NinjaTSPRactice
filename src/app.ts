console.log("moiz khanzada");



type Define={
   firstName: string,
   lastName: string,
   id: number,
}

let form: Define={
  firstName: "moiz",
  lastName: "Attari",
  id: 12,
}
console.log(form);

let greet:(user: Define)=> void
 greet=(user:Define): void=>{
    console.log(`${user.firstName} is Frontend Developer`);
}

let greet1:(obj: {a: string, b: number}) => void
 greet1=(objects: {a: string,b: number}) =>{
    console.log(`${objects.a} and ${objects.b}`);    
}
greet1({a: "Moiz", b: 12})

let greet2:(nub: {numOne: number, numTwo: number,data: string}) => number;
interface obj{
  numOne: number,
  numTwo: number,
  data: string
}

greet2=(Nub: obj):number =>{
   if(Nub.data=== "add"){
     return Nub.numOne + Nub.numTwo
  } else{
     return Nub.numOne - Nub.numTwo
  } 
} 

let result=greet2({numOne: 1, numTwo:10, data: "add"})
console.log(result);



