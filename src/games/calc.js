import generateRandomInteger from '../generateRandomInteger.js';
import logicGame, { numberOfRounds } from '../logicGame.js';

const taskForGame = 'What is the result of the expression?';

const calcGame = () => {
  const questionNumberOrExpression = [];
  let answer = 0;
  const correctAnswer = [];
  const operators = ['+', '-', '*'];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number1 = generateRandomInteger();
    const number2 = generateRandomInteger();
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    questionNumberOrExpression[i] = `${number1} ${randomOperator} ${number2}`;
    switch (randomOperator) {
      case '+':
        answer = (number1 + number2);
        correctAnswer[i] = answer.toString();
        break;
      case '-':
        answer = (number1 - number2);
        correctAnswer[i] = answer.toString();
        break;
      case '*':
        answer = (number1 * number2);
        correctAnswer[i] = answer.toString();
        break;
    }
  }
  return logicGame(questionNumberOrExpression, correctAnswer, taskForGame);
};

export default calcGame;
