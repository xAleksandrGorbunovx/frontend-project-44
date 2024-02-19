import generateRandomInteger from '../generateRandomInteger.js';
import logicGame, { numberOfRounds } from '../logicGame.js';

// function checks if a number is prime
function isPrime(randomNumber) {
  if (randomNumber <= 1) return 'no';
  if (randomNumber === 2) return 'yes';
  if (randomNumber % 2 === 0) return 'no';

  for (let i = 3; i * i <= randomNumber; i += 2) {
    if (randomNumber % i === 0) { return 'no'; }
  }
  return 'yes';
}

const primeGame = () => {
  const taskForGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionNumberOrExpression = [];
  const correctAnswer = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    questionNumberOrExpression[i] = generateRandomInteger();
    correctAnswer[i] = isPrime(questionNumberOrExpression[i]);
  }
  return logicGame(questionNumberOrExpression, correctAnswer, taskForGame);
};

export default primeGame;
