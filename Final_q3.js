const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/


//Planning
// Create 3 main function:
// set every colour into true
// function AddUserColor() --> adding colours
// function function DisplayUserColors() --> List out colours
// function ToggleThemeColor() --> toggle colour from true to false 




let userColors = [];
let toggleColors = [];
let theme = {
  //the 5 color and their boolean value goes here
    red: true,
    green: true,
    blue: true,
    yellow: true,
    orange: true
};

//Challenge
let themeSettings = {
  //the 5 color and their boolean value goes here
    red: 0,
    green: 0,
    blue: 0,
    yellow: 0,
    orange: 0
};

//rename this to AddUserColor
function AddUserColor(){
  //add a color to userColors
  readline.question('What colour do you want to add? ', _colour => {
  if (theme.hasOwnProperty(_colour)) {
    if (userColors.includes(_colour)) {
      console.log(`${_colour} is already in your favorites.`);
    } else if (!theme[_colour]) {
      console.log(`${_colour} is not currently available.`);
    } else {
      userColors.push(_colour);
      console.log(`${_colour} is added.`);
    }
  } else {
    console.log("Invalid colour. Choose from: red, green, blue, yellow, orange.");
  }
  StartApp();
});

}

//rename this to DisplayUserColors
function DisplayUserColors(){
  if (userColors.length === 0) {
    console.log("Invalid. The list is empty. You need to add colours or toggle colours first!");
  } else {
    console.log("Your favorite colours are:");
    // Loop through the favFruits array and log each fruit
    for (let i = 0; i < userColors.length; i++) {
      console.log(userColors[i]);
    }
  }
  //add a color to userColors
}

//rename this to ToggleThemeColor
function ToggleThemeColor(){
  //ask for a color to toggle
  readline.question("Which colour's availability would you like to toggle? ", _colour => {

    if (theme.hasOwnProperty(_colour)) {
        // Toggle availability
        theme[_colour] = !theme[_colour];

        // Update the toggled count in colorSettings
        themeSettings[_colour].toggledCount++;

      console.log(`${_colour} is now ${theme[_colour] ? "available" : "unavailable"}.`);
      userColors.shift(_colour);
      toggleColors.push(_colour);
    } else {
      console.log("Invalid COLOUR. Choose from: red, green, blue, yellow, orange.");
    }
    StartApp();
  });
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "add") {
      AddUserColor();
    } else if (_command === "display") {
      DisplayUserColors();
      StartApp();
    } else if (_command === "toggle") {
      //toggle the setting, using "!" <-- Changes to opposite setting
      themeSettings.theme = !themeSettings.theme;
      ToggleThemeColor();
    } else{
      StartApp();
    }
  })
}

StartApp();