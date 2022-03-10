const fs = require('fs');
const inquirer = require('inquirer');
objArray=[];
function teamManagerStart(){
inquirer.prompt([

    {

        name: 'teamManagersName',
        message: 'What is the team managers name?',
        type: 'input'




    }, {

        name: 'employeeId',
        message: 'What is the managers employee ID?',
        type: 'input'




    }, {
        name: 'managerEmail',
        message: 'What is the managers email?',
        type: 'input'





    }, {
        name: 'managersOfficeNumber',
        message: 'What is the managers office number?',
        type: 'input'




    },])
    .then(function (answer) {
       var type="Manager";
       var managerName=answer.teamManagersName;
       var managerEmployeeId=answer.employeeId;
       var managerEmail=answer.managerEmail;
       var managerOfficeNumber=answer.managersOfficeNumber;
       var managerArray=[type,managerName,managerEmployeeId,managerEmail,managerOfficeNumber];
createEmployee(managerArray);
                 engIntFinCheck();


    })}
    function engIntFinCheck(){
        inquirer.prompt([

       {
        
                type: 'checkbox',
                name: 'engIntFin',
                message: 'Would you like to add an engineer, intern, or finish building your team.',
                choices: ['engineer', 'intern', 'Finish']
        
        
        
            },])
            .then(function (answer) {
            if(answer.engIntFin=='engineer'){
                engineerAdd();
            }
            if(answer.engIntFin=='intern'){
                internAdd();
            }
            if(answer.engIntFin=='Finish'){
                finishHtml();
            }
        
        
            })}

function engineerAdd(){
    inquirer.prompt([

        {

            name: 'engineersName',
            message: 'What is the engineers name?',
            type: 'input'




        }, {

            name: 'engineersID',
            message: 'What is the engineers ID?',
            type: 'input'




        },

        {

            name: 'engineersEmail',
            message: 'What is the engineers email?',
            type: 'input'




        },
        {

            name: 'engineersGithub',
            message: 'What is the engineers Github?',
            type: 'input'




        },])
        .then(function (answer) {
            var type="Engineer";
            var engineerName=answer.engineersName;
            
            var engineerId=answer.engineersID;
           
            var engineerEmail=answer.engineersEmail;
         
            var engineerGithub=answer.engineersGithub;
            var engineerArray=[type,engineerName,engineerId,engineerEmail,engineerGithub];
     createEmployee(engineerArray);
                      engIntFinCheck();
     
     
                    })}
                    function internAdd(){
                        inquirer.prompt([
                    
                            {
                    
                                name: 'internName',
                                message: 'What is the interns name?',
                                type: 'input'
                    
                    
                    
                    
                            }, {
                    
                                name: 'internID',
                                message: 'What is the interns ID?',
                                type: 'input'
                    
                    
                    
                    
                            },
                    
                            {
                    
                                name: 'internEmail',
                                message: 'What is the interns email?',
                                type: 'input'
                    
                    
                    
                    
                            },
                            {
                    
                                name: 'internGithub',
                                message: 'What is the interns Github?',
                                type: 'input'
                    
                    
                    
                    
                            },
                            {
                    
                                name: 'internSchool',
                                message: 'What is the interns school?',
                                type: 'input'
                    
                    
                    
                    
                            },
                        
                        
                        
                        
                        
                        ])
                            .then(function (answer) {
                                var type="Intern";
                                var internName=answer.internName;
                                var internId=answer.internID;
                                var internEmail=answer.internEmail;
                                var internGithub=answer.internGithub;
                                var internSchool=answer.internSchool;
                                var internArray=[type,internName,internId,internEmail,internGithub,internSchool];
                         createEmployee(internArray);
                                          engIntFinCheck();
                         
                         
                                        })}


function createEmployee(arrayEmployee){
if(arrayEmployee[0]=='Manager'){
var managerObj={
    type:arrayEmployee[0],
    Name:arrayEmployee[1],
    getName: function(){
       return this.Name;
   },
    

   getRole:function(){
       return 'Manager';
       },


    ID:arrayEmployee[2],
   getId:function(){
       return this.ID;
           },
    Email:arrayEmployee[3],
    getEmail:function(){
      return this.Email;
          },
    Number:arrayEmployee[4],
    getNumber:function(){
return this.Number;
   },
}
objArray.push(managerObj);
}
if(arrayEmployee[0]=='Engineer'){
var engineerObj={
    type:arrayEmployee[0],
    Name:arrayEmployee[1],
    getName: function(){
        return this.Name;
    },
    




    ID:arrayEmployee[2],
    getId:function(){
return this.ID;
    },
    Email:arrayEmployee[3],
    getEmail:function(){
return this.Email;
    },
    Github:arrayEmployee[4],
    
    getGithub:function(){
return this.Github;
    },

getRole:function(){
return 'Engineer';
},
}
objArray.push(engineerObj); 
}
if(arrayEmployee[0]=='Intern'){
    var internObj={
        type:arrayEmployee[0],
        Name:arrayEmployee[1],
        getName: function(){
            return this.Name;
        },
        
    
    
    
    getRole:function(){
    return 'Intern';
    },
        ID:arrayEmployee[2],
        getId:function(){
            return this.ID;
                },
        Email:arrayEmployee[3],
        getEmail:function(){
            return this.Email;
                },
        
        Github:arrayEmployee[4],
        getGithub:function(){
            return this.Github;
                },
                School:arrayEmployee[5],
         getSchool: function(){
             return this.School;
         } ,   
         getRole:function(){
            return 'Intern';
            },   
    }
    
   objArray.push(internObj); 
}


console.log(objArray[0]);
}   

function finishHtml(){
    fs.writeFile('./index2.html', '<!DOCTYPE html>'+
    '<html lang="en">'+
    '<head>'+
        '<meta charset="UTF-8">'+
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        '<title>Team Profile Generator</title>'+
        '<link rel="stylesheet" href="./style.css" />'+
   ' </head>'+
    '<body>'+
        '<div id="header">'+
    '<center><h1>My Team</h1></center>'+'</div>'+
   
createCards(objArray)+

    
   ' </body>'+'</html>'
    
    , err => {
        if (err) throw new Error(err);
    
        console.log('Page created! Check out index2.html in this directory to see it!');
      });
    


}
function createCards(){
    var htmlString="";
    for(var i=0;i<objArray.length;i++){
    
if(objArray[i].type==="Manager"){
 htmlString+='<div id="teamCard">'+
'<h3>'+objArray[i].getName()+'</h3>'+'<h3>'+objArray[i].getRole()+
'</h3>'+'<h5>ID: '+objArray[i].getId()+'</h5>'+
    '<h6>Email: <a href='+'"mailto:'+objArray[i].getEmail()+'">'+objArray[i].getEmail()+'</a></h6>'+
 '<h6>Office #:'+objArray[i].Number+'</h6>'+
    




'</div>';



}

if(objArray[i].type==="Engineer"){
    htmlString+='<div id="teamCard">'+
    '<h3>'+objArray[i].getName()+'</h3>'+'<h3>'+objArray[i].getRole()+
    '</h3>'+'<h5>ID: '+objArray[i].getId()+'</h5>'+
    '<h6>Email: <a href='+'"mailto:'+objArray[i].getEmail()+'">'+objArray[i].getEmail()+'</a></h6>'+
     '<h6>Github: '+objArray[i].getGithub()+'</h6>'+
        
    
    
    
    
    '</div>';


    
}
if(objArray[i].type==="Intern"){
    htmlString+= '<div id="teamCard">'+
    '<h3>'+objArray[i].getName()+'</h3>'+'<h3>'+objArray[i].getRole()+
    '</h3>'+'<h5>ID: '+objArray[i].getId()+'</h5>'+
    '<h6>Email: <a href='+'"mailto:'+objArray[i].getEmail()+'">'+objArray[i].getEmail()+'</a></h6>'+
     '<h6>School: '+objArray[i].getSchool()+'</h6>'+
        
    
    
    
    
    '</div>';


    
}


}

return htmlString;
}



teamManagerStart();





    