export const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 1000000);

  let randomString = randomNumber.toString();

  if (randomString.length < 7) {
    randomString = '0' + randomString;
  }

  return randomString;
};
