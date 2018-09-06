var questions = [{
    ques: "Which movie had the famous line &quot;Snakes. Why'd it have to be snakes?&quot;?",
    ans: ["The Goonies", "Die Hard", "Blade Runner", "Indiana Jones in Raiders of the Lost Ark"],
    name: "whySnakes",
    correct: "Indiana Jones in Raiders of the Lost Ark",
    divClass: ".whySnakes"
},
{
    ques: "There's a ghost in your house. Who are you gonna call?",
    ans: ["Ferris Beuller", "your mom", "Ghost Busters", "Ziggy Stardust"],
    name: "whoToCall",
    correct: "Ghost Busters",
    divClass: ".whoToCall"
},
{
    ques: "&quot;Hello. My name is Inigo Montoya. You killed my father. prepare to die.&quot; What actor played the iconic character who said this?",
    ans: ["John Stamos", "Antonio Banderas", "Mandy Patinkin", "Mike Myers"],
    name: "inigo",
    correct: "Mandy Patinkin",
    divClass: ".inigo"
},
{
    ques: "What band played the song &quot;Weird Science&quot;, the theme song for the movie of the same name?",
    ans: ["Flock of Seagulls", "Oingo Boingo", "The Cure", "Aerosmith"],
    name: "weirdScience",
    correct: "Oingo Boingo",
    divClass: ".weirdScience"
},
{
    ques: "What actor spoke the famous line &quot;Bueller...? Bueller...? Bueller....?&quot; when Ferris took his day off?",
    ans: ["Bill Nye", "Ben Stein", "Matthew Broderick", "Bill Murray"],
    name: "bueller",
    correct: "Ben Stein",
    divClass: ".bueller"
},
{
    ques: "This person starred and co-starred in many 80's films, including &quot;Honey, I Shrunk the Kids&quot; and &quot;Litte Shop of Horrors,&quot but left acting to be a full-time dad.",
    ans: ["Rick Moranis", "Vincent Gardenia", "William Shatner", "Jared Rushton"],
    name: "seymour",
    correct: "Rick Moranis",
    divClass: ".seymour"
},
{
    ques: "What artist sang the 1986 song &quot;Danger Zone&quot; from Top Gun?",
    ans: ["Rod Stewart", "Joan Jhett", "David Bowie", "Kenny Loggins"],
    name: "topGun",
    correct: "Kenny Loggins",
    divClass: ".topGun"
},
{
    ques: "Which movie marked the beginning of a long string of successful Disney movies, often referred to as the Disney Renaissance Era?",
    ans: ["Beauty and the Beast", "The Little Mermaid", "Aladdin", "Lady and the Tramp"],
    name: "disney",
    correct: "The Little Mermaid",
    divClass: ".disney"
},
{
    ques: "In the Brat Pack movie &quot;The Breakfast Club&quot;, what does John Bender give Claire Standish as a token of his affection for her?",
    ans: ["a bracelet", "an earring", "his notebook", "his class ring"],
    name: "bratPack",
    correct: "an earring",
    divClass: ".bratpack"
},
{
    ques: "In 'Dirty Dancing' what was Baby's real name?",
    ans: ["Francesca", "Marion", "Frances", "Edie"],
    name: "dirtyDancing",
    correct: "Frances",
    divClass: ".dirtyDancing"
}
] 

var labels = ["first", "second", "third", "forth"];

// click to start, display questions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
$(".questions").css("display", "block");
$(".timeLeft").css("display", "block");
});
//play again button set timeleft and endgame to hidden--only if parent hide doesn't work

//var playAgain = (".again-btn").on('click', function() {
    //$(this).parent().hide();
   // $('.container').show();
   //countdown(60);
   //questionDisplay();



var questionDisplay = function() {
$(".questions :not('#sub-btn')").empty();
 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}

}
}



var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#rightAnswersTime').append(correctAnswers);

    $('#wrongAnswersTime').append(wrongAnswers);
    $('#timeUp').fadeIn(1000).show();

    // alert "time's up"???
    clearInterval(timer);
    return;
}
}, 1000);


$('#sub-btn').on('click', function() {
clearInterval(timer);
})
}; 



var gradeQuiz = $('#sub-btn').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;


for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};


countdown();

$('.container').fadeOut(500);

$('#endPage').show();

$('#correctScreen').append(correctAnswers);

$('#wrongScreen').append(wrongAnswers);

}); 