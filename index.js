//declare variiables

const inquirer = require  ("inquirer");

const fs = require ("fs");

const axios = require ("axios");




//array of prompts to be answered by user
inquirer.prompt([
{
    type: "input", 
    name : "userName",
    message : "What is your Github user name?"
},
{
    type: "input", 
    name : "title",
    message : "Please enter Github project repository title"
},
{
    type: "input", 
    name : "description",
    message : "Enter description of project"
},
{
    type: "input", 
    name : "license",
    message : "Please enter license information"
},
{
    type: "input", 
    name : "installatiion",
    message : "Please enter installatiion information need to run project"
},
{
    type: "input", 
    name : "usage",
    message : "Please provide detailed ex. how a user would opperate the app"
},
{
    type: "input", 
    name : "contributing",
    message : "If one may contribute, what are the procedures to do so?"
},
{
    type: "input", 
    name : "test",
    message : "What test have been implemted?"
},
{
    type: "input", 
    name : "email",
    message : "Please enter your email"
},
{
    type: "input", 
    name : "instructions",
    message : "Please enter your detailed information for the app to be utlized"
},


]) 

// function to run the data
.then (function(data){
    
// axios/api call

 axios.get("https://api.github.com/users/" + data.userName)

 //variables in the fs write file function
 
 .then (function(response){
    
    let test = `# ${data.test}`
    let usage = `# ${data.usage}`
    let title = `# ${data.title}`
    let avatar = `![avatar](${response.data.avatar_url})`
    let email = response.data.email
    let license = `# ${data.license}`
    let description =`# ${data.description}`
    let installatiion = `# ${data.installatiion}`
    let instructions = `# ${data.instructions}`
    let contributing = `# ${data.contributing}`

    let userName = data.userName
    let makeReadMe = `${title}\n${userName}\n${email}\n${license}\n${description}\n${installatiion}\n${instructions}\n
    ${usage}\n${contributing}\n${test}\n${avatar}`
// Wright to the readMe2 file

fs.writeFile('readMe2.md', makeReadMe,function(){

})






   


 })




   



})

