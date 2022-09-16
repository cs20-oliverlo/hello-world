// Pizza Order by Oliver Lo

// IPO Algorithm (Input-Process-Output)

// Input
let username = prompt("What is your name?");
let pizzaSize = prompt(`How large would you like your pizza to be, ${username}?`);
let topping1 = prompt(`What would you like your first topping to be on your ${pizzaSize} pizza?`);
let topping2 = prompt(`And what would you like your second topping to be?`);


// Process
let msg = `Your ${pizzaSize} pizza with ${topping1} and ${topping2} will be ready in 20 minutes.`;

// Output
alert(msg)