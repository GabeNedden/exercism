export const toRna = (dna) => {
  let newArr = [...dna]
  for (let letter of newArr) {
    if(letter !== "G" && letter !== "C" && letter !== "A" && letter !== "T"){
      return "Invalid RNA Sequence. System will self-destruct in 5...4...3...2..."
    }
  }
  return newArr.map(x => map[x]).join('')
}

const map = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
};