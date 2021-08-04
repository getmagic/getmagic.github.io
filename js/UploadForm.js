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
        } //end of (if arg1Array[length] != arg1)
      } //end of if x is empty
    }//end of if visible
  }//end of for loop
  if(res.valueOf() != "The following argument(s) must be filled out: "){
    alert(res);
  }
  else{ //if all the argumenets are filled out
    if ($(document.getElementById('no1')).is(":visible")){ //if we are on the first fieldsset
      var user = firebase.auth().currentUser;
      if (user) {
        moveNext(this);
      }
    }//end of first fieldset
    /*else if ($(document.getElementById('no2')).is(":visible")){ //if we are on the second fieldset
      var useryear=document.forms["myForm"]["Year-you-were-a-mentee"].value;
      if (useryear.length!=4){
        alert ("Please enter a valid year");
        return false;
      }
    }//end of second fieldset*/
  
    moveNext(this);
  
  } //end of else
});