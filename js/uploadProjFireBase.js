// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAaXrelPA50Go8ba5qPPdH16sSltQcohX4",
    authDomain: "testform-720b2.firebaseapp.com",
    databaseURL: "https://testform-720b2.firebaseio.com",
    projectId: "testform-720b2",
    storageBucket: "testform-720b2.appspot.com",
    messagingSenderId: "575120093141",
    appId: "1:575120093141:web:c3483403341ce36744575c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();



function signIn(){
  var email=document.getElementById("email");
  var password=document.getElementById("password"); 
  //Checks whether the entered email and password are valid Firebase accounts
  const promise=auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message)); //gives error message if email or password is not valid
}


function signOut(){
  auth.signOut();
  document.getElementById("email").value="";
  document.getElementById("password").value=""; 
}


//This is called whenever the authorization state changes (ie whenever an user signs in or signs out)
auth.onAuthStateChanged(function(user){
  if (user){ //If a valid user is signed in, execute the following lines: 
    var email=user.email;
    //if the user is not currently on the link to upload their project, then they should be redirected there. 
    if (window.location.pathname != '/Users/skamboj2022/Downloads/Internship/newProject/getmagic.github.io/uploadProj.html'){
      window.location=('file:///Users/skamboj2022/Downloads/Internship/newProject/getmagic.github.io/uploadProj.html');
    }
  }
  else{ //if no user is signed in: 
    var userauthentication="false";
    //when submit is clicked, the action is set to localhost:800. It will only redirect to AuthenticateUser.html if submit is not clicked. 
    if (window.location != 'file:///Users/skamboj2022/Downloads/Internship/newProject/getmagic.github.io/AuthenticateUser.html' && document.getElementById("uploadProjForm").action != "http://localhost:8000/Analyzeform.php"){
      window.location=('file:///Users/skamboj2022/Downloads/Internship/newProject/getmagic.github.io/AuthenticateUser.html');
    }
  }
});

//if "uploadProj.html" window is refreshed or cancelled, the user will get signed out unless it is going to php file
//This procedure is called in "uploadProj.html". It is called with "false" when the form first loads, and it is called with "true" when the final submit button is pressed.
function checkifSubmitClicked(boolparam){
  var click_pressed=boolparam;
  console.log(click_pressed);
  //If "submit" is clicked, send the user to Analyzeform.php so that their document information can be downloaded.
  if (click_pressed ===true){
    document.getElementById("uploadProjForm").method = "post";
    document.getElementById("uploadProjForm").action = "http://localhost:8000/Analyzeform.php";
  }
  //If "submit" is not clicked, then the user will be signed out if they leave the uploadProj.html tab OR refresh uploadPROJ.html tab
  if (click_pressed !=true){
    window.onbeforeunload = function(event) {
      auth.signOut();
    }
  }
}




   

  








