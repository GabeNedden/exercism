export const reverseString = (string) => {
  let reversed = "";
  for (let char of string) {
    reversed = char + reversed;
  }
  return reversed;
};