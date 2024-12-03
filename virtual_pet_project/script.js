//initialise ids from document
const petName = document.getElementById('name');
const submitButton = document.getElementById("submit_button");
const intro = document.getElementById("intro");
const dog = document.getElementById("dog");
const all_buttons = document.getElementById("buttons");
let gameover = document.getElementById("GameOver");

gameover.style.display = "none";


//adds on click listener event to do something when button is clicked
submitButton.addEventListener("click", function(){
    const name = petName.value;

    if(name != null && name != "" ){
        displayName = document.createElement('p');
        displayName.textContent = "You  got a new puppy called " + name + "!";
        //display it on the dom
        intro.appendChild(displayName);

        //make the input box and submit button disappear 
        petName.style.display = "none";
        submitButton.style.display = "none";
        // Telling user to know which buttons affect pet's health
        let stats = document.getElementById("feedstats");
        stats.textContent="Take care of "+ name + " - loneliness or madness can affect their well-being";
    }

});


//initialise variables for health, hunger and happiness
//let happiness = 50;
//let health = 50;
//let hunger = 80; //higher is worse??



// Current Levels
let number = 50;
let happy= document.getElementById("happiness");
happy.textContent = "Happiness: " + number ;
let healthy = document.getElementById("health");
healthy.textContent = "Health: " + number ;



//iniitialise action buttons
const feed = document.getElementById("feed_button");
const pet = document.getElementById("pet_button");
const treat = document.getElementById("treat_button");
const sleep = document.getElementById("sleep_button");
const dontplay = document.getElementById("dontplay_button");


//initialise array with images of dog
let dogMoods = [
    "/PET_ASSETS/dog_happy.png",
    "/PET_ASSETS/dog_mad.png",
    "/PET_ASSETS/dog_normal.png",
    "/PET_ASSETS/dog_sad.png",
    "/PET_ASSETS/dog_sleeping.png",
    "/PET_ASSETS/dog_surprised.png"
];


// Getting all elements of dog mood pics in variables
const happy_dog = dogMoods[0];
const mad_dog = dogMoods[1];
const normal_dog = dogMoods[2];
const sad_dog = dogMoods[3];
const sleeping_dog = dogMoods[4];
const surprised_dog = dogMoods[5];


// Functions for dog buttons to work 
function sleepdog(){
    let doggymood = document.getElementById("doggy");
    doggymood.src = sleeping_dog;
    number += 10;
    happy.textContent = "Happiness: " + number ;
    healthy.textContent = "Health: " + number ;
    checkgameover(number);
}

function feeddog(){
    let doggymood  = document.getElementById("doggy");
    doggymood.src = happy_dog;
    number += 10;
    happy.textContent = "Happiness: " + number ;
    healthy.textContent = "Health: " + number ;
    checkgameover(number);
    }

function petdog (){
     let doggymood = document.getElementById("doggy");
    doggymood.src = normal_dog;
    number += 10;
    happy.textContent = "Happiness: " + number ;
    healthy.textContent = "Health: " + number ;
    checkgameover(number);
     }

function treatdog (){
     let doggymood = document.getElementById("doggy");
      doggymood.src = surprised_dog;
      number += 10;
    happy.textContent = "Happiness: " + number ;
    healthy.textContent = "Health: " + number ;
    checkgameover(number);
      }

function leavealonedog (){
     let doggymood = document.getElementById("doggy");
     doggymood.src = sad_dog;
     number -= 10;
    happy.textContent = "Happiness: " + number ;
    healthy.textContent = "Health: " + number ;
    checkgameover(number);
     }

function maddog (){
     let doggymood = document.getElementById("doggy");
    doggymood.src = mad_dog ;
    number -= 10;
    happy.textContent = "Happiness: " + number ;
    healthy.textContent = "Health: " + number ;
    checkgameover(number);
     }
   


//adds on click listener event to do something when button is clicked
//feed.addEventListener("click", function(){
  //  hunger -= 20;
   // happiness += 5;
   // health += 20;

    //check values of variables after clicking feed button
    //console.log("happiness", happiness);
    //console.log("health", health);
    //console.log("hunger", hunger);

//});


//check initial values of the variables
//console.log("happiness", happiness);
//console.log("health", health);
//console.log("hunger", hunger);



// GAME OVER FUNCTION
function checkgameover(){
if ( number <= 0 ){

intro.style.display = "none";
dog.style.display = "none";
all_buttons.style.display = "none";

gameover.textContent = "GAME OVER";
gameover.style.display = "block";

}
}// end of function

