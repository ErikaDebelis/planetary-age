export class Age {
  constructor(myPlanet, myAge, myLife) {
    this.myPlanet = myPlanet;
    this.myAge = myAge;
    this.myLife = myLife;
  }
  mercuryYearsOld() {
    this.myAge = Math.trunc(this.myAge/ 0.24);
    return this.myAge;
  }
}