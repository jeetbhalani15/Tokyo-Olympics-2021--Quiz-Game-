const rs =require('readline-sync');
var readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.yellow.bold(" Welcome To Tokyo Olampics 2021-Quiz Game\n"));

var playerName = rs.question("Enter Your Name: ");
console.log(chalk.green('WELCOME'+ " " +playerName));
//GLOBAL VARIABLE DECLARATION
var score = 0;

  function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    console.log(chalk.green('\tCORRECT'));
    score = score+1;
  }
  else
  {
    console.log(chalk.red('\tWRONG'));
    score= score-1;
  }
  console.log(chalk.yellow('Your score is  :' + score));
}
console.log('\n----------------\n');
console.log('Lets Start!! A New Game \nInstructions\n1. Enter The Correct Options From The Given Options\n2. let go!!Good Luck');
console.log('\n----------------\n');
console.log('Current Score:' + score);

var questions =[
  {
    question: chalk.white(`
    Which of the following sports is making its debut at the Tokyo Olympics 2020?            
   a. Karate
   b. Swimming 100 m
   c. Race 50 km
   d. None of the above \n`),
    answer:"a"
  },
  {
    question:chalk.white(`
    What are the colours of the Olympics rings?           
   a. Blue 
   b. Black 
   c. Yellow
   d. All of the above \n`),
    answer:"d"
  },
  {
    question:chalk.white(`
     Which badminton player has failed to qualify for the Tokyo Olympics?
    a. Sai Praneeth
    b. PV Sindhu
    c. Saina Nehwal
    d. Chirag Shetty\n`),
    answer:"c"
  },
  {
    question:chalk.white(`
  Who is the first and only Indian female wrestler to win a medal at the Olympics?
    a. Vinesh Phogat
    b. Sakshi Malik
    c. Sonam Malik
    d. Anshu Malik\n`),
    answer:"b"
  },
  {
    question:chalk.white(`
    who won a GOLD MEDAL for INDIA in Javelin throw in olpampics 2021.
    a. Neeraj Chopra
    b. Ravi Kumar Dahiya
    c. Lovlina Borgohain
    d. Bajarang Punia\n`),
    answer:"a"
  }
];
//calling function
for(let i =0 ; i<questions.length;i++){
    play(questions[i].question,questions[i].answer);

}
console.log('Final score is  :' + score);  

console.log('\n----------------\n');
console.log('THANK YOU FOR PLAYING !');
console.log('YOUR SCORED : ' + score);
