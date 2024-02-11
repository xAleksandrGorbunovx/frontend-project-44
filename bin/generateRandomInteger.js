const generateRandomInteger = () => {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Multiply by a range (e.g., 100) to get a random number within that range
    const randomInteger = Math.floor(randomNumber * 100);
    return randomInteger;
};
export {generateRandomInteger};