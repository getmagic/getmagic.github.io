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
document.getElementById('uploadProjForm').addEventListener('submit', submitForm);

function saveProject(fnameparam, lnameparam, yearparam, gradeparam, projdecparam, relationparam, projsumparam){
  var newUserRef = database.collection("Projects").doc(); //saves UID for later
  newUserRef.set({
    firstName: fnameparam,
    lastName: lnameparam,
    year: yearparam,
    gradeLevel: gradeparam,
    projectDescription: projdecparam,
    menteeMentorRelationship:relationparam,
    projectSummary: projsumparam,
  })
  return newUserRef.id; //returns generated UID
}

// Submit form
function submitForm(e){ //e stands for "event"
  //prevents the information from getting submitted through HTML. For example, if u use preventDefault whenever someone clicks a url, u are preventing a link from opening a different URL
  e.preventDefault();
  //show the fifth fieldset + change progressbar
  $('#no4').hide();
  $('#no5').show();
  $("#progressbar li").eq($("fieldset").index('#no5')).addClass("active");
  //console.log("Submit called");
  
  var fname = getInputVal('FirstName'); //getInputVal is a function defined by the user above
  var lname = getInputVal('LastName');
  var YearMentee = getInputVal('Year-When-you-Were-A-Mentee');
  var MenteeGrade= getInputVal('Grade-When-you-Were-A-Mentee');
  var ProjectDescription= getInputVal('projectdec');
  var MenteeMentorRelationship= getInputVal('menteedec');
  var ProjectSummary= getInputVal('projsummary');
  var InterviewLink= getInputVal('InterviewLink');
  var PresentationLink= getInputVal('PresentationLink');
  //var projecttype= getRadioVal( document.getElementById('uploadProjForm'), 'Type-of-Project' );
  //saves the attributes that all mentees need in the database
  //UserUID= saveProject(fname, lname, YearMentee, MenteeGrade, projecttype, ProjectDescription, MenteeMentorRelationship, ProjectSummary, InterviewLink, PresentationLink);
  UserUID= saveProject(fname, lname, YearMentee, MenteeGrade, ProjectDescription, MenteeMentorRelationship, ProjectSummary);
  
  //replace the word "Other" with the specified tags
  if (SelectedTags.includes("Other")){
    var indexOfOtherTag= SelectedTags.indexOf("Other");
    //at the specified index, remove one item (aka remove "Others" from the index)
    SelectedTags.splice(indexOfOtherTag, 1);
    //var othertags=document.getElementById("specifymore1").innerHTML;
    var othertags=getInputVal("specifymore1");
    console.log(othertags);
    SelectedTags.push(othertags);
  }
  saveDataToDatabase(UserUID, 'projectTags', SelectedTags);
  var whetherThereIsCodeToUpload=getRadioVal( document.getElementById('uploadProjForm'), 'Whether-You-Have-Code-To-Upload' );

  //if the user enters an interview (or presentation) link, then save it in the database.
  if (InterviewLink !=""){
    saveDataToDatabase(UserUID, 'interviewLink', InterviewLink);
  }
  if (PresentationLink !=""){
    saveDataToDatabase(UserUID, 'presentationLink', PresentationLink);
  }

  /*if (whetherThereIsCodeToUpload=="Yes"){ //if there is code to upload, then upload the "Languages Used"
    ArrayOfUsedLanguages= getCheckedBoxes('Languages-Used');
    if (ArrayOfUsedLanguages.includes("Other")){
      var indexOfOtherTag= ArrayOfUsedLanguages.indexOf("Other");
      //at the specified index, remove one item (aka remove "Others" from the index)
      ArrayOfUsedLanguages.splice(indexOfOtherTag, 1); 
      var othertags=document.getElementById("specifymore3").innerHTML;
      ArrayOfUsedLanguages.push(othertags)
  }
    saveDataToDatabase(UserUID, 'languagesUsed', ArrayOfUsedLanguages);
  }*/

  /*if (SelectedTags.includes("Software")){
    //add github info to the database
    var websiteongit= getRadioVal( document.getElementById('uploadProjForm'), "Whether-Project-Is-On-GitHub" );
    
      if (websiteongit=="Yes"){
        var menteeGithubLink= getInputVal('receivegithublink');
        saveDataToDatabase(UserUID, 'menteeGithubLink', menteeGithubLink)
      }
      saveDataToDatabase(UserUID, 'isWebsiteOnGit', websiteongit);

      //add checkBoxLang info to the database
      ArrayOfUsedLanguages= getCheckedBoxes('Languages-Used');
      if (ArrayOfUsedLanguages.includes("Other")){
        var indexOfOtherTag= ArrayOfUsedLanguages.indexOf("Other");
        //at the specified index, remove one item (aka remove "Others" from the index)
        ArrayOfUsedLanguages.splice(indexOfOtherTag, 1); 
        var othertags=document.getElementById("specifymore3").innerHTML;
        ArrayOfUsedLanguages.push(othertags)
      }
      saveDataToDatabase(UserUID, 'languagesUsed', ArrayOfUsedLanguages);

  }  

  if (SelectedTags.includes("Website")==false){
    var AdditionalDescription= getInputVal('Description-Of-NonWebsite-Project');
    saveDataToDatabase(UserUID, 'additionalDescription', AdditionalDescription);
  }*/

  if ((SelectedTags.includes("Website"))|| (SelectedTags.includes("Software"))){
     //add github info to the database
    var websiteongit= getRadioVal( document.getElementById('uploadProjForm'), "Whether-Project-Is-On-GitHub" );
    if (websiteongit=="Yes"){
        var menteeGithubLink= getInputVal('receivegithublink');
        saveDataToDatabase(UserUID, 'menteeGithubLink', menteeGithubLink)
    }
    saveDataToDatabase(UserUID, 'isWebsiteOnGit', websiteongit);
    if (SelectedTags.includes("Software")){
      //add checkBoxLang info to the database
      ArrayOfUsedLanguages= getCheckedBoxes('Languages-Used');
      if (ArrayOfUsedLanguages.includes("Other")){
        var indexOfOtherTag= ArrayOfUsedLanguages.indexOf("Other");
        //at the specified index, remove one item (aka remove "Others" from the index)
        ArrayOfUsedLanguages.splice(indexOfOtherTag, 1); 
        var othertags=document.getElementById("specifymore3").innerHTML;
        ArrayOfUsedLanguages.push(othertags)
      }
      saveDataToDatabase(UserUID, 'languagesUsed', ArrayOfUsedLanguages);
    }
    if (SelectedTags.includes("Website")==false){
      var AdditionalDescription= getInputVal('Description-Of-NonWebsite-Project');
      saveDataToDatabase(UserUID, 'additionalDescription', AdditionalDescription);
    }
  }



/*
  //saves attributes that are only present in mentees with software projects
  if (projecttype=="Software"){
    var softwaretype= getRadioVal( document.getElementById('uploadProjForm'), 'Type-of-Software' );
    if (softwaretype=="Other"){
      softwaretype=getInputVal('specifymore1')
    }
    saveDataToDatabase(UserUID, 'softwareType', softwaretype);

    if (softwaretype=="Website"){
      var websiteongit= getRadioVal( document.getElementById('uploadProjForm'), 'Website-Platform' );
      if (websiteongit=="No"){
        websiteongit=getInputVal('specifymore2');
      }
      else if (websiteongit=="Yes"){
        var menteeGithubLink= getInputVal('receivegithublink');
        saveDataToDatabase(UserUID, 'menteeGithubLink', menteeGithubLink)
      }
      saveDataToDatabase(UserUID, 'isWebsiteOnGit', websiteongit);
    }else{ //if the project is software but not a website, then save the user's extra description in the database
      var AdditionalDescription= getInputVal('Description-Of-NonWebsite-Project');
      saveDataToDatabase(UserUID, 'additionalDescription', AdditionalDescription);
    }
    //add languages used here
    ArrayOfUsedLanguages= getCheckedBoxes('Languages-Used');
    saveDataToDatabase(UserUID, 'languagesUsed', ArrayOfUsedLanguages);

  } //end of "if software"
  else{ //if the projectType is not a software (aka it is a hardware), then save the user's additionaldescription
    var AdditionalDescription= getInputVal('Description-Of-NonWebsite-Project');
    saveDataToDatabase(UserUID, 'additionalDescription', AdditionalDescription);
  }*/

  //after uploading all Projects, save photos/codes into the storage + link it to firestore
  callDatatoStorage('onethumbnailimage', 'thumbnail', 'Photo_Thumbnail', 'photo');
  callDatatoStorage('fourexamplephotos', 'example', 'Photo_Example', 'photo');
  if (whetherThereIsCodeToUpload=="Yes"){ //if there is code to upload, then upload photos of the code + zipped code file
    callDatatoStorage('twocodeimages', 'code', 'Photo_Code', 'photo');
    callDatatoStorage('uploadcode', 'codeDownloadLink', 'Link_Code', null);
  }

  //Redirect this to a fieldset that verifies that upload was succesful: moveNext(this); 

}

function saveDataToDatabase(UID, nameofField, valueofField){
  if (valueofField != null || valueofField != ""|| valueofField != undefined) {
    database.collection("Projects").doc(UID).update({
               [nameofField]: valueofField
    }) //end of database/collection*/
  }
}

function getInputVal(id){
  return document.getElementById(id).value;
}

//sees which radio button has been checked
function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

// See which languages have been checked
function getCheckedBoxes(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = [];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
     // And stick the checked ones onto an array...
     if (checkboxes[i].checked) {
        if (checkboxes[i].value!= "OtherLanguage"){
          checkboxesChecked.push(checkboxes[i].value);
        }
        else{
          var userChosenLanguage= getInputVal('specifymore3');
          checkboxesChecked.push(userChosenLanguage);
        }
     }
  }
  // Return the array.Because of HTML/JS restrictions, you know it is not empty
  return checkboxesChecked;
}

// Call as
var checkedBoxes = getCheckedBoxes("mycheckboxes");


//If you are uploading 5 files, then it calls the addDataToStorage function 5 times so 5 different phots are uploaded to the storage and 5 different fields are added to mentee's document in firestore
function callDatatoStorage(ID, RenamedFile, BaseNameOfField, NameOfSubFolder){ //ID is the ID of the input file. RenamedFile is the name that u want to save the uploaded photo as in the storage. BaseNameField is the name of the field in the mentee's firestore database
  var noOfUploadedFiles= document.getElementById(ID).files.length;
  for (var index = 0; index < noOfUploadedFiles; index++) {
    addDataToStorage(ID, RenamedFile, BaseNameOfField, index, NameOfSubFolder);
  }
}

function addDataToStorage(ID, RenamedFile, BaseNameOfField, i, NameOfSubFolder){ // ID is the id of the input. RenamedFile is the name that u want to save the uploaded photo as in the storage. BaseNameOfField is the name that u want the field (that holds the download URL) in the firestore database. "i" is the file that we are looking at
    //create a new paragraph that will be appended under the fieldset. Every uploaded file will have its own paragraph. The paragraph tells the user their progress.
    var paragraph=document.createElement("P");
    paragraph.classList.add("fileUploadName");
    paragraph.style.color="gray";
    document.getElementById("no5").appendChild(paragraph);
    //start upload process
    var number=i+1;
    if (RenamedFile==null){ //if u did not want to specify how to rename the file, do not rename it (used only for code photos)
      var nameOfFile=document.getElementById(ID).files[i].name; //this is the name of uploaded file
      stringNeeded=UserUID+'/'+NameOfSubFolder+'/'+nameOfFile; //if you did not specify how you want to rename file, name it the way it was uploaded (used only for uploading code NOT images)
      var storageName=nameOfFile; //storageName is what will be saved as the nested field in the photoLinks and codeLinks section of firestore
    }
    else {
      if ((RenamedFile=="thumbnail") || (RenamedFile=="codeDownloadLink")){ //if you specified how u want to rename the file, rename it. Since there is only 1 thumbnail photo and one codeLink, you do not need to add a number after it.
        var storageName=RenamedFile; 
      }
      else{//if you specified how u want to rename the file, rename it
        var storageName=RenamedFile+String(number);
      }
      var stringNeeded = UserUID+'/'+NameOfSubFolder+'/'+storageName;
    }
    if (NameOfSubFolder==null){ //if you did not provide a sub folder, then assume that it should not be nested
      var stringNeeded = UserUID+'/'+storageName;
    }

    //do not rename the storage but rename the field in database
    if (RenamedFile=="codeDownloadLink"){
      var nameOfFile=document.getElementById(ID).files[i].name;
      var stringNeeded= UserUID+'/'+nameOfFile;
    }

    var storageRef = firebase.storage().ref(stringNeeded);
    var IDofimage= '#'+ID
    //var file_data = $(IDofimage).prop('files')[0]; //takes the first uploaded file (aka 0)
    var file_data = $(IDofimage).prop('files')[i];
    var uploadTask = storageRef.put(file_data);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
    (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //document.getElementById('UploadStatus').innerHTML='Upload of '+ document.getElementById(ID).files[i].name + ' is ' + progress + '% done';
    paragraph.innerHTML='Upload of '+ document.getElementById(ID).files[i].name + ' is ' + progress + '% done';
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        //document.getElementById('UploadStatus').innerHTML='Upload is paused';
        paragraph.innerHTML='Upload of '+ document.getElementById(ID).files[i].name + ' is paused';
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        //document.getElementById('UploadStatus').innerHTML='Upload is running';
        paragraph.innerHTML='Upload of '+ document.getElementById(ID).files[i].name + ' is running';
        break;
    }
    }, 
    (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          paragraph.innerHTML='<span style="color:red;">ERROR for ' + document.getElementById(ID).files[i].name + ': unauthorized access </span>';
          break;
        case 'storage/canceled':
          // User canceled the upload
          paragraph.innerHTML='<span style="color:red;">ERROR for ' + document.getElementById(ID).files[i].name + ': user canceled upload </span>';
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          paragraph.innerHTML='<span style="color:red;">ERROR for ' + document.getElementById(ID).files[i].name + ': unknown error occurred </span>';
          break;
        case 'storage/quota-exceeded':
          paragraph.innerHTML="<span style='color:red;'>ERROR for ' + document.getElementById(ID).files[i].name + ': Quota on MAGIC's free cloud storage bucket has been exceeded. Please contact irapramanick@getmagic.org for additional assistance.</span>";
          break;
        default:
          paragraph.innerHTML='<span style="color:red;">ERROR for ' + document.getElementById(ID).files[i].name + ': unknown error occurred. Please contact your mentor for additional assistance </span>';
      }
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      //console.log('File available at', downloadURL);
      //var NameOfField=BaseNameOfField+String(number); //NameOfField resembles stringNeeded now
      //if (NameOfSubFolder != null){
      var NameOfMap=NameOfSubFolder+'Links';
      //}
      //issue: when u have index.html, it assumes the '.' is separating a field and creates a nested field
      storageName = storageName.replace(/\./g,'-') //replace period with a hyphen
      //if these is a Subfolder name, then create a nested field; else, do not create a nested field.
      if (NameOfSubFolder!=null){
        let updateNested = database.collection('Projects').doc(UserUID).update({
        //'favorites.color': 'Red'
          [NameOfMap+'.'+storageName]: downloadURL
        });
      }
      else{
        let updateNested = database.collection('Projects').doc(UserUID).update({
        //'favorites.color': 'Red'
          [storageName]: downloadURL
        });
      }
      if (RenamedFile==null){ //if the uploaded file was not renamed
        paragraph.innerHTML=document.getElementById(ID).files[i].name + '<span style="color:#480000"> was succesfully uploaded and is available at</span> <a target="_blank" href="' + downloadURL + '">' + downloadURL + '</a>';
      }
      else{ //if the uploaded file was renamed, specify how it was renamed
        paragraph.innerHTML=document.getElementById(ID).files[i].name + ' <span style="color:#480000">was succesfully uploaded, renamed as</span> '+ storageName +'<span style="color:#480000">, and is available at</span> <a target="_blank" href="' + downloadURL + '">' + downloadURL + '</a>';
      }
    }); //end of uploadTask.snapshot.ref
  }); 
  var linebreak= document.createElement("br");
  document.getElementById("no5").appendChild(linebreak);
}



//Authentication
const auth=firebase.auth();
function signIn(){
  var email=document.getElementById("email");
  var password=document.getElementById("password"); 
  //Checks whether the entered email and password are valid Firebase accounts
  const promise=auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => 
    //alert(e.message)
    document.getElementById("errorMessage1").innerHTML=e.message);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      moveNext(this);
    } 
  });
}

function signOut(){
  auth.signOut();
  document.getElementById("email").value="";
  document.getElementById("password").value=""; 
}


auth.setPersistence(firebase.auth.Auth.Persistence.NONE) //the user will be signed out when they close the tab or refresh
  .then(() => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Signed in")
    /*// if the user is already signed in but get redirected to the log in page, then they are sent to the 
    if ($(document.getElementById('no1')).is(":visible")){
        $('#no1').hide();
        $('#no2').show();
    }*/
    
    // ...
  } else {
    console.log("Signed out!")
  }
});

/*------------------------------------------ upload project form javascript -----------------------------*/

var LanguagesArray=["HTML", "CSS", "Javascript", "Python", "Java", "C++", "pHp"]; //used in addCheckBoxLang and seeIfLanguageBoxisChecked functions

function moveNext(param){
  current_fs = $(param).parent(); //param is "this"
  next_fs = $(param).parent().next();
  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  current_fs.hide();
  //show the next fieldset
  next_fs.show();
}


$(".next").click(function(){
  //placeToAlert is the ID in which error messages will get displayed
  if ($(document.getElementById('no2')).is(":visible")){ //if we are on the first fieldsset, the place we will deliver an error message is __
    var placeToAlert="errorMessage2";
  }
  else if ($(document.getElementById('no3')).is(":visible")){ //if we are on the first fieldsset
    var placeToAlert="errorMessage3";
  }
  if ($(document.getElementById('no1')).is(":visible")){ //if we are on the first fieldsset
      var email=document.getElementById("email");
      var password=document.getElementById("password"); 
  //Checks whether the entered email and password are valid Firebase accounts
  const promise=auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => 
    //alert(e.message)
    document.getElementById("errorMessage1").innerHTML=e.message);
  //promise.catch(e => console.log("Error"));
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      moveNext(this);
    } 
    else{
      //promise.catch(e => alert(e.message));
      /*//JUST TO SEE ERROR MESSAGES
      moveNext(this);*/
    }
  });
  }//end of first fieldset
  else{
    /*if ($(document.getElementById('no4')).is(":visible")){ 
      moveNext(this);
    }//end of 4th fieldset
    else{*/
  var choices=document.getElementsByClassName("required");
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
          res = res.replace(/-/g, ' ');
        } //end of (if arg1Array[length] != arg1)
      } //end of if x is empty
    }//end of if visible
  }//end of for loop
  if ($(document.getElementById('no3')).is(":visible")){
  if (document.getElementById("checkBoxLang").style.display=="block"){
    returnedmessage= seeIfLanguageBoxisChecked();
    if (returnedmessage!=null){
      if (document.getElementById('otherlanguage').checked==false){ //only if other is not checked
        var res=res+ returnedmessage+ ', ';
      }
    }
  }
}
  if(res.valueOf() != "The following argument(s) must be filled out: "){
    //alert(res);
    res = res.slice(0, -2);  //remove the last 2 character from the string (aka remove the final space and final comma)
    document.getElementById(placeToAlert).innerHTML=res;
  }
  else{ //if all the argumenets are filled out
    document.getElementById(placeToAlert).innerHTML=""; 
    if ($(document.getElementById('no3')).is(":visible")){
      if (SelectedTags.length==0){
        document.getElementById(placeToAlert).innerHTML="Please select atleast one tag that describes your project";
        return; //leave function (don't let them advance to moveNext)
      }
      var interviewlink= document.getElementById("InterviewLink").value;
      var presentationlink= document.getElementById("PresentationLink").value;
      //assume that both links are valid unless otherwise shown
      var ValidityOfURL=true;
      var ValidityOfURL2=true;
      if (interviewlink!=""){ //as long as interviewlink is filled in, check if the URL is valid
        var ValidityOfURL= checkURL('InterviewLink'); 
        if (ValidityOfURL==true){ //if the URL is valid, ensure that no error messages are displayed
          document.getElementById("InterviewLinkValidation").innerHTML=""; //ensure no error messages show if the url is valid
        }
        else{
          document.getElementById("InterviewLinkValidation").innerHTML="<span style='color:red; font-size:14px;'>Please enter a valid youtube link or remove the Interview. Check the video above for more assistance </span>"
        }
      }

      if (presentationlink!=""){
        var ValidityOfURL2=checkURL('PresentationLink');
        if (ValidityOfURL2==true){ //if the URL is valid, ensure that no error messages are displayed
          document.getElementById("PresentationLinkValidation").innerHTML=""; //ensure no error messages show if the url is valid
        }
        else{
          document.getElementById("PresentationLinkValidation").innerHTML="<span style='color:red; font-size:14px;'>Please enter a valid youtube link or remove the Presentation. Check the video above for more assistance </span>"
        }
      }

      if (ValidityOfURL==false || ValidityOfURL2==false){ //if either URL is invalid, then stop the user from moving forward
        return; //leave function (don't let them advance to moveNext)
      }
      whetherToUploadCode= document.getElementById("YesCodeUpload").checked;
    } 
    //clear all error messages on the current fieldset before advancing
    document.getElementById("InterviewLinkValidation").innerHTML="";
    document.getElementById("PresentationLinkValidation").innerHTML="";
    moveNext(this);
    if ($(document.getElementById('no4')).is(":visible")){
      if (whetherToUploadCode==true){ //if the user says that they have code to upload, then make the "Upload Code" div on fieldset4 visible
        //the "upload Code" div
        document.getElementById("UploadCodeFiles").style.display="block";
        document.getElementById("uploadcode").required = true;
        //the "2 photos of code" div
        document.getElementById("Upload2CodePhotos").style.display="block";
        document.getElementById("twocodeimages").required=true;
      }
      else{
        document.getElementById("UploadCodeFiles").style.display="none";
        document.getElementById("uploadcode").required = false;
        //the "2 photos of code" div
        document.getElementById("Upload2CodePhotos").style.display="none";
        document.getElementById("twocodeimages").required=false;
      }
    }
  
  } //end of else
//}
}
});

$(".previous").click(function(){
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  current_fs.hide();
  previous_fs.show();
}); //end of previous click

//ensures the right amount of files are uploaded by user
function getFileInfo(fileID, container, maxlength){ //fileID is the ID of the file's input, "container" is the container where u write message
  var x = document.getElementById(fileID);
  var txt = "";
  if ('files' in x) {
    if (x.files.length == 0) {
      txt = "Select one or more files.";
    } 
    else {
      if (maxlength != null) {
        //for all containers other than "ExamplePhotosInfo", ensure that the exact number of files have been uploaded. If the file is ExamplePhotos, then you can upload less than the specified photos
        if (((container!= "ExamplePhotosInfo" && container!= "CodePhotsInfo") && x.files.length != maxlength) || ((container== "ExamplePhotosInfo" || container== "CodePhotsInfo")&& x.files.length > maxlength)){
          //x.files[0].slice(0,maxlength);
          txt="<span style='color:red; font-size:14px;'> You uploaded " + x.files.length + " file(s). Please upload "+ maxlength + " file(s) </span>";
          //document.getElementById(container).innerHTML = txt;
          var id_test="#" + fileID;
          $(id_test).val(''); //resets the file
          event.preventDefault();
        }
      }
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
  document.getElementById(container).innerHTML = txt;
}

//ensures the uploaded file for code is a zipped file
$('#uploadcode').bind("change", function(e){
    var file = (e.srcElement || e.target).files[0];
    console.log(file.type);
    if ((file.type!="application/zip") && (file.type!="application/x-zip-compressed")){
      $("#uploadcode").val(''); //resets the file
      document.getElementById("CodeFilesInfo").innerHTML="<span style='color:red; font-size:14px;'> Please upload a zipped file. Press the question mark for additional assistance.</span>";
      event.preventDefault();
    } 
});

function matchYoutubeUrl(url) {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/\?.+&v=))((\w|-){11})(?:\S+)?$/; //disallows "watch"
    var matches = url.match(p); //search the attached string for whatever is in "p"
    if(matches){ //if the URL has anything that is also inside p, return it (aka the URL is valid)
        return matches[1];
    }
    return false;
}

function checkURL(ID){
    var IDofElement='#'+ID;
    var url = $(IDofElement).val(); //add ID of url input
    var id = matchYoutubeUrl(url);
    if(id!=false){
        //alert('Correct URL');
        return true;
    }else{
       // alert('Incorrect URL');
       return false;
    }
}

//appends all the languages used to "checkBoxLang" div in uploadProj.html
function addCheckBoxLanguage() {
    for (var i=0; i<LanguagesArray.length; i++){
        var codeBlockLang=
        `<input type="checkbox" id="language`+ i + `" name="Languages-Used" value="` + LanguagesArray[i]+ `">
            <label class="labelForSelectOrInput" for="` + LanguagesArray[i]+ `">`+ LanguagesArray[i] + `</label><br>`;
        $("#checkBoxLangInterior").append(codeBlockLang);
    } 
    //adds an "other" option 
    $("#checkBoxLangInterior").append("<input type='checkbox' id='otherlanguage' name='Languages-Used' value='OtherLanguage'> <label class='labelForSelectOrInput' for='OtherLanguage'> Other</label><br>");
    //adds a text box where users can specify other languages used
    $("#checkBoxLang").append("<input class='required regularinput' id='specifymore3' style='display:none;padding:3px' type='text' name='Specify-Languages-Used' placeholder='Specify what languages were used'/>");
    $('#no3 input[type=checkbox]').change(function(){ //decides when the text option should show or not
      if (document.getElementById('otherlanguage').checked ===true){
        document.getElementById("specifymore3").style.display="block";
      }
      else{
        document.getElementById("specifymore3").style.display="none";
      }
    })
}//end of addCheckBoxLanguage

function addYearDropdown(){
  var date = new Date();
  var currentYear = date.getFullYear();
  currentYear= parseInt(currentYear);
  for (var i=2007; i<=currentYear; i++){
    var codeBlock=
    `<option value="` + i + `">` + i+ `</option>`;
    $("#Year-When-you-Were-A-Mentee").append(codeBlock);
  }
}

//checks whether a user has selected a language box from "languages used" before they can move on to the next section/
function seeIfLanguageBoxisChecked(){
  var messagetoreturn=null;
  var checkBoxChecked=false;
  for (var i=0; i<LanguagesArray.length; i++){
      var idtocheck="language"+String(i);
      var x = document.getElementById(idtocheck).checked;
        if (x == true) {
          checkBoxChecked=true;
        }
    }
    if (checkBoxChecked==false){ //if nothing has been selected
      var messagetoreturn="Languages Used";
    }
    else{
      //document.getElementById("demolang").innerHTML="Something selected";
      var messagetoreturn=null;
    }
    return messagetoreturn;
}

function wordLimit(IDofDesiredInput, IDofContainerForAlert, maxwords){
    var BACKSPACE   = 8;
    var DELETE      = 46;
    var valid_keys  = [BACKSPACE, DELETE];
    var textValue = document.getElementById(IDofDesiredInput).value;
    var words = textValue.split(/\s+/);
    if(words.length >= maxwords && valid_keys.indexOf(event.keyCode) == -1){ //if there are more than 100 words and if the key pressed is not backspace or delete, do not let the user continue typing in the box. 
          event.preventDefault();
    }
    document.getElementById(IDofContainerForAlert).innerHTML= maxwords- words.length;
}

/*append the "pop up" image code wherever pop ups need to be there*/
function addPopUps(){
  var ArrayOfPopUpImages=["ProjectDescription", "MenteeRelationship", "ProjectSummaryEx", "Thumbnail1", "ProjectPhotos", "CodePhotos", "ZippedCodeUpload"];
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

/*whenever someone clicks the "question" button, this displays the pop up image and ensures that multiple pop ups cannot be open at the same time for aesthetic reasons */
function displayPopUpImage(CurrentID) {
  var idofDiv="#"+CurrentID;
  var x= $(idofDiv).find("span"); //$(idofDiv)
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

/*tags on fieldset 3*/
var SelectedTags=[];
$( ".msform #no3 #FormTags input[type=button]" ).click(function() {
  var valueOfSelectedButton=$(this).attr('value');//get the value of the clicked button
  if (SelectedTags.includes(valueOfSelectedButton) == false) { //if the tag has not already been selected, then select it
    SelectedTags.push(valueOfSelectedButton)
    this.style.background="gray";
  }
  else{ //if the user has already selected the specified tag and clicks on it, then assume that the user does not want that specific tag anymore
    var indexOfButton= SelectedTags.indexOf(valueOfSelectedButton);
    //at the specified index, remove one item (aka remove the button from the index)
    SelectedTags.splice(indexOfButton, 1);
    this.style.background="#d9d9d9";
  }

  if (SelectedTags.includes("Software")!=true){
    document.getElementById("checkBoxLang").style.display="none";
  }
  //if the user selects website or software, then ask for github info. If the user selects software, then display "Languages used". If the suer selects website, then do not display the NonWebsiteDescription.
  if ((SelectedTags.includes("Website"))|| (SelectedTags.includes("Software"))){
    document.getElementById("whenWebSelected").style.display="block";
    if (SelectedTags.includes("Software")){
      document.getElementById("checkBoxLang").style.display="block";
    }
    else{document.getElementById("checkBoxLang").style.display="none";}

    if (SelectedTags.includes("Website")){
      document.getElementById("NonWebsiteDescription").style.display="none";
    }
    else{document.getElementById("NonWebsiteDescription").style.display="block";}
  }
  else{
    document.getElementById("whenWebSelected").style.display="none";
  }
  //when the user selects a "software" tag, ask if their project is on github and ask them for which languages they used
  /*
  if (SelectedTags.includes("Software")){
      document.getElementById("whenWebSelected").style.display="block";
      document.getElementById("checkBoxLang").style.display="block";
  }
  else{ document.getElementById("whenWebSelected").style.display="none"; document.getElementById("checkBoxLang").style.display="none";}

  //when the user selects a "website" tag, ask if their project is on github
  if (SelectedTags.includes("Website")){
      document.getElementById("NonWebsiteDescription").style.display="none";
      document.getElementById("whenWebSelected").style.display="block";
  }
  else{ document.getElementById("whenWebSelected").style.display="none"; document.getElementById("NonWebsiteDescription").style.display="block";}
*/

  //when Other is selected, open a text box for the user to enter additional tags for their project
  if (SelectedTags.includes("Other")){
    document.getElementById("specifymore1").style.display="block";
  }
  else{ document.getElementById("specifymore1").style.display="none";}

});


$('#no3 input[type=radio]').change(function(){
  /*if (document.getElementById("YesCodeUpload").checked==true) {
    document.getElementById("checkBoxLang").style.display="block";
  } else{document.getElementById("checkBoxLang").style.display="none";} */

  if (document.getElementById("whenWebSelected").style.display=="block"){
    if (document.getElementById("nogitweb").checked==true) {
      //Uncomment if you want the user to specify where their website is hosted if not github: document.getElementById("specifymore2").style.display="block";
      document.getElementById("receivegithublink").style.display="none";
    }
    else{
      //document.getElementById("specifymore2").style.display="none";
      document.getElementById("receivegithublink").style.display="block";
    }
  } 

})



