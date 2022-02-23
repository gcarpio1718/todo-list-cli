const prompt = require('prompt-sync')({signint: true});

console.log("This is a To-Do List Application");
console.log(" ");
console.log("=================================");

let todos =[];
let complete=[];
let input;

console.log("List is Empty");

while(input !==3){

    console.log("[1] Create to-do item");
    console.log("[2] Complete to-do item");
    console.log("[3] Leave program");
    console.log("~Select action: ~");
    input = Number(prompt(" > "));

    if(input === 1){
        console.log("Creating a to-do item")
        console.log("What is the to-do item called")
        let todo = prompt(">");
        todos.push(todo);
        complete.push("[incomplete]")

        console.log(" ");
        console.log("================================");

        for(let i=0; i<todos.length; i++){
            console.log(`${i+1}. ${complete[i]} ${todos[i]}`)}
        }else if (input===2){
            console.log("completing an item")
            console.log("Which item do you want to finish?")
            let completed=Number(prompt(" > "));
            complete[completed -1] = "[completed]"

            console.log("You have " + todos.length + " todos items");
            for (let i=0; i<todos.length; i++){
                console.log(`${i+1}. ${complete[i]} ${todos[i]}`)}
            }else if (input === 3){
                console.log("~exiting the program~");
            }
        }

