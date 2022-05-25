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
