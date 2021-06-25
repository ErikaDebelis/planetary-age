import { TestScheduler } from "jest-cli";

export class Age {
  constructor(myPlanet, myAge) {
    this.myPlanet = myPlanet;
    this.myAge = myAge;
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
export class Life {
  constructor(myPlanetAge, myLife) {
    Age.myAge = myPlanetAge;
    this.myLifeExpectancy = myLife;
    this.myDeath = 0;
  }
  mercuryTotalLifeYears() {
    this.myLifeExpectancy = Math.trunc(this.myLifeExpectancy/ 0.24);
    return this.myLifeExpectancy;
  }
  venusTotalLifeYears() {
    this.myLifeExpectancy = Math.trunc(this.myLifeExpectancy/ 0.62);
    return this.myLifeExpectancy;
  }
  marsTotalLifeYears() {
    this.myLifeExpectancy = Math.trunc(this.myLifeExpectancy/ 1.88);
    return this.myLifeExpectancy;
  }
  jupiterTotalLifeYears() {
    this.myLifeExpectancy = Math.trunc(this.myLifeExpectancy/ 11.86);
    return this.myLifeExpectancy;
  }
  planetYearsTillDeath() {
    this.myDeath = this.myLifeExpectancy - Age.myAge;
    if (this.myLifeExpectancy > Age.myAge) {
      return this.myDeath;
    }
  }
}