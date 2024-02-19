import generateRandomInteger from '../generateRandomInteger.js';
import logicGame, { numberOfRounds } from '../logicGame.js';

// A function of replacing a random array element with a string element with dots
const replaceRandomElement = (arr, numberOfElements) => {
  const randomIndex = Math.floor(Math.random() * numberOfElements);
  arr[randomIndex] = ('..');
  return arr;
};

// A function that generates a progression
const generateArithmeticProgression = (firstNumberProgression, progressionStep, numberOfElements) => {
  const progression = [firstNumberProgression];
  let currentNumber = firstNumberProgression;
  for (let i = 1; i < numberOfElements; i += 1) {
    currentNumber += progressionStep;
    progression.push(currentNumber);
  }
  // We apply 'replaceRandomElement' function to the resulting progression array to replace one element with points.
  return replaceRandomElement(progression, numberOfElements);
};

const progressionGame = () => {
  const taskForGame = 'What number is missing in the progression?';
  const questionNumberOrExpression = [];
  const correctAnswer = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumberProgression = generateRandomInteger();
    console.log(firstNumberProgression);
    const progressionStep = generateRandomInteger();
    console.log(progressionStep);
    // The recommended progression length is 10 numbers.
    const numberOfElements = 10;
    questionNumberOrExpression[i] = `${generateArithmeticProgression(firstNumberProgression, progressionStep, numberOfElements)}`;
    console.log(questionNumberOrExpression);
    correctAnswer[i] = progressionStep.toString();
    console.log(correctAnswer);
  }
  return logicGame(questionNumberOrExpression, correctAnswer, taskForGame);
};

export default progressionGame;
