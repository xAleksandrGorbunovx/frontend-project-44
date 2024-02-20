import generateRandomInteger from '../generateRandomInteger.js';
import logicGame, { numberOfRounds } from '../logicGame.js';

// Function to calculate the greatest common divisor
const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};
const gcdGame = () => {
  const taskForGame = 'Find the greatest common divisor of given numbers.';
  const questionNumberOrExpression = [];
  const correctAnswer = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number1 = generateRandomInteger();
    const number2 = generateRandomInteger();
    questionNumberOrExpression[i] = ` ${number1} ${number2}`;
    correctAnswer[i] = (gcd(number2, number1)).toString();
  }
  return logicGame(questionNumberOrExpression, correctAnswer, taskForGame);
};

export default gcdGame;
