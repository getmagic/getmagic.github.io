var questions = ["25x32", "1/2*1/2"];
var correctans = ["800", "1/4"];
var solution = ["25x32_sol", "1/2*1/2_sol"];
var question_number=0;

function mathbegin() {
  var d = new Date();
  var n = d.getTime();
  starttimer(n);
  var score = 0;
  randomize();
  document.getElementById("Initial").style.display = "none";
  document.getElementById(questions[0]).style.display = "block";
  document.getElementById('submit').style.display = "block";
}

var t, mins, secs;
var count = 600; //600
function timerdisplay() {
  var mins = Math.floor(count / 60);
  var secs = count % 60;
  document.getElementById('timer').innerHTML = 'Time left: ' + mins + ' minutes and ' + secs.toFixed(0) + ' seconds.';
}

function starttimer() {
  // starts countdown
  timerdisplay();
  if (count === 0) {
    // time is up
    document.getElementById("timer").innerHTML = "TIME UP!";
    document.getElementById("submit").style.display = "none";
    document.getElementById(questions[question_number]).style.display = "none"; //questions[question_number] not QFrame
    document.getElementById("Correct").style.display = "none";
    document.getElementById("Wrong").style.display = "none";
    //document.getElementById("Ending").innerHTML = score + " out of " + (questions.length - 1) * 10;
    document.getElementById("Ending").style.display = "block";
    document.getElementById("EndScore").style.display = "block";
    document.getElementById("EndScore").innerHTML = score + " out of " + (questions.length - 1) * 10;
  } else {
    count--;
    t = setTimeout(starttimer, 1000);
  }
}

function timerpause() {
  // pauses countdown
  test_time_secs = 600 - count;
  clearTimeout(t);
}
if (question_number == 15) {
  clearInterval(t);
  clearTimeout(t);
  timerpause();
  document.getElementById("QFrame").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("Ending").style.display = "block";
}

function showNextQuestion() {
     document.getElementById("NotSubmit").style.display = "none";
     document.getElementById("Wrong").style.display = "none";
     document.getElementById("Correct").style.display = "none";
     document.getElementById("submit").style.display = "block";
     document.getElementById(questions[question_number]).style.display = "none";
     if (question_number < questions.length - 1) {
       question_number = question_number + 1;
       document.getElementById('submit').style.visibility = "visible";
     };
     if (question_number == questions.length-1) {
       document.getElementById("timer").innerHTML = "Time taken: " +  test_time_secs + " secs.";
       document.getElementById('submit').style.visibility = "hidden";
     };
     document.getElementById(questions[question_number]).style.display = "block";
     document.getElementById("EndScore").innerHTML = score + " out of " + (questions.length - 1) * 10
     
   };




function randomize() {
  var j, x, i, y, z;
  for (i = questions.length - 1; i; i--) {
    j = Math.floor(Math.random() * i);
    x = questions[i - 1];
    y = correctans[i - 1];
    z = solution[i - 1];
    //swapped 2 variables 
    questions[i - 1] = questions[j];
    correctans[i - 1] = correctans[j];
    solution[i - 1] = solution[j];
    questions[j] = x;
    correctans[j] = y;
    solution[j] = z;
  };
}

function submitanswer() {
  document.getElementById("submit").style.display = "none";
  var text = document.getElementById("text_answer");
  if (text.value == '') {
    // when no text is entered and "submit" is clicked.
    document.getElementById("NotSubmit").style.display = "block";
    document.getElementById("submit").style.display = "block";

  } else {
    // when a text button is written on, do the following         
    document.getElementById("NotSubmit").style.display = "none";
    //document.getElementById("submit").disabled=true;
    var useranswer = text.value;
    if (useranswer == correctans[question_number]) {
      //if user selected answer is the right one
      score += 10;
      document.getElementById("Correct").style.display = "block";
      document.getElementById("NotSubmit").style.display = "none";

    } else {
      // when answer is wrong
      document.getElementById(solution[question_number]).style.display = "block";

    };
  };

if (question_number == 14) {
  timerpause();
};

};


   
