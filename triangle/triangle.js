class Triangle {
  constructor(a, b, c) {
    if(a <= 0 || b <= 0 || c <= 0){
      throw new Error("Triangles sides must be greater than zero!");
    } else if(a + b < c || b + c < a || c + a < b){
      throw new Error("The sum of the lengths of any two sides must be greater than or equal to the length of the third side");
    }

    this.sides = [a, b, c]
    }

  equalSides() {
    this.sortedSides = this.sides.sort((a, b) => b - a);
    if(this.sortedSides[0] === this.sortedSides[2]){
      return 3;
    } else if (this.sortedSides[0] === this.sortedSides[1] || this.sortedSides[1] === this.sortedSides[2]){
      return 2;
    }
      return 1;
  }

  isEquilateral() {
    return this.equalSides === 3;
  }

  isIsosceles() {
    return this.equalSides === 2;
  }

  isScalene() {
    return this.equalSides === 1;
  }

  isDegenerate() {
    return this.a + this.b === this.c || this.b + this.c === this.a || this.c + this.a === this.b;
  }
}
