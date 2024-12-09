const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
*/

let registry = [];
let settings = {
  alcohol: false,
  //alcohol setting goes here
  
};

//rename this to RegisterUser
function RegisterUser(){
  readline.question("How old are you? ", _age => {
      if(_age < 19){
        settings = true;
        console.log("You are not allowed in here.");
      } else if (_age >= 19){
        settings = false;
        registry.push(_age);
        console.log("You are allow to drink in here.");
      }

    if(settings === false){
      console.log("Everyone is welcome in here!");
    }
    StartApp();
  });
  //ask for the age with readline
}

function DisplayUsers(){
  if (registry.length === 0) {
    console.log("The list is empty!");
  } else {
    for (let i = -1; i <= registry.length; i++) {
        console.log("The users' age is ", registry[i]);
    }
  }
  StartApp();
  //add a color to userColors
}

function PreviousAge(){
  console.log("You wanna change your age input? ");
  readline.question("Please Enter your previous age input ", _previousAge => {
  registry.shift(_previousAge);
  console.log("Your age has already been deleted!");
  ChangingAge();
  });
}

function ChangingAge(){

  readline.question("Oki So How old are you? ", _newAge => {
    if(_newAge < 19){
      settings = true;
      console.log("You are not allowed in here.");
    } else if (_newAge >= 19){
      settings = false;
      registry.push(_newAge);
      console.log("You are allow to drink in here.");
    }

  if(settings === false){
    console.log("Everyone is welcome in here!");
  }
  StartApp();
  });
}


//rename this to ToggleAlcohol
function ToggleAlcohol(){
  //toggle alcohol setting
}

//rename this to NotifyAll
function NotifyAll(){
  //go through the array to notify everyone
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "register") {
      _command = Number();
      RegisterUser();
    }  else if (_command === "change age") {
      _command = Number();
      PreviousAge();
    } else if (_command === "list") {
      DisplayUsers();
    } else{
      StartApp();
    }
  })
}

StartApp();