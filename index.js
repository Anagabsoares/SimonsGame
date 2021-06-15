
let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern= []
let userClickedPattern = []

function nextSequence(){

    let randomNumber = Math.floor((Math.random() *3) +1 );
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); //flash the button
    playSound(randomChosenColour)
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
})
//.on( "keydown", handler )
$("document").keydown(function(){
    nextSequence()
    console.log('printe')
})