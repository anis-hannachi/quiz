function each(coll, func) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                func(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                func(coll[key], key); 
          } 
    } 
}
function map(coll,f){
	var acc=[];
	if(!Array.isArray(coll)){
		acc={};
	}
	each(coll,function(element,key){
		acc[key]=f(element,key);
	});
	return acc;
}
function filter(collection,predicate){
    var acc=[];
    if (!Array.isArray(collection)){
        acc = {};
    }
      each(collection,function(element,key){
          if(predicate(element,key)){
              if(Array.isArray(collection)){
                  acc.push(element)
              }
              else{
                  acc[key] = element ;
              }
          }
      });
    return acc;
  }
var rightAnswersMovies = {
    question 1 : ,
    question 2 : ,
    question 3 : ,
    question 4 : ,
    question 5 : 
}
var rightAnswersAnimals = {
    question 1 : ,
    question 2 : ,
    question 3 : ,
    question 4 : ,
    question 5 :  
}
var rightAnswersPokemon = {
    question 1 : ,
    question 2 : ,
    question 3 : ,
    question 4 : ,
    question 5 : 
}
var rightAnswersSingerName = {
    question 1 : ,
    question 2 : ,
    question 3 : ,
    question 4 : ,
    question 5 : 
}
var categorys = ["Movies","Animals","Pokemon","Singer Name"];
var userName = document.getElementById("#user");
var answer = document.getElementsByClassName(".answer")
function makeUser(userName){
    return {
        userName : userName 
    }
}
function getAnswer(answer){
    var answers = {};

}