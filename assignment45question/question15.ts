// name array
let guestArray:string[] = ["fatima","suman","hareem"];

// can not make dinner
let canNotAttend:string = "hareem";
console.log(`${canNotAttend} can not make it ,for dinner`);

// invite new guest
let newGuest :string = "halima";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

// send message
guestArray.map((items)=> console.log(`Hello,${items} you are invited to dinner`));