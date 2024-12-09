const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest

*/

//Planning
// Create 3 main function:
// set every colour into true
// function AddPoints() --> adding points
// function ShowStatus() --> List out modes
// function MakeBadge() --> summary the the points of all modes 
// Challenge 1:   - less than 10 -> "horrible newbie"
  // - between 10 and 20 -> "adventurer"
  // - between 20 to 30 -> "slayer"
  // - between 30 to 40 -> "divined"
  // - above 40 -> "eternal"

  // Challenge 2: add if(checkMode === true){
      // if(_mode === "new"){
      //   badge[_mode]++;
      //   badge[_mode]++;
      //   badge[_mode]++;
      // } to multiply the points of new based on the letters. apply to the others


let badge = {
  //modes go here
  new:0,
  easy:0,
  medium:0,
  hardest:0,
  apocolypse:0
};

//rename this to ShowStatus
function ShowStatus(){
  //loop through the badge and log all the mode and all their corresponding points
  for(let key in badge){
    console.log("The mode", key, "has", badge[key], "points");
  }
}

//rename this to AddPoints
function AddPoints(){
  //Add the point to the correct mode by capturing the readline
  readline.question("What is the mode? ", _mode => {

    let checkMode = false;

    for(let key in badge){
      if(key === _mode){
        checkMode = true;
      }
    }

    if(checkMode === true){
      if(_mode === "new"){
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
      }

      if(_mode === "easy"){
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
      }

      if(_mode === "medium"){
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
      }

      if(_mode === "hardest"){
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
      }

      if(_mode === "apocolypse"){
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
        badge[_mode]++;
      }

      console.log(`Mode added to badge systerm: ${_mode}`);
    } else {
      console.log("Invalid mode. Please try again.");
    }
    StartApp();
  });
}

function MakeBadge(){
  let total = 0;
  for(let key in badge){
    //add numbers together to total

    total += badge[key];
  }

  //if else statement

let status;
if (total < 10) {
  status = "horrible newbie";
} else if (total >= 10 && total <= 20) {
  status = "adventurer";
} else if (total > 20 && total <= 30) {
  status = "slayer";
} else if (total > 30 && total <= 40) {
  status = "divined";
} else {
  status = "eternal";
}

console.log(`The point total: ${total}. You are: ${status}`);
StartApp();
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    }   else if(_command === "add"){
      AddPoints();
      StartApp();
    }   else if(_command === "status"){
      ShowStatus();
      StartApp();
    }   else if (_command === "summary") {
      MakeBadge();
     }  else{
      StartApp();
    }
  })
}

StartApp();