//Lines 2-13 are provided by Firebase
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBvdKIGHpWc3JUkdCRNhAnQfsySDzMN84M",
    authDomain: "mentee-projects-website.firebaseapp.com",
    databaseURL: "https://mentee-projects-website.firebaseio.com",
    projectId: "mentee-projects-website",
    storageBucket: "mentee-projects-website.appspot.com",
    messagingSenderId: "251177809171",
    appId: "1:251177809171:web:a39620b927054ab9eb56e6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();

function signIn(){
  var email=document.getElementById("email");
  var password=document.getElementById("password"); 
  const promise=auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message)); //gives error message if email or password is not valid
}

function signOut(){
  auth.signOut();
  document.getElementById("email").value="";
  document.getElementById("password").value=""; 
}

/*
auth.onAuthStateChanged(function(user){
  if (user){
    var email=user.email;
    if (window.location.href != 'https://getmagic.github.io/uploadProj.html'){
      window.location=('https://getmagic.github.io/uploadProj.html');
    }
  }
  else{
      var userauthentication="false";
    if (window.location != 'https://getmagic.github.io/AuthenticateUser.html' && document.getElementById("uploadProjForm").action != "http://localhost:8000/Analyzeform.php"){
            window.location=('https://getmagic.github.io/AuthenticateUser.html');
     }
  }
});

//if "uploadProj.html" window is refreshed or cancelled, the user will get signed out unless it is going to php file
function checkifSubmitClicked(boolparam){
    var click_pressed=boolparam;
    //console.log(click_pressed);
    if (click_pressed ===true){
      document.getElementById("uploadProjForm").method = "post";
      document.getElementById("uploadProjForm").action = "http://localhost:8000/Analyzeform.php";
    }
    if (click_pressed !=true){
      window.onbeforeunload = function(event) {
        auth.signOut();
     }
  }
}*/
