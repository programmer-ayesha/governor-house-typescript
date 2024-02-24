
// name array
let guestArray:string[] = ["fatima","suman","hareem"];

// can not make dinner
let canNotAttend:string = "hareem";
// invite new guest
let newGuest :string = "halima";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;


console.log("Welcom all we found a bigger dinner table!");

guestArray.unshift("noreen");


let middleGuest:string = "aqsa";
let midleIndex = guestArray.length/2;
guestArray.splice(midleIndex,0,middleGuest);


guestArray.push("suman");

guestArray.map((item)=> console.log(`\nDear ${item} You are invited to dinner!`));