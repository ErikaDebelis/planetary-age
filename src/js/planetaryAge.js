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
  venusYearsOld() {
    this.myAge = Math.trunc(this.myAge/ 0.62);
    return this.myAge;
  }
  marsYearsOld() {
    this.myAge = Math.trunc(this.myAge/ 1.88);
    return this.myAge;
  }
  jupiterYearsOld() {
    this.myAge = Math.trunc(this.myAge/ 11.86);
    return this.myAge;
  }
}