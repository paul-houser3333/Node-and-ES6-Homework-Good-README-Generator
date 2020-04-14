//declare variiables

const inquirer = require  ("inquirer");

const fs = require ("fs");

const axios = require ("axios");

//const generateMarkdown = require("./generateMarkdown")

//asynch write file will render returned axios call & inquirer answered questions 
//const writeFile = utli.promisify(fs.writeFile)


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
    name : "description ",
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

    const gitData = {
        userName: username,
        gitPage: data.html_url,
        validName: data.name,
        profilePic: data.avatar_url,
        gitURL: data.html_url 
    };

    // axios call

 axios.get("https://api.github.com/users/" + gitData)

 .then (function(response){
    //console.log (response.data.avatar_url)
    //console.log (data.email)

    //.md file



 })




   



})

