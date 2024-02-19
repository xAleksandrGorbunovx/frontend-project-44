import generateRandomInteger from '../generateRandomInteger.js';
import logicGame, { numberOfRounds } from '../logicGame.js';

const evenGame = () => {
  const taskForGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (number) => number % 2 === 0;
  const questionNumberOrExpression = [];
  const correctAnswer = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    questionNumberOrExpression[i] = generateRandomInteger();
    correctAnswer[i] = isEven(questionNumberOrExpression[i]) ? 'yes' : 'no';
  }
  return logicGame(questionNumberOrExpression, correctAnswer, taskForGame);
};
export default evenGame;
