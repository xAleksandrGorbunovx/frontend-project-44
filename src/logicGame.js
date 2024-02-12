import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

const logicGame = (round, taskForGame) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}`);
    console.log(taskForGame);
    for (let i = 0; i < numberOfRounds; i += 1) {
        const [questionNumber, correctAnswer] = round[i];
        console.log(`Question: ${questionNumber}`);
        const userAnswer = readlineSync.question ('Your answer: ');
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}`);
};

export default logicGame;