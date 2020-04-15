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


]) 

// function to run the data
.then (function(data){
    
// axios/api call

 axios.get("https://api.github.com/users/" + data.userName)

 //variables in the fs write file function
 
 .then (function(response){
    let email = data.email
    let test = data.test
    let usage = data.usage
    let title = data.title
    let avatar = response.data.avatar_url
    let email = response.data.email
    let license = data.license
    let description = data.description
    let installatiion = data.installatiion
    let insstructions = data.insstructions
    let contributing = data.contributing
    
// Wright to the readMe2 file

fs.writeFile('readMe2.md',title + '\n' + email + '\n'  + license + '\n' + description + '\n' + installatiion + '\n' + insstructions +  '\n' + email  + '\n' + usage + '\n' + contributing + '\n' + test + '\n' + avatar,  function(){

})






    //.md file



 })




   



})

