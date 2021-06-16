
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern= [];
let userClickedPattern = [];

let started = false;
let level = 0;

function nextSequence(){
    userClickedPattern = []
    console.log(userClickedPattern)
    level += 1
    $("#level-title").text("level " + level)
    let randomNumber = Math.floor((Math.random() *3) +1 );
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // console.log(randomChosenColour)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); //flash the button
    playSound(randomChosenColour)  
   
}

function checkAnswer(currentLevel){
    console.log(currentLevel)
    if(userClickedPattern[currentLevel]=== gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence()
            }, 1000);
          }
    }else{
        console.log("wrong")
        var wrongAudio = new Audio("/Users/gabi/Desktop/SimonsGame/sounds/wrong.mp3")
        wrongAudio.play();
        $("body").addClass("game-over");
        $("#level-title").text('WROOOOOOONG!') 
        setTimeout(function(){
            $("body").removeClass("game-over");
            $("#level-title").text("Game Over, Press ENTER to Restart ") 
        },1000) 
        startOver()
    }

}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false

}


function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")}, 1000)

}


$('.btn').click(function(){
    let userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    animatePress(userChosenColor)
    playSound(userChosenColor)
    checkAnswer(userClickedPattern.length -1)

    
    
})
//.on( "keydown", handler )
$(document).keydown( function(e){
    if(e.which==13){
        if (!started) {
            $("#level-title").text("Level " + level);
            setTimeout(
                function(){nextSequence()},
                500);
            started = true;
          }
    }
    
})
