let current_users: string[] = ["john", "alice", "bob", "SuSan", "dave"];
let new_users: string[] = ["bob", "emily", "dave", "frank", "susan"];
for (let new_user of new_users) {
 let newUserNameLowercase = new_user.toLowerCase();
 if (current_users.some(user => user.toLowerCase() === newUserNameLowercase)) {
 console.log(`Sorry, ${new_user} is not available. Please enter a new username.`);
    } else {
        
        console.log(`Congratulations, ${new_user} is available.`);
    }
}
