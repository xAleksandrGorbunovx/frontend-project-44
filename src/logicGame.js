import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

const logicGame = (questionNumberOrExpression, correctAnswer, taskForGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log(taskForGame);

  let counterOfCorrectAnswers = 0;
  let canPlay = true;
  let i = 0;
  while (canPlay && counterOfCorrectAnswers < numberOfRounds) {
    console.log(`Question: ${questionNumberOrExpression[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer[i]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'.\nLet's try again, ${name}!`);
      canPlay = false;
    } else {
      console.log('Correct!');
      counterOfCorrectAnswers += 1;
      i += 1;
    }
  }
  if (counterOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default logicGame;
