var firebaseConfig = {
    apiKey: "AIzaSyBvdKIGHpWc3JUkdCRNhAnQfsySDzMN84M",
    authDomain: "mentee-projects-website.firebaseapp.com",
    databaseURL: "https://mentee-projects-website.firebaseio.com",
    projectId: "mentee-projects-website",
    storageBucket: "mentee-projects-website.appspot.com",
    messagingSenderId: "251177809171",
    appId: "1:251177809171:web:cfb4e67e5b6a15eeeb56e6"
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
        var userTags=info.projectTags
        document.getElementById("typeToChange").innerHTML=userTags.join(", ");
        document.getElementById("yearToChange").innerHTML=info.year;
      
        //Add images in Portoflio Slider and call setTimerfunct()
        //if only one example photo has been uploaded, then remove the image carousel and make it a static image
        if ((doc.get('photoLinks.example1') != undefined) && (doc.get('photoLinks.example2') === undefined) && (doc.get('photoLinks.example3') === undefined) && (doc.get('photoLinks.example4') === undefined)){
          //make a static image of only example 1
          document.getElementById("divOfImgCarousel").style.display="none";
          document.getElementById("staticphoto1").src=info.photoLinks.example1;
          document.getElementById("divOfStaticPhoto").style.display="block";
        }
        //if only 2 images have been uploaded, then add each of those photos 2 times in the image carousel
        else if ((doc.get('photoLinks.example2') != undefined) && (doc.get('photoLinks.example2') != undefined) && (doc.get('photoLinks.example3') === undefined) && (doc.get('photoLinks.example4') === undefined)){
          document.getElementById("examplephoto1").src=info.photoLinks.example1;
          document.getElementById("examplephoto2").src=info.photoLinks.example2;
          document.getElementById("examplephoto3").src=info.photoLinks.example1;
          document.getElementById("examplephoto4").src=info.photoLinks.example2;
          setTimerFunct();
        }
        //if only 3 images have been uploaded, then repeat the first image at the end.
        else if ((doc.get('photoLinks.example2') != undefined) && (doc.get('photoLinks.example2') != undefined) && (doc.get('photoLinks.example3') != undefined) && (doc.get('photoLinks.example4') === undefined)){
          document.getElementById("examplephoto1").src=info.photoLinks.example1;
          document.getElementById("examplephoto2").src=info.photoLinks.example2;
          document.getElementById("examplephoto3").src=info.photoLinks.example3;
          document.getElementById("examplephoto4").src=info.photoLinks.example2;
          setTimerFunct();
        }
        //if all 4 photos have been uploaded, then add each photo to the image carousel
        else if ((doc.get('photoLinks.example2') != undefined) && (doc.get('photoLinks.example2') != undefined) && (doc.get('photoLinks.example3') != undefined) && (doc.get('photoLinks.example4') != undefined)){
          document.getElementById("examplephoto1").src=info.photoLinks.example1;
          document.getElementById("examplephoto2").src=info.photoLinks.example2;
          document.getElementById("examplephoto3").src=info.photoLinks.example3;
          document.getElementById("examplephoto4").src=info.photoLinks.example4;
          setTimerFunct();
        } 
        //if none of the above "if" statements get executed, then do not display any images/carousels
        else{
          document.getElementById("divOfImgCarousel").style.display="none";
        }

        document.getElementById("AboutToChange").innerHTML=info.projectDescription;
        document.getElementById("ReflecToChange").innerHTML=info.menteeMentorRelationship;
        
        //if only 1 code photo exists, then only display that
        if ((doc.get('photoLinks.code1') !=undefined) && (doc.get('photoLinks.code2') ===undefined)){
          document.getElementById("1codePhoto").src=info.photoLinks.code1;
          document.getElementById("DivOf2CodePhotos").style.display="none";
          document.getElementById("sampleCodeOfProject").innerHTML="Here is Sample Code of "+ info.firstName+ "'s Project."
          document.getElementById("1codePhoto").style.display="block";
        }
        //otherwise (if both code1 and code2 exist, then display them both)
        else if ((doc.get('photoLinks.code1') !=undefined) && (doc.get('photoLinks.code2') !=undefined)){
          document.getElementById("1codePhoto").style.display="none";
          document.getElementById("codeToChange1").src= info.photoLinks.code1;
          document.getElementById("codeToChange2").src= info.photoLinks.code2;
          document.getElementById("sampleCodeOfProject").innerHTML="Here is Sample Code of "+ info.firstName+ "'s Project."
          document.getElementById("DivOf2CodePhotos").style.display!="none";
        }
        else{
          document.getElementById("AnyCodePhotos").style.display="none";
        }

        
        //do not know how to call the Zipped file
        if (doc.get('codeDownloadLink')!=undefined){
          document.getElementById("LinkToMenteeZippedCode").href=info.codeDownloadLink;
          document.getElementById("DownloadCode").style.display="block";
        }

        if (doc.get('additionalDescription') !=  undefined){
          document.getElementById("additionalDescriptionOfProject").innerHTML="Here is more information about "+ info.firstName+ "'s Project.";
          document.getElementById("AdditionalDescription").innerHTML= info.additionalDescription;
          document.getElementById("DivOfAdditionalDescription").style.display="block";
        } else{ document.getElementById("DivOfAdditionalDescription").style.display="none";}

        if (doc.get('interviewLink') != undefined) { //if the field "interviewLink" exists, then that means that the mentee has either uploaded their own interview or a MAGIC board member updated the database afterwards. Therefore, we can display the interview. 
          document.getElementById("nameDecToChange2").innerHTML=info.firstName;
          document.getElementById("youtubeToChange").src=info.interviewLink;
          document.getElementById("linkForMenteeInterview").style.display="block";
        }
        else{ document.getElementById("linkForMenteeInterview").style.display="none";}

        if (doc.get('presentationLink') != undefined) { //if the field "presentationLink" exists, then that means that the mentee has either uploaded their own presentation or a MAGIC board member updated the database afterwards. Therefore, we can display the presentation. 
          document.getElementById("nameDecToChange3").innerHTML=info.firstName;
          document.getElementById("youtubeToChange2").src=info.presentationLink;
          document.getElementById("linkForMenteePresentation").style.display="block";
        }
        else{ document.getElementById("linkForMenteePresentation").style.display="none";}

      } else { //if no such mentee exists in the database
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
