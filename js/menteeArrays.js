/*The 4 arrays that hold the mentee's information. To add more mentees, add their information into these arrays. menteeThumbnails is the photo that is displayed as a preview in the image carousel, the menteeNames and menteeGrades are the information located inside the "menteeInfoDiv' in codeBlock, and the menteeLinks is their website. */
      var menteeThumbnails= ["images/Aline'sProject/New Size9-02 at 7.19.12 AM.png" , "images/Evelyn'sProject/NewSizedEvelynProject.png", "images/Anjali/NewSizedSlime.png", "images/Jalyn/New-sized.png"];
      var menteeNames = ["Aline Garcia", "Evelyn", "Anjali Ulrich", "Jalyn Mayer" ];
      var menteeLinks = ["AlineProject.html", "EvelynProject.html", "AnjaliProject.html", "JalynProject.html"];
      var menteeGrades= ["Middle School", "High Schoool", "Middle School", "High School"];

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
        `<a id="website-link" href="` + menteeLinks[i] + `">
          <img class="mentee-photos" src="` + menteeThumbnails[i] + `" alt="` + menteeNames[i] + `'s Project">
        
           <div class="menteeInfoDiv">
          
            <h3 id="mentee-name" class="menteeInfo">` + menteeNames[i] + `</h3>
            <div id="mentee-grade" class="menteeInfo">` + menteeGrades[i] + `</div>
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
      //
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
      ` <a href="`+ menteeLinks[j] + `" class="col-md-4 single-blog lifestyle bottom_60 ">
      <img src="`+ menteeThumbnails[j] + `" alt="` + menteeNames[j] + `'s Project">
      <h2 class="title">`+ menteeNames[j] + `</h2>
      <span class="date">` + menteeGrades[j] + `</span>
      </a> `;
    paraNew.innerHTML = codeBlock2 ;
    divToAppend.appendChild(paraNew);
  }
}



                        