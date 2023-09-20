export const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100000000);

  let randomString = randomNumber.toString();

  if (randomString.length < 8) {
    randomString = "0" + randomString;
  }

  return randomString;
};
