// name array
var guestArray = ["fatima", "suman", "hareem"];
var canNotAttend = "hareem";
console.log("".concat(canNotAttend, " can not make it ,for dinner"));
var newGuest = "halima";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
guestArray.map(function (items) { return console.log("Hello,".concat(items, " you are invited to dinner")); });
