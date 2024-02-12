const yesNoAnswer = (string, number, name) => {
  if ((string !== 'no') & (string !== 'yes')) {
    console.log(`'${string}' is wrong answer ;(.\nLet's try again, ${name}!`);
    return 'wrong-stop';
  }
  if ((string === 'yes') & (number % 2 === 0)) {
    console.log('Correct!');
    return 'correct-continue';
  }
  if ((string === 'yes') & (number % 2 !== 0)) {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    return 'wrong-stop';
  }
  if ((string === 'no') & (number % 2 === 0)) {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    return 'wrong-stop';
  }
  if ((string === 'no') & (number % 2 !== 0)) {
    console.log('Correct!');
    return 'correct-continue';
  }
};
export default yesNoAnswer;
