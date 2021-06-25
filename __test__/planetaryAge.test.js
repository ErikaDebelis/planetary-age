import {Age} from '../src/js/planetaryAge.js'

describe('Age', () => {

  test('should create Age class object with corresponding parameters', () => {
    const mercuryAge = new Age("mercury", 25, 80);
    expect(mercuryAge.myPlanet).toEqual("mercury");
    expect(mercuryAge.myAge).toEqual(25);
    expect(mercuryAge.myLife).toEqual(80);
  });
  test('should create mercuryYearsOld prototype method to calcuate age on mercury', () => {
    const mercuryAge = new Age("mercury", 25, 80);
    expect(mercuryAge.mercuryYearsOld()).toEqual(104);
  })
  test('should create venusYearsOld prototype method to calcuate age on  venus', () => {
    const venusAge = new Age ("venus", 25, 80);
    expect(venusAge.venusYearsOld()).toEqual(40);
  })
  test('should create marsYearsOld prototype method to calcuate age on mars', () => {
    const marsAge = new Age ("mars", 25, 80);
    expect(marsAge.marsYearsOld()).toEqual(13);
  })
});