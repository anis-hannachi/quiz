var cate="";
var nbq=1;
var name1="";

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
    var checkboxes = $(".check input");
        for(var i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].value === "right" && checkboxes[i].checked === true) {
              $(".green").css("color","green");
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
    for(var i=0; i<=idss.length-1; i++){
      if($(".check #idss[i]").checked === true){
        movies[counter].hide();
        counter ++ ;
        var x = document.getElementById(questions[counter]);
        if (x.style.display === "none"){
        x.style.display = "block";
    }
    $(".red").css("color","black");
    $(".green").css("color","black");
    return true
    }
    else {
    alert("Check First");
    return false
    }  
    }   
}
// count = 0;
// function score(){
//     var x = document.getElementById("score");
//     if (x.style.display === "none"){
//         x.style.display = "block";
//         $("#score").append("<p class="msg"></p>);
//     }
//     if ($(".check input").value === "right"){
//         count +=20;
//     }
//     return name1 + " your score is " + count + " %" 
// }

function exit(){
    location.reload()
}