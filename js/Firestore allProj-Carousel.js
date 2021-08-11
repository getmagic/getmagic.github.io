var firebaseConfig = {
    apiKey: "AIzaSyB8IiatLrHayjWMOF3_R_A4lpivKoqNIuU",
    authDomain: "test-database-contactform.firebaseapp.com",
    databaseURL: "https://test-database-contactform-default-rtdb.firebaseio.com",
    projectId: "test-database-contactform",
    storageBucket: "test-database-contactform.appspot.com",
    messagingSenderId: "78331044916",
    appId: "1:78331044916:web:a42b797bec4199c3d55661",
    measurementId: "G-6CSL08J95N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database= firebase.firestore();

/*---------------------------------------------allProjects.html page -----------------------------------------*/
//Appends info for both allProjects and imageCarousel
function getAndAppendInfo(data, websiteToUse){
  var html = "";
  //in each doc, it receives the mentee information from the fields and appends it appropriately to the allProjects page
  data.forEach(doc => {
      var info = doc.data(); //get the data from the individual doc (individual mentee initial)
      var userUID= doc.id;
      var FirstName=info.firstName;
      var LastName= info.lastName;
      var thumbnailLink= info.photoLinks.thumbnail;
      var GradeLevel=info.gradeLevel;
      if (GradeLevel=="9th" || GradeLevel=="10th" || GradeLevel=="11th" || GradeLevel=="12th"){
        GradeLevel="High School";
      }
      else{
        GradeLevel="Middle School";
      }
      //Append info to the appropriate place: either allProjects or imageCarousel on index.html
      if (websiteToUse=="allProjects") { //if u are refering to allProjects page, append it to the appropriate area
        //append the mentee info into the allProjects page
        var paraNew = document.createElement("div");
        paraNew.setAttribute("class", "AllProjects_Div");
        var codeBlock2 =
        ` <a class="` + userUID+ ` col-md-4 single-blog lifestyle bottom_60 ">
        <img class="` + userUID+ ` mentee-photos" src="`+ thumbnailLink + `" alt="` + FirstName + `'s Project">
        <h2 class="` + userUID+ ` title">`+ FirstName + ` `+ LastName + `</h2>
        <span class="` + userUID+ ` date">` + GradeLevel + `</span>
        </a> `;
        paraNew.innerHTML = codeBlock2 ;
        divToAppend.appendChild(paraNew); 
      }
      if (websiteToUse=="imageCarousel") {
        var divBlock = document.createElement("div");
        divBlock.className = "mySlides";
        var para = document.createElement("P");
        para.className = "madepara";
        var codeBlock =
        `<a class="NewA" >
          <img class="` + userUID+ ` mentee-photos" src="` + thumbnailLink + `" alt="` + FirstName + `'s Project">
          <div class="` + userUID+ ` menteeInfoDiv">
            <h3 class="` + userUID+ ` mentee-name menteeInfo">` + FirstName + ` `+ LastName + `</h3>
            <div class="` + userUID+ ` mentee-grade menteeInfo">` + GradeLevel + `</div>
          </div>
        </a> `;
        para.innerHTML = codeBlock;
        mainContainerCarousel.appendChild(divBlock);
        divBlock.appendChild(para);
      }
  });
}

//read through all mentees in the database and try to upload their info to allProjects
function allProjectsLoads(){
  database.collection('Projects')
    //.onSnapshot((querySnapshot) => {
      database.collection('Projects').get().then((snapshot)=>{ //send a snapshot of all the current docs in the "Projects" collection as a parameter. In this case, the docs are the automated UID for each mentee
        getAndAppendInfo(snapshot.docs, "allProjects");
    });
  //});
}

/*------------------------------------------end of allProjects.html ---------------------------------------*/

/*-------------------------CODE FOR IMAGE CAROUSEL IN INDEX.HTML UNDER STUDENT PROJECTS TAB ----------------*/
/*Adds a new div named mySlides, a new <p> named "madepara" and adds the "codeBlock" information inside "madepara. At the end, the "mySlides" div is appended into the mainContainer carousel and the "para" element is appended inside the "mySlides" div. */
  /* createNewMenteeDiv(), addDots(), and showSlides(slideIndex) are called in the body tag of index.html */
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

function imageCarouselLoads(){
  database.collection('Projects')
    //.onSnapshot((querySnapshot) => {
      database.collection('Projects').get().then((snapshot)=>{ //send a snapshot of all the current docs in the "Projects" collection as a parameter. In this case, the docs are the automated UID for each mentee
        getAndAppendInfo(snapshot.docs, "imageCarousel");
        showSlides(slideIndex);
    });
  //});
  database.collection("Projects").get().then(function(querySnapshot) {      
    //querySnapshot.size is number of documents in Projects (aka mentees)
    addDots(querySnapshot.size);
  });
}

  
//Adds the dots at the bottom of the carousel
function addDots(dotsToUpload) {
//function addDots() {
  for (var i=1; i<=dotsToUpload; i++){
    var paraDot2= document.createElement("P");
    var codeBlock2= `<span class="dot-carousel" onclick="currentSlide(` + i + `)"></span> `;
    paraDot2.innerHTML= codeBlock2;
    secondContainerDots.appendChild(paraDot2);
  }
}
  
  /*--------------------------------------end of code of image carousel on index.html --------------------*/

  /*--------------------------------------code of ProjectTemplate.html -------------------------------*/
  //when something on the <body> is clicked, run the code
 function seeifClick(){
    $( ".myBodClick" ).click(function( event ) {
      var x= $(event.target).attr('class'); //gets the class of the clicked function
      var y= x.split(" ")[0]; //only takes the first class element, which is the user's UID
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
    //adds the href attribute to all elements so that when something is clicked on allProjects or index.html carousel, they are redirected to the appropriate website
    for (const element of elements) {
      element.href = "ProjectTemplate.html" + strLink; //strLink sends the var to the Project.Template file
    }
}

function changeText(menteeUID){
    var docRef = database.collection('Projects').doc(menteeUID); //access the chosen mentee's data

    docRef.get().then((doc) => {
      if (doc.exists) {
        //console.log("Document data:", doc.data());
        var info = doc.data();
        var FullName=info.firstName + ' ' + info.lastName;
        if (doc.get('menteeWebsite') != undefined) { //if the field "menteeWebsite" exists, then that means that the mentee's code has already been forked and added to the database. Therefore, it is ready to be added to the website.
          document.getElementById("hrefToChange").href=info.menteeWebsite;
          document.getElementById("VisitWebsite").style.display="block";
        }
        document.getElementById("titleToReplace").innerHTML= "MAGIC " + FullName+ "'s Website";
        document.getElementById("headingToChange").innerHTML= FullName;
        document.getElementById("descriptionToChange").innerHTML= info.projectSummary;
        document.getElementById("entranceToChange").innerHTML= FullName;
        document.getElementById("nameToChange").innerHTML= FullName;
        document.getElementById("gradeToChange").innerHTML=info.gradeLevel;
        document.getElementById("typeToChange").innerHTML=info.projectType;
        document.getElementById("yearToChange").innerHTML=info.year;
      
        //Add images in Portoflio Slider and call setTimerfunct()
        document.getElementById("examplephoto1").src=info.photoLinks.example1;
        document.getElementById("examplephoto2").src=info.photoLinks.example2;
        document.getElementById("examplephoto3").src=info.photoLinks.example3;
        document.getElementById("examplephoto4").src=info.photoLinks.example4;
        setTimerFunct();

        document.getElementById("AboutToChange").innerHTML=info.projectDescription;
        document.getElementById("ReflecToChange").innerHTML=info.menteeMentorRelationship;
        //document.getElementById("nameDecToChange1").innerHTML=info.firstName;
        if (info.projectType=="Software" & info.softwareType=="Website"){ //if the mentee's project is a website, then display its code images
          document.getElementById("codeToChange1").src= info.photoLinks.code1;
          document.getElementById("codeToChange2").src= info.photoLinks.code2;
          document.getElementById("sampleCodeOfProject").innerHTML="Here is Sample Code of "+ info.firstName+ "'s Project."
          document.getElementById("DivForNonWebsite").style.display="none";
        }
        else{ //if the mentee project is hardware, app, or some other non-website project, hide the code photos
          document.getElementById("codeToChange1").style.display= "none";
          document.getElementById("codeToChange2").style.display="none";
          document.getElementById("sampleCodeOfProject").innerHTML="Here is more information about "+ info.firstName+ "'s Project."
          document.getElementById("ProjectDescriptionForNonWebsite").innerHTML= info.additionalDescription;
          document.getElementById("DivForNonWebsite").style.display="block";
        }
        document.getElementById("nameDecToChange2").innerHTML=info.firstName;
        document.getElementById("youtubeToChange").src=info.interviewLink;
        document.getElementById("nameDecToChange3").innerHTML=info.firstName;
        document.getElementById("youtubeToChange2").src=info.presentationLink;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
}

function setTimerFunct(){
    var slidesCarous = document.getElementsByClassName("mySlidesPortCarous");
    setInterval(function(){tryToAppendCarous.appendChild(slidesCarous[0]);}, 3000); //moves every 3 seconds
}

/*-------------------------------------------------------END OF CODE FOR PROJECTTEMPLATE.HTML ----------------------------------------*/
