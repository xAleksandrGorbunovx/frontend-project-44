import generateRandomInteger from '../generateRandomInteger.js';
import logicGame, { numberOfRounds } from '../logicGame.js';

// A function of replacing a random array element with a string element with dots
const replaceRandomElement = (array, numOfElements) => {
  const randomIndex = Math.floor(Math.random() * numOfElements);
  const numberHiddenFromUser = array[randomIndex];
  const copyArray = [...array];
  copyArray[randomIndex] = ('..');
  return {
    numTwoPoint: numberHiddenFromUser,
    NumOrExpression: copyArray.join(' '),
  };
};

// A function that generates a progression
const makeProgression = (firstNumProg, progStep, numOfElements) => {
  const progression = [firstNumProg];
  let currentNumber = firstNumProg;
  for (let i = 1; i < numOfElements; i += 1) {
    currentNumber += progStep;
    progression.push(currentNumber);
  }
  // We apply 'replaceRandomElement' function to the resulting
  // progression array to replace one element with points.
  return replaceRandomElement(progression, numOfElements);
};

const progressionGame = () => {
  const taskForGame = 'What number is missing in the progression?';
  const questionNumberOrExpression = [];
  const correctAnswer = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumProg = generateRandomInteger();
    const progStep = generateRandomInteger();
    // The recommended progression length is 10 numbers.
    const numOfElements = 10;
    const { numTwoPoint, NumOrExpression } = makeProgression(firstNumProg, progStep, numOfElements);
    correctAnswer[i] = numTwoPoint.toString();
    questionNumberOrExpression[i] = `${NumOrExpression}`;
  }
  return logicGame(questionNumberOrExpression, correctAnswer, taskForGame);
};

export default progressionGame;
