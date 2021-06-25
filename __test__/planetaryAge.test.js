import {Age} from '../src/js/planetaryAge.js'

describe('Age', () => {

  test('should create Age class object with corresponding parameters', () => {
    const mercuryAge = new Age("mercury", 25);
    expect(mercuryAge.myPlanet).toEqual("mercury");
    expect(mercuryAge.myAge).toEqual(25);
  });
  test('should create mercuryYearsOld prototype method to calcuate age on mercury', () => {
    const mercuryAge = new Age("mercury", 25);
    expect(mercuryAge.mercuryYearsOld()).toEqual(104);
  })
  test('should create venusYearsOld prototype method to calcuate age on  venus', () => {
    const venusAge = new Age ("venus", 25);
    expect(venusAge.venusYearsOld()).toEqual(40);
  })
  test('should create marsYearsOld prototype method to calcuate age on mars', () => {
    const marsAge = new Age ("mars", 25);
    expect(marsAge.marsYearsOld()).toEqual(13);
  })
  test('should create jupiterYearsOld prototype method to calcuate age on jupiter', () => {
    const jupiterAge = new Age ("jupiter", 25);
    expect(jupiterAge.jupiterYearsOld()).toEqual(2);
  })
});
import {Life} from '../src/js/planetaryAge.js'

describe('Life', () => {

  test('should create Life class object with corresponding parameters', () => {
    const mercuryLife = new Life(80);
    expect(mercuryLife.myLifeExpectancy).toEqual(80);
  })
  test('should create mercuryYearsTillDeath prototype method to calculate how many years the user has left to live in the chosen planet years', () => {
    const mercuryLife = new Life(80);
    expect(mercuryLife.mercuryYearsTillDeath()).toEqual(333);
  })
});