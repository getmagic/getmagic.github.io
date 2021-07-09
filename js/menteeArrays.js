/*The arrays that hold the mentee's information. To add more mentees, add their information into these arrays. menteeThumbnails is the photo that is displayed as a preview in the image carousel, the menteeNames and menteeGrades are the information located inside the "menteeInfoDiv' in codeBlock, and the menteeLinks is their website. */
var menteeThumbnails=[];
var menteeAbbrevs=[]; //ex. Aline Garcia would be "AlineG" in menteeAbbrevs
var menteeNames = ["Aline Garcia", "Evelyn Loza", "Anjali Ulrich", "Jalyn Mayer", "Leyla Rivera", "Siya Kamboj", "Kimberly Barillas"];
var menteeGrades= ["Middle School", "High Schoool", "Middle School", "High School", "Middle School", "Middle School", "High School"];
var menteeYears = ["2017", "2015", "2018", "2018", "2017", "2017", "2020"];
var menteeDescriptions= [
  "This website includes two games: Guess My Number and Catch!", //Aline
  "This website explains what human trafficking is, the types of trafficking, where trafficking occurs, and solutions to the problem.", //Evelyn
  "This website tells people what supplies you need and how you make slime!", //Anjali
  "This website determines whether or not someone has a concusion or symptoms of a concusion.", //Jalyn
  "This website includes resources for Animal Shelters in the Bay Area and 2 games about the life of a dog living in a shelter.", //Leyla
  "This website teaches math, science, and vocabulary for 3 different difficulty levels: Beginner, Intermediate, and Advanced.", //Siya
  "This website consists of an information page about fornesic chemistry and a game with 10 riddles."//Kimberly
];
/*var menteeEntrances=[
  "Aline's hard work and dedication led to her making not one, but two games! Check out her website below.", //Aline
  "Evelyn's passion and determination led to her explaining many causes and effects of human trafficking. Check out her website below.", //Evelyn
  "Anjali's hard work and creativity led her to making this website. Check it out below!", //Anjali
  "Jalyn's diligence and persistence led her to make a website about determining whether you have a concusion. Check out her website below!", //Jalyn
  "Leyla's hard work and dedication led to her making two games and a resources page! Check out her website below.", //Leyla
  "Siya's hard work and dedication led to her making an educational website with multiple levels! Check out her website below.", //Siya
  "Kimberly's hard work and dedication led to her making an informative page and a game with riddles! Check out her website below."//Kimberly
];*/
var menteeWorkTypes=["Website", "Website","Website","Website","Website","Website","Website"];
var menteeAboutProj=[
"The first part of Aline's website is <i>Guess My Number</i>, where you have to guess a random number from 1-100. Aline designed it so that the computer tells the user whether to go above or lower the number they guessed to figure out the computer generated number. After you guessed the number, the computer will display how many tries it took you as well as what your average tries were throughout many games. In her second game, <i> Catch! </i>, users will have to use the arrow keys to move the purple bar to catch green squares, but have to avoid the orange squares.",
"Evelyn's project has five parts: Home, Human Trafficking, Where, Media, and Act. Her <i>Home</i> page contains pictures pertaining to human trafficking. Her <i>Human Trafficking</i> tab contains a summary of human trafficking, as well as the types of human trafficking and the consequences for victims. Her <i>Where</i> page lists the places where human trafficking occurs and her <i>Media</i> page contains videos for more information. Finally, her <i>Act</i> tab contains possible solutions for this problem.",
"Anjali's project has three parts: Home, Supplies, and DIY. The home page gives an introduction of slime. The supplies page lists the objects needed to make slime, as well as warnings for younger children about slime products. Finally, the DIY page has a youtube link with a tutorial by Anjali on how to make slime.",
"Jalyn's website has three parts: testing whether a person has a concusion, testing whether their child has a concusion, and tracking the symptoms of individuals who amy have a concussion. The first two parts are done through a series of questions which Jalyn made to determine if a person has a concussion or not.",
"The home page includes an image carousel with 3 images of animals and 2 more tabs on the navigation bar. The first tab,  <i> Games</i> , consists of 2 different games; in one game, a shelter dog physically moves through the different stages of his life while in the other game, the user utilizes arrow keys to guide a dog to safety. Finally, the  <i>Resources</i> tab links the user to the home page of various animal shelters located throughout the Bay Area.",
"Siya's website teaches math, science, and vocabulary at 3 different difficulty levels. The user is given 10 minutes to complete all of the Beginner questions; on the other hand, the user is given 10 seconds per question on the Intermediate and Advanced sections. In order to code her website, she learned HTML, CSS, and Javscript from Codeacademy and w3schools.",
"Kimberly coded a website that provides information about forensic chemistry; it takes the user through a set of related murder riddles and provides options for answers. When the user selects an option, it gives them feedback if the answer is correct or not. In order to build her project, she learned HTML, CSS, and Javascript."
];
var menteeMentorRelats=[
"Both projects, Guess the Number and Catch!, took Aline a year to make. She used html and css to develop both games.She learned a lot from her mentor, Ira Pramanick, and she had an enjoyable experience.",
"This project took Evelyn a year to make. She is very passionate about discussing about human trafficking and thinks it is a big injustice. She and her mentor enjoyed this experience of learning to code.",
"Like many other mentees, this project took Anjali a year to make. She loves making slime and makes videos on slime as well. Anjali and her mentor Priscilla enjoyed working together.",
"Jalyn has learned many things through her MAGIC Experience. She loves to code and she loved coding and appreciates the help from her mentor Jen.",
"The website (which includes a home page with an image carousel, 2 games, and a Resources Page) took Leyla a year to complete. She used HTML & CSS to develop the website and Scratch to code her games.She learned a lot from her mentor, Priscilla Pham, and she had an enjoyable experience with MAGIC.",
"Siya enojyed her experience with her mentor, Venmathi Gunasekaran, who worked at Medtronic on early phase Research and Development projects. Together, they videocalled every week and met up twice in person in order to complete her website.",
"Kimberly has learned many things through her MAGIC Experience. She loves to code and she loved coding and appreciates the help from her mentor, Ira Paramanick."
];
var menteeInterviews=[
"https://www.youtube.com/embed/5o47rX09ap8", 
"https://www.youtube.com/embed/lwbXdMxa904?start=114&end=132;",
"https://www.youtube.com/embed/d8P52gWBTm8",
"https://www.youtube.com/embed/5o47rX09ap8", //NEED TO CHANGE THE INTERVIEW! (THIS IS ALINE'S, NEED JALYN'S)
"https://www.youtube.com/embed/LW-xDRtHeyY",
"https://www.youtube.com/embed/WpR6ucZRgjw",
"https://www.youtube.com/embed/WpR6ucZRgjw"
];


/*//IF YOU WANT ONLY THE FIRST SEVEN MENTEES TO BE ON THE WEBSITE. TO CHANGE THE NUMBER OF MENTEES YOU WANT, CHANGE THE 7 IN THE .SPLICE COMMAND.
var allMenteeInformation=[menteeNames, menteeGrades, menteeYears, menteeDescriptions, menteeWorkTypes, menteeAboutProj, menteeMentorRelats, menteeInterviews];
  for (var i=0; i<allMenteeInformation.length; i++){
      var removedelementsdynamic=allMenteeInformation[i].splice(7, allMenteeInformation[i].length);
  }*/


/*--------- Fills in menteeAbbrevs ---------*/
for (var i=0; i<menteeYears.length; i++){
  function getMenteeAbbrevs() {
    var names=menteeNames[i].split(' '); //split the first and last name. ex: "Aline Garcia" becomes "Aline" "Garcia"
    initials=names[0]; //variable names is defined as the first name. ex: initals="Aline"
    initials += names[names.length - 1].substring(0, 1).toUpperCase(); //add the uppercase, initial of the last name. ex: initials="AlineG"
    menteeAbbrevs[i]=initials;
  }
getMenteeAbbrevs();
}
/*------ Fills in menteeThumbnails -----*/
for (var i=0; i<menteeYears.length; i++) {
  menteeThumbnails[i]="images/" + menteeYears[i] + "/" + menteeAbbrevs[i] + "/Thumbnail_Photo.png";
}


/*-------------------------CODE FOR IMAGE CAROUSEL IN INDEX.HTML UNDER STUDENT PROJECTS TAB ----------------*/
/*Adds a new div named mySlides, a new <p> named "madepara" and adds the "codeBlock" information inside "madepara. At the end, the "mySlides" div is appended into the mainContainer carousel and the "para" element is appended inside the "mySlides" div. */
  /* createNewMenteeDiv(), addDots(), and showSlides(slideIndex) are called in the body tag of index.html */
  
function createNewMenteeDiv() {
  for (var i = 0; i < menteeNames.length; i++) {
    var divBlock = document.createElement("div");
    divBlock.className = "mySlides";
    var para = document.createElement("P");
    para.className = "madepara";
    var codeBlock =
      `<a class="` + i + ` NewA" >
        <img class="` + i + ` mentee-photos" src="` + menteeThumbnails[i] + `" alt="` + menteeNames[i] + `'s Project">
        <div class="` + i + ` menteeInfoDiv">
          <h3 class="` + i + ` mentee-name menteeInfo">` + menteeNames[i] + `</h3>
          <div class="` + i + ` mentee-grade menteeInfo">` + menteeGrades[i] + `</div>
        </div>
      </a> `;
    para.innerHTML = codeBlock;
    mainContainerCarousel.appendChild(divBlock);
    divBlock.appendChild(para);
  }
}
  
  //Adds the dots at the bottom of the carousel
function addDots() {
  for (var i=1; i<(menteeNames.length + 1); i++){
    var paraDot2= document.createElement("P");
    var codeBlock2= `<span class="dot-carousel" onclick="currentSlide(` + i + `)"></span> `;
    paraDot2.innerHTML= codeBlock2;
    secondContainerDots.appendChild(paraDot2);
  }
}
  
//The code for the image carousel
var slideIndex = 1;
//plusSlides called when the prev-button and next-button are pressed
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//currentSlide called when the appropriate "dot" is pressed at the bottom of the carousel
function currentSlide(n) {
  showSlides(slideIndex = n);
}
  
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot-carousel");
  //if u press "next-button" when there are no more slides, it returns to the 1st slide.
  if (n > slides.length) {slideIndex = 1}
  //if u press "prev-button" when you are already on the first slide, it goes to the last slide
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" d-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " d-active";
}
  
  
  /*--------------------------------------end of code of image carousel on index.html --------------------*/
  /* ------------------------------------CODE FOR allProjects.html --------------------------------------*/
  /*This code is called in the body tag on allProjects.html */
function createNewMenteeSquare() {
  for (var j = 0; j < menteeNames.length; j++) {
  var paraNew = document.createElement("div");
  paraNew.setAttribute("class", "AllProjects_Div");
  var codeBlock2 =
  ` <a class="`+ j + ` col-md-4 single-blog lifestyle bottom_60 ">
    <img class="` + j + ` mentee-photos" src="`+ menteeThumbnails[j] + `" alt="` + menteeNames[j] + `'s Project">
    <h2 class="` + j + ` title">`+ menteeNames[j] + `</h2>
    <span class="` + j + ` date">` + menteeGrades[j] + `</span>
  </a> `;
  paraNew.innerHTML = codeBlock2 ;
  divToAppend.appendChild(paraNew);
  
  }
}
  /*-------------------------------CODE FOR PROJECTTEMPLATE.HTML -----------------------*/
  //when something on the <body> is clicked, run the code
  function seeifClick(){
    $( ".myBodClick" ).click(function( event ) {
      var x= $(event.target).attr('class'); //gets the class of the clicked function
      var y= x.split(" ")[0]; //only takes the first class element
      setTheLink(y);
  });

  }
  

  function setTheLink(numberparam){ 
    var scrt_var = numberparam;
    var strLink = "?" + scrt_var;
    //if you are on allProjects.html:
    var elements = document.getElementsByClassName('col-md-4 single-blog lifestyle bottom_60');
    //if you are on index.html rather than allProjects.html:
    if (elements.length<1){ 
      elements = document.getElementsByClassName('NewA');
    }
    for (const element of elements) {
    element.href = "ProjectTemplate.html" + strLink; //strLink sends the var to the Project.Template file
  }
  }
  
  

  function changeText(number2){
    AbbrevsToSend=menteeAbbrevs[number2];
    NamesToSend=menteeNames[number2];
    ThumbnailsToSend=menteeThumbnails[number2];
    menteeHref="MenteeCodes/"+ menteeYears[number2]+ "/Mentee"+ AbbrevsToSend + "/index.html";
    document.getElementById("titleToReplace").innerHTML= "MAGIC " + NamesToSend + "'s Website";
    document.getElementById("headingToChange").innerHTML= NamesToSend;
    document.getElementById("descriptionToChange").innerHTML= menteeDescriptions[number2];
    //document.getElementById("entranceToChange").innerHTML= menteeEntrances[number2];
    document.getElementById("entranceToChange").innerHTML= NamesToSend;
    document.getElementById("nameToChange").innerHTML= NamesToSend;
    document.getElementById("gradeToChange").innerHTML=menteeGrades[number2];
    document.getElementById("yearToChange").innerHTML=menteeYears[number2];
    document.getElementById("typeToChange").innerHTML=menteeWorkTypes[number2];
    document.getElementById("hrefToChange").href=menteeHref;
    /*Add images in Portoflio Slider and call setTimerfunct()*/
    for (var i=1; i<5; i++){ //repeats 4 times
      var divBlockCarous = document.createElement("div");
      divBlockCarous.className = "mySlidesPortCarous";
      var codeBlockCarous=
      `<img class="PortImageCarousImg" src='images/`+ menteeYears[number2]+ `/` + AbbrevsToSend + `/Example_Photo`+ i +  `.png'/>`;
      divBlockCarous.innerHTML=codeBlockCarous;
      tryToAppendCarous.appendChild(divBlockCarous);
    }
    setTimerFunct();

    document.getElementById("AboutToChange").innerHTML=menteeAboutProj[number2];
    document.getElementById("ReflecToChange").innerHTML=menteeMentorRelats[number2];
    document.getElementById("nameDecToChange1").innerHTML=NamesToSend.split(" ")[0];
    //Change code images
      document.getElementById("codeToChange1").src= "images/" + menteeYears[number2] + "/" + AbbrevsToSend+ "/Code1.png";
      document.getElementById("codeToChange2").src= "images/" + menteeYears[number2] + "/" + AbbrevsToSend+ "/Code2.png";
    document.getElementById("nameDecToChange2").innerHTML=NamesToSend.split(" ")[0];
    document.getElementById("youtubeToChange").src=menteeInterviews[number2];
  }


  function setTimerFunct(){
    var slidesCarous = document.getElementsByClassName("mySlidesPortCarous");
    setInterval(function(){tryToAppendCarous.appendChild(slidesCarous[0]);}, 3000); //moves every 3 seconds
}

/*-------------------------------------------------------END OF CODE FOR PROJECTTEMPLATE.HTML ----------------------------------------*/

/*-------------------------------------------------------CODE FOR UPLOADPROJ.html ----------------------------------------------------*/
var current_fs, next_fs, previous_fs; //fieldsets
  var animating; //prevents errors if there are multiple fieldsets
  var correctusername="getmagic";
  var correctpassword="getmagic";
  var ArrayOfSelectedImages=[];
  
  
function wordLimit(param, param2, param3){
  var BACKSPACE   = 8;
  var DELETE      = 46;
  var maxwords=param3;
  var valid_keys  = [BACKSPACE, DELETE];
    var textValue = document.getElementById(param).value;
       var words = textValue.split(/\s+/);
       if(words.length >= maxwords && valid_keys.indexOf(event.keyCode) == -1){ //if there are more than 100 words and if the key pressed is not backspace or delete, do not let the user continue typing in the box. 
          event.preventDefault();
        }
        document.getElementById(param2).innerHTML= maxwords- words.length;
  }

 
//This is called by uploadProj.html whenever a video, file, or photo is uploaded. The first parameter is always the id of the file and "maxlength" refers to the number of files that need to be uploaded
function getFileInfo(param1, param, maxlength){
  var x = document.getElementById(param1);
  var txt = "";
  if ('files' in x) {
    if (x.files.length == 0) {
      txt = "Select one or more files.";
    } else {
      if (maxlength != null) {
        if (x.files.length != maxlength){
          //This is called whenever the user has uploaded too many OR not enough files
          alert ("You uploaded " + x.files.length + " photo(s). Please upload "+ maxlength + " photos");
          var id_test="#" + param1;
          $(id_test).val(''); //resets the file
          event.preventDefault();
        }

      }
      
     // else { //if it has an appropriate amount of files uploaded
        for (var i = 0; i < x.files.length; i++) {
        txt += "<br><strong>" + (i+1) + ". file</strong><br>";
        var file = x.files[i];
        if ('name' in file) {
          txt += "name: " + file.name + "<br>";
        }
        if ('size' in file) {
          txt += "size: " + file.size + " bytes <br>";
        }
      }
      
    }
  } 
  else {
    if (x.value == "") {
      txt += "Select one or more files.";
    } else {
      txt += "The files property is not supported by your browser!";
      txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
    }
  }
  document.getElementById(param).innerHTML = txt; //This line displays the name of the file and file size for each uploaded file
}


//NEED CLASS="CHOICEOPT" FOR CHECKBOXLANGUAGE
  function addCheckBoxLanguage() {
    var LanguagesArray=["HTML", "CSS", "Javascript", "Python", "Java", "C++", "pHp"];
    for (var i=0; i<LanguagesArray.length; i++){
        var codeBlockLang=
        `<input style="width: 5%; float:left; margin-bottom: 0px;" type="checkbox"  name="Languages Used" value="` + LanguagesArray[i]+ `">
        <label class="labelForCSS" style="float:left;" for="` + LanguagesArray[i] + `">` + LanguagesArray[i] + `</label><br>`;
        $("#checkBoxLang").append(codeBlockLang);
    } 
    $("#checkBoxLang").append("<input id='OtherLang' style='width: 5%; float:left; margin-bottom: 0px;' type='checkbox'; name='Languages Used'; value='Other'> <label class='labelForCSS' style='float:left;' for='Other'>Other</label><br> <input class='choiceopt' id='specifymore3' style='display:none; outline: 0; border-width: 0 0 2px;border-color: black; padding: 0px; transform: translateX(-42%);' type='text' name='Specify Language Used' placeholder='Specify Language Used'/>"); //adds an "other" option and a text option for specification
    $('#no3 input[type=checkbox]').change(function(){ //decides when the text option should show or not
      if (document.getElementById('OtherLang').checked ===true){
        document.getElementById("specifymore3").style.display="block";
      }
      else{
        document.getElementById("specifymore3").style.display="none";
      }
    })
  }//end of addCheckBoxLanguage



function moveNext(param){
  current_fs = $(param).parent(); //param is "this"
  next_fs = $(param).parent().next();
  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  current_fs.hide();
  //show the next fieldset
  next_fs.show();
}


function startuploadProj(){
$('#no3 input[type=radio]').change(function(){
  // If the user chooses "software", then the "software div" from uploadProj.html is displayed
  if (document.getElementById("Software-Choice").checked===true){ 
    document.getElementById("SoftwareDiv").style.display="block";
    if (document.getElementById("webchoice").checked===true ){
      document.getElementById("uploadNonWebsiteVideo").style.display="none";
    }
    else{
      document.getElementById("uploadNonWebsiteVideo").style.display="block";
    }
  }
  else if (document.getElementById("Software-Choice").checked===false){
    document.getElementById("SoftwareDiv").style.display="none";
    document.getElementById("uploadNonWebsiteVideo").style.display="block";
  }
    if (document.getElementById("other").checked === true){
      document.getElementById("specifymore1").style.display="block";
    }
    else if (document.getElementById("other").checked === false){
      document.getElementById("specifymore1").style.display="none";
    }
    if (document.getElementById("webchoice").checked === true){
      document.getElementById("divWhenWebSelect").style.display = "block";
      if (document.getElementById("nogitweb").checked=== true){
        document.getElementById("specifymore2").style.display="block";
      }
      else{ //if option "no" in website is not selected
        document.getElementById("specifymore2").style.display="none";
      }
    }
    else{ //if website is not selected
      document.getElementById("divWhenWebSelect").style.display = "none";
    }
  })

//Produces an error message if the user tries to advance to the next fieldset without completing all the relevant fields in the current fieldset. 
$(".next").click(function(){
  var choices=document.getElementsByClassName("choiceopt");
  var ArrayOfChoices=Array.from(choices); //makes choices an array
  var res= "The following argument(s) must be filled out: ";
  var arg1Array=[];
  for (var i = 0; i < ArrayOfChoices.length; i++) { //the length of the number of parameters
    if ($(ArrayOfChoices[i]).is(":visible")) {  //if the class is not hidden (ensures that we are only looking at the argumenets in the current fieldset)
      var arg1=ArrayOfChoices[i].name;
      var x=document.forms["myForm"][arg1].value;
      if (x ==="") { //if x is empty
        if (arg1Array[arg1Array.length -1]!= arg1) { //ensures that in radio buttons or checklists where there are multiple error messages for the same error, only one of the errors is added to the list.
          arg1Array[arg1Array.length]= arg1;
          var res= res + arg1 +  ", " ;
        } //end of (if arg1Array[length] != arg1)
      } //end of if x is empty
    }//end of if visible
  }//end of for loop
  if(res.valueOf() != "The following argument(s) must be filled out: "){
    alert(res);
  }
  else{ //if all the argumenets in the current fielset are filled out: 
    //lines 390-397 might be useless since this code was written before firebase performed password authentication
    if ($(document.getElementById('no1')).is(":visible")){ //if we are on the first fieldsset
      var writtenusername=document.forms["myForm"]["Username"].value;
      var writtenpassword=document.forms["myForm"]["Password"].value;
      if (writtenusername!=correctusername || writtenpassword!=correctpassword){
        alert ("Username and/or Password is incorrect");
        return false; //the rest of teh function is not executed
      }
    }//end of first fieldset

    else if ($(document.getElementById('no2')).is(":visible")){ //if we are on the second fieldset
      var useryear=document.forms["myForm"]["Year-you-were-a-mentee"].value;
      if (useryear.length!=4){
        alert ("Please enter a valid year");
        return false;
      }
    }//end of second fieldset
  moveNext(this);
  } //end of else
});


$(".previous").click(function(){
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  current_fs.hide();
  previous_fs.show();
}); //end of previous click



} //end of function startUploadpROJ()


/*POP UPS*/
function addPopUps(){
  var ArrayOfPopUpImages=["ProjectDescription", "MenteeRelationship", "ProjectSummaryEx", "Thumbnail1", "ProjectPhotos", "CodePhotos", "CodeFiles"];
  var listOfDiv=document.getElementsByClassName("popup");
  for (var i=0; i< listOfDiv.length; i++){
      var newId="popupid"+i;
      var newSpanId="myPopuptest"+i;
      listOfDiv[i].setAttribute("id", newId);
      var codeBlock=
      `<img class="questbutt" src="images/PopUpForm/question_popup.jpeg">
      <span class="popuptext" id=`+ newSpanId + `><img class="imghehe" src="images/PopUpForm/` + ArrayOfPopUpImages[i] + `.png"></span>`;
      var newIdNew="#" + newId;
      $(newIdNew).append(codeBlock);
  }
}

//myFunction is called whenever a pop-up icon is clicked. This function displays the corresponding image. 
function myFunction(param) {
  var idofDiv="#"+param;
  var x= $(idofDiv).find("span"); 
  var span_Id_current= x.attr("id"); //get the Id of the span element inside the given div
  var currentpopup = document.getElementById(span_Id_current);
  //Stops multiple pop-ups from being open at the same time 
  var listofPopUpText=document.getElementsByClassName("popuptext");
  for (var i=0; i<listofPopUpText.length; i++){
    if (listofPopUpText[i].id != span_Id_current){ //if the id is not equal to teh current id, remove hte class "show"
      listofPopUpText[i].classList.remove("show");
    }
  }
  //if the current pop up is showing, it hides. if the current pop up is hiding, it shows. 
  if (currentpopup.classList.contains("show") === false) {
    currentpopup.classList.add("show");
  }
  else {
    currentpopup.classList.remove("show");
  }

}

