export function formatTimeLeft(time: number) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);

  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds: number | string = time % 60;

  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

export const generateNumbers = (from: number, to: number, jump: number) => {
  const numbers = [];
  for (let i = from; i <= to; i += jump) {
    numbers.push(i);
  }
  return numbers;
};
