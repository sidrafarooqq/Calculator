import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message : "enter first number", type: "number" , name: "firstnumber"},
    {message : "enter second number", type: "number" , name: "secondnumber"},
    {
        message: "select one of the operator to perform operation",
        type:"list",
        name:"operator",
        choices: ["Addition", "subtraction", "multiplication","division"],
    },
]);

//conditinol statement
if ( answer.operator === "Addition")  {
    console.log(answer.firstnumber + answer.secondnumber)
} else if (answer.operator === "subtraction"){
    console.log(answer.firstnumber - answer.secondnumber)
} else if (answer.operator === "multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
} else if (answer.operator === "division"){
    console.log(answer.firstnumber / answer.secondnumber)
}
