let scoreTable = [
  {size: 1, points: 10},
  {size: 5, points: 5},
  {size: 10, points: 1},
  {size: Infinity, points: 0}
];

export const score = (x, y) => {
  let dist = findDist(x, y) 
  return scoreTable.find(dart => dist <= dart.size).points
  };

export const findDist = (x, y) => Math.sqrt((x * x) + (y * y));