import generateRandomInteger from '../generateRandomInteger.js';
import logicGame, { numberOfRounds } from '../logicGame.js';

const taskForGame = 'What is the result of the expression?';
const generateRandomMathExpression = () => {
  let questionNumberOrExpression = '';
  let correctAnswer = 0;
  const operators = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const number1 = generateRandomInteger();
    const number2 = generateRandomInteger();
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    questionNumberOrExpression = `${number1} ${randomOperator} ${number2}`;
    switch (randomOperator) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
    }
  }
  return [questionNumberOrExpression, correctAnswer.toString()];
};

const calcGame = () => {
  const round = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    round[i] = generateRandomMathExpression();
  }
  return logicGame(round, taskForGame);
};

export default calcGame;
