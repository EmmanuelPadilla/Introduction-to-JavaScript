/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let taste = 'delicious';
let food = 'meat';

if(food === 'sirloin' ){
    taste = 'delicious';

} else if ( food === 'veggies'){
    taste === 'no good'
}
console.log (taste);


// 



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
 var text ="1999"

 var integer = parseInt(text, 10)
     console.log (integer);
 
 





//Task d: Write a function to multiply a*b 

function multiply (num1,num2){
    return num1 * num2;
}
console.log(multiply (2, 3));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


//var 
function dogYears (humanAge){
   var dogFactor = 7;
    
  return (humanAge * dogFactor );  
}
console.log(dogYears(10));
//



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
// function howMuchFeed(final){
    // console.log("your dog needs", final, "pounds of food")
// }
function Dog(age,weight){
    if (age = 1 && weight  <= 5){
        return (weight * .05);
    }
    else if (age = 1 && weight <10){
        return (weight * .04);
        
    }else if (age = 1 && weight <15){
        return (weight * .03);
    }
    else if(age = 1 && weight >15){
        return (weight * .02);
    }
    else if (age >.166666 && weight <= .333333){
        return (weight * .1)
    }
    else if (age > .333333 && age <= .583333){
        return (weight * .05)
    }
    else (age > .58333 && age <=.9999)
        return (weight * .04 )
}


console.log (Dog(1,15));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// var rock =  

function rps(userInput){
    const computerChoice = math.floor(math.random() *3 + 1 )
    let userImputNum = 0;

    if (userImput === "rock"){
        userImputNum = 1
    }
    else if (userImput === "paper") {
        userImputNum = 2 
    }
    else if (userImput === "scissors" ){
        userImputNum = 3 

    }
    console.log(computerChoice)
    console.log(userImputNum)
    }
    
    if (computerChoice === userImputNum){
        console.log("Oh Darn, a tie...")
    }
    else if (computerChoice === 1 && userImputNum === 3){
        console.log("eat it!")
        return "Lose";
    }else if (computerChoice === 3 && userImputNum === 1){
        console.log("winner winner, chicken dinner")
        return "win";
    }
    else if (computerChoice < userImputNum){
        console.log("you WIN!")
    }

rps("scissors")
    console.log(rps("rock"))








  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function convertKm (km){
    var conversionFormula = 0.621371
    return (conversionFormula * km);

}
console.log (convertKm (3));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function convertFt (ft){
    var conversionFormula = 30.48
    return (conversionFormula * ft);

}
console.log (convertFt (3));




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong() {  
    for (let i = 99; i >= 1; i--){

    }
}
  console.log(annoyingSong());


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function scoreGrade (grade){
    if (grade >=90 && grade <=100){
    return ("A");
    }
    else if (grade >=80 && grade <=89.999){
        return ("B")
    }
    else if (grade >=70 && grade <=79.999){
        return ("C")
    } 
    else if (grade >=60 && grade <=69.999){
        return ("D")
    } 
    else (grade <=59.99)
        return ("F")
    }

console.log (scoreGrade (5));
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

// 
