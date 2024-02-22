import generateRandomInteger from '../generateRandomInteger.js';
import logicGame, { numberOfRounds } from '../logicGame.js';

// A function of replacing a random array element with a string element with dots
const replaceRandomElement = (arr, numberOfElements) => {
  const randomIndex = Math.floor(Math.random() * numberOfElements);
  const numberHiddenFromUser = arr[randomIndex];
  arr[randomIndex] = ('..');
  console.log(numberHiddenFromUser);
  console.log(arr);
  
  return {
    numberHiddenFromUser1: numberHiddenFromUser,
    questionNumberOrExpression2: arr.join(' '),
  }
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
    const progressionStep = generateRandomInteger();
    // The recommended progression length is 10 numbers.
    const numberOfElements = 10;
    const { numberHiddenFromUser1, questionNumberOrExpression2 } = generateArithmeticProgression(firstNumberProgression, progressionStep, numberOfElements);
    correctAnswer[i] = numberHiddenFromUser1.toString();
    questionNumberOrExpression[i] = `${questionNumberOrExpression2}`;
  }
  return logicGame(questionNumberOrExpression, correctAnswer, taskForGame);
};

export default progressionGame;
