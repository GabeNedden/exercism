export {Character, abilityModifier, baseHP, rollD6, removeSmallest, sum, noReroll};

const baseHP = 10;
const abilities = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]

const abilityModifier = (score) => {
  if(score < 3){
    throw 'Ability scores must be at least 3';
  } else if( score > 18){
    throw 'Ability scores can be at most 18';
  } else {
    return Math.floor((score - 10) / 2)
  }  
};

const rollD6 = (num) => {
  let n = 0;
  let rolls = [];
  while(n < num){
    rolls.push(Math.floor((Math.random() * 6) + 1))
    n++;
  }
  return rolls;
}

const removeSmallest = (arr) => {
  let smallest = Math.min(...arr);
  let index = arr.indexOf(smallest);
  arr.splice(index, 1)
  return arr;
}

const sum = (arr) => {
  return arr.reduce((acc, val) => acc + val, 0)
}


class Character {
  constructor() {
    this.setAbilities()
  }

  setAbilities(){
    const PRIV = Symbol();
    this[PRIV] = {};
    for (const ability of abilities) {
      this[PRIV][ability] = Character.rollAbility();
      Object.defineProperty(this, ability, {get: () => this[PRIV][ability] });
    }
  }

  static rollAbility() {
      return sum(removeSmallest(rollD6(4)));
    }
};