import generateRandomInteger from '../generateRandomInteger.js';
import logicGame, { numberOfRounds } from '../logicGame.js';

const taskForGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const newRound = () => {
  const questionNumberOrExpression = generateRandomInteger();
  const correctAnswer = isEven(questionNumberOrExpression) ? 'yes' : 'no';
  return [questionNumberOrExpression, correctAnswer];
};

const evenGame = () => {
  const round = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    round[i] = newRound();
  }
  return logicGame(round, taskForGame);
};

export default evenGame;
