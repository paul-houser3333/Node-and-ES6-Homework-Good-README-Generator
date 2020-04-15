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
    name : "insstructions",
    message : "Please enter insstructions need to run project"
}

]) 
.then (function(data){
     //console.log (data.userName)



    
    // axios call

 axios.get("https://api.github.com/users/" + data.userName)

 .then (function(response){
    

    let title = data.title
    let avatar = response.data.avatar_url
    let email = response.data.email
    let license = data.license
    let description = data.description
    let installatiion = data.installatiion
    let insstructions = data.insstructions
fs.writeFile('readMe2.md',title + '\n' + license + '\n' + description + '\n' + installatiion + '\n' + insstructions +  '\n' + email + '\n' + avatar,  function(){

})






    //.md file



 })




   



})

