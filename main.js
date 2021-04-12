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
var counter = 0;
var idss = ["a","b","c","d","e","f","j","k","l","m","n","o","p","q","r","s","t"];
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
         alert("please answer the question !!!")
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

function exit(){
    location.reload()
}