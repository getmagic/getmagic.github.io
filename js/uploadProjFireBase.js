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


/*function signUp(){
  var email=document.getElementById("email");
  var password=document.getElementById("password");
  const promise=auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message)); //gives error message if email or password is not valid
  
  
  //alert("Signed Up");
}*/




function signIn(){
  var email=document.getElementById("email");
  var password=document.getElementById("password"); 

  const promise=auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message)); //gives error message if email or password is not valid







  
  //redirectPage();

  //Take user to a different page

}

function signOut(){
  auth.signOut();
  //alert("Signed out");
  document.getElementById("email").value="";
 document.getElementById("password").value=""; 
}

/*firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // NONE= refresh and lose all data. SESSION= close window and lose all data
    // ...
    // New sign-in will be persisted 
    signOut(); //////Will sign user out
    //localStorage.setItem("WhetherUserAuthenticated", "false");
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  //when there is authentication session, then the user is not logged in when the file redirects to uploadProj.html
  //when there is authentication local (default), the user stays signed in even after they close the window. I combatted this at the bottom where I said that ONLY if we are on the uploadProj window, the user will get logged out
  */
  






  auth.onAuthStateChanged(function(user){
  if (user){
    var email=user.email;
   /* if (window.location.pathname != '/Users/skamboj2022/Downloads/Internship/newProject/getmagic.github.io/uploadProj.html'){
      window.location=('file:///Users/skamboj2022/Downloads/Internship/newProject/getmagic.github.io/uploadProj.html');
    }*/
    if (window.location.href != 'https://getmagic.github.io/uploadProj.html'){
      window.location=('https://getmagic.github.io/uploadProj.html');
    }
    
    //is signed in
  }






  else{
      var userauthentication="false";
     // localStorage.setItem("WhetherUserAuthenticated", userauthentication)

     //when submit is clicked, the action is set to localhost:800. It will only redirect to AuthenticateUser.html if submit is not clicked. 
     /*if (window.location != 'file:///Users/skamboj2022/Downloads/Internship/newProject/getmagic.github.io/AuthenticateUser.html' && document.getElementById("uploadProjForm").action != "http://localhost:8000/Analyzeform.php"){
            window.location=('file:///Users/skamboj2022/Downloads/Internship/newProject/getmagic.github.io/AuthenticateUser.html');
        }*/
    if (window.location != 'https://getmagic.github.io/AuthenticateUser.html' && document.getElementById("uploadProjForm").action != "http://localhost:8000/Analyzeform.php"){
            window.location=('https://getmagic.github.io/AuthenticateUser.html');
        }

  }


});

  


//if "uploadProj.html" window is refreshed or cancelled, the user will get signed out unless it is going to php file
function checkifSubmitClicked(boolparam){
 // if (window.location.pathname === '/Users/skamboj2022/Downloads/Internship/newProject/getmagic.github.io/uploadProj.html'){
    var click_pressed=boolparam;
    console.log(click_pressed);
    if (click_pressed ===true){
      document.getElementById("uploadProjForm").method = "post";
      document.getElementById("uploadProjForm").action = "http://localhost:8000/Analyzeform.php";
    }
    if (click_pressed !=true){
      window.onbeforeunload = function(event) {
        auth.signOut();
      }
  }
}




   

  








