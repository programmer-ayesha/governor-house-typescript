
let guestArray:string[] = ["fatima","suman","hareem"];

let canNotAttend:string = "hareem";
console.log(`${canNotAttend} can not make it ,for dinner`);

let newGuest :string = "halima";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;
console.log(guestArray);

guestArray.map((items)=> console.log(`Hello,${items} you are invited to dinner`));