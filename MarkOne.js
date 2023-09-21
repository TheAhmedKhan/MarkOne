var readlineSync=require('readline-sync');
var points=0;

//ASKING PLAYER NAME
console.log("Welcome To My Game, Do You Know Me");
Name=readlineSync.question("Tell me your name ");
console.log(Name);

//QUESTIONS TO BE ASKED---------
questionOne = {
  question: readlineSync.question("Who is my favorite superhero?"),
  answer: "Hulk",
}

questionTwo = {
  question: readlineSync.question("Which is my favorite sad song?"),
  answer: "Darkside",
}
questionThree = {
  question: readlineSync.question("Who is my favorite Actor?"),
  answer: "Amair Khan",
}

questionFour = {
  question: readlineSync.question("Which is my favorite bike?"),
  answer: "Harley Davidson",
}
questionFive = {
  question: readlineSync.question("Which is my favourite car?"),
  answer: "Mustang",
}

//-------------------------------------------------------------------

//PROCESSING
function QnA(){

  if (questionOne.question==questionOne.answer) {
    points++;

  }else{
    points=points;
  }
  if (questionTwo.question==questionTwo.answer) {
    points++;
  }else{
    points=points;
  }
  if (questionThree.question==questionThree.answer) {
    points++;

  }else{
    points=points;
  }
  if (questionFour.question==questionFour.answer) {
    points++;
  }else{
    points=points;
  }
  if (questionFive.question==questionFive.answer) {
    points++;
  }else{
    points=points;
  }
  console.log("Your score is : "+points);
//-------------------------------------------------------------------

  
  
}
//RUNNING FUNCTION
QnA();
