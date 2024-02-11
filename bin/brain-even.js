#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {generateRandomInteger} from './generateRandomInteger.js';
import {yesNoAnswer} from './yes-no-answer.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i +=1) {
    let number = generateRandomInteger();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');

    if (yesNoAnswer(answer, number) === 'correct-continue') {
    }
};
console.log(`Congratulations, ${name}`);
