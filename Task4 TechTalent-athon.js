//this will generate a random number below 1000
let raceNumber = Math.floor(Math.random ()* 1000);
//reate a variable that indicates whether a runner registered early or not.Set it equal to a Boolean value.
const earlyRegistered = true;
//Create a variable for the runner’s age 
let runnerAge =19;
//here i have added my own addition where it will print the age first before the control flow print
console.log(`Racer age:${runnerAge}`);
//here below created a control flow to check if its an adult and registered early, if so add 1000 to there racenumber.
//else if statement forif runner is a adult but applied late they will race later at 11:00am. ! = logical operator that will convert a value to its opposite boolean
if (runnerAge > 18  && earlyRegistered) {
  raceNumber += 1000;
  console.log(`Your race time will be at 9:30am and your Race Number is ${raceNumber} good luck!`);
} else if (runnerAge > 18 && !earlyRegistered){
  console.log(`Your race time will be at 11:00am and your Race Number is ${raceNumber} good luck!`);
} else if (runnerAge < 18){
  console.log(`Your race time will be at 12:30pm and your Race Number is ${raceNumber} good luck!`);
} else {
  console.log('Please go to the Registration Desk!')
}
