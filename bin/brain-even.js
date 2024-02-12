#!/usr/bin/env node
import readlineSync from 'readline-sync';
import generateRandomInteger from './generateRandomInteger.js';
import yesNoAnswer from './yes-no-answer.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswer = 0;
for (let i = 0; i < 3; i += 1) {
  const number = generateRandomInteger();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer:');
  if (yesNoAnswer(answer, number, name) === 'correct-continue') {
    correctAnswer += 1;
  } else {
    break;
  }
}
if (correctAnswer === 3) {
  console.log(`Congratulations, ${name}`);
}
