let current_users = ["john", "alice", "bob", "SuSan", "dave"];
let new_users = ["bob", "emily", "dave", "frank", "susan"];
let _loop_1 = function (new_user) {
let newUserNameLowercase = new_user.toLowerCase();
    if (current_users.some(function (user) { return user.toLowerCase() === newUserNameLowercase; })) {
        console.log("Sorry, ".concat(new_user, " is not available. Please enter a new username."));
    }
    else {
       
        console.log("Congratulations, ".concat(new_user, " is available."));
    }
};

for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
