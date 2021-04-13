var cate="";
var nbq=1;
var name1="";
var test = false
var checkboxes = $(".check input");
var count = 0;

function test(va){
    cate=va;
    alert (cate);
}

var categorys = ["Movies","Pokemon","Singer Name"];



function show() {
    name1= document.getElementById("user").value;
    $(".user").hide();
    var x = document.getElementById("cat");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}
function showQuestion(){
    $(".cat").hide();
    $("#titel").hide();
    $("#image").hide();
    var x = document.getElementById("question1");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
}
function showQuestion1(){
    $(".cat").hide();
    $("#titel").hide();
    $("#image").hide();
    var x = document.getElementById("question11");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
}
function showQuestion2(){
    $(".cat").hide();
    $("#titel").hide();
    $("#image").hide();
    var x = document.getElementById("question12");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
}
function validate() {
        for(var i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].value === "right" && checkboxes[i].checked === true) {
              $(".green").css("color","green");
              count+=20;
            }
            else if (checkboxes[i].value === "wrong" && checkboxes[i].checked === true){
                $(".red").css("color","red");
            }
        }
    }
    
var movies = [$("#question1"),$("#question2"),$("#question3"),$("#question4"),$("#question5")];
var questions = ["question1","question2","question3","question4","question5"];
var pokemons = [$("#question11"),$("#question21"),$("#question31"),$("#question41"),$("#question51")];
var pokeQuestions = ["question11","question21","question31","question41","question51"];
var singers = [$("#question12"),$("#question22"),$("#question32"),$("#question42"),$("#question52")]
var singerQuestions = ["question12","question22","question32","question42","question52"];
var counter = 0;

function nextQuestion(){    
    for(var i=0; i<=checkboxes.length-1; i++){
      if(checkboxes[i].checked === true){ 
        $(".red").css("color","black");
        $(".green").css("color","black"); 
       test = true
       checkboxes[i].checked = false
       movies[counter].hide();
        counter ++ ;  
        var x = document.getElementById(questions[counter]);
        if (x.style.display === "none"){
        x.style.display = "block";
    }
   
    } 
    }  
     if(!test){
         alert("Please check before clicking Next !!!")
        }
        test = false
}
function nextQuestion1(){    
    for(var i=0; i<=checkboxes.length-1; i++){
      if(checkboxes[i].checked === true){ 
        $(".red").css("color","black");
        $(".green").css("color","black"); 
       test = true
       checkboxes[i].checked = false
       pokemons[counter].hide();
        counter ++ ;  
        var x = document.getElementById(pokeQuestions[counter]);
        if (x.style.display === "none"){
        x.style.display = "block";
    }
   
    } 
    }  
     if(!test){
         alert("Please select an answer and check before clicking Next !!!")
        }
        test = false
}
function nextQuestion2(){    
    for(var i=0; i<=checkboxes.length-1; i++){
      if(checkboxes[i].checked === true){ 
        $(".red").css("color","black");
        $(".green").css("color","black"); 
       test = true
       checkboxes[i].checked = false
       singers[counter].hide();
        counter ++ ;  
        var x = document.getElementById(singerQuestions[counter]);
        if (x.style.display === "none"){
        x.style.display = "block";
    }
   
    } 
    }  
     if(!test){
         alert("Please check before clicking Next !!!")
        }
        test = false
}
function score(){
    $("body").innerHTML = "";
    var x = document.getElementById("score");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
    $(".allQuestions").html("").append("<h1>"+ name1+ " your score is " + count + " %" +"</h1>")
}
function score1(){
    $("body").innerHTML = "";
    var x = document.getElementById("score1");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
    $(".allPokemon").html("").append("<h1>"+ name1+ " your score is " + count + " %" +"</h1>")
}
function score2(){
    $("body").innerHTML = "";
    var x = document.getElementById("score2");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
    $(".allSinger").html("").append("<h1>"+ name1+ " your score is " + count + " %" +"</h1>")
}
function exit(){
    location.reload()
}