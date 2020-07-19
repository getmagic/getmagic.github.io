/*The arrays that hold the mentee's information. To add more mentees, add their information into these arrays. menteeThumbnails is the photo that is displayed as a preview in the image carousel, the menteeNames and menteeGrades are the information located inside the "menteeInfoDiv' in codeBlock, and the menteeLinks is their website. */
var menteeThumbnails=[];
var menteeAbbrevs=[]; //ex. Aline Garcia would be "AlineG" in menteeAbbrevs
var menteeNames = ["Aline Garcia", "Evelyn Loza", "Anjali Ulrich", "Jalyn Mayer", "Leyla Rivera", "Siya Kamboj", "Kimberly Barillas" ];
var menteeGrades= ["Middle School", "High Schoool", "Middle School", "High School", "Middle School", "Middle School", "High School"];
var menteeYears = ["2017", "2015", "2018", "2018", "2017", "2017", "2020"];
var menteeDescriptions= [
  "This website includes two games: Guess My Number and Catch!", //Aline
  "This website explains what human trafficking is, the types of trafficking, where trafficking occurs, and solutions to the problem.", //Evelyn
  "This website tells people what supplies you need and how you make slime!", //Anjali
  "This website determines whether or not someone has a concusion or symptoms of a concusion.", //Jalyn
  "This website includes resources for Animal Shelters in the Bay Area and 2 games about the life of a dog living in a shelter.", //Leyla
  "This website teaches math, science, and vocabulary for 3 different difficulty levels: Beginner, Intermediate, and Advanced.", //Siya
  "This website consists of an information page about fornesic chemistry and a game with 10 riddles." //Kimberly
];
var menteeEntrances=[
  "Aline's hard work and dedication led to her making not one, but two games! Check out her website below.", //Aline
  "Evelyn's passion and determination led to her explaining many causes and effects of human trafficking. Check out her website below.", //Evelyn
  "Anjali's hard work and creativity led her to making this website. Check it out below!", //Anjali
  "Jalyn's diligence and persistence led her to make a website about determining whether you have a concusion. Check out her website below!", //Jalyn
  "Leyla's hard work and dedication led to her making two games and a resources page! Check out her website below.", //Leyla
  "Siya's hard work and dedication led to her making an educational website with multiple levels! Check out her website below.", //Siya
  "Kimberly's hard work and dedication led to her making an informative page and a game with riddles! Check out her website below." //Kimberly
];
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
    document.getElementById("entranceToChange").innerHTML= menteeEntrances[number2];
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

