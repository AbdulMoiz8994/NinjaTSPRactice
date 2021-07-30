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



