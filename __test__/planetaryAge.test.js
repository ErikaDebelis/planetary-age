import {Age} from '../src/js/planetaryAge.js'

describe('Age', () => {

  test('should create Age class object with corresponding parameters', () => {
    const mercuryAge = new Age("mercury", 25, 80);
    expect(mercuryAge.myPlanet).toEqual("mercury");
    expect(mercuryAge.myAge).toEqual(25);
    expect(mercuryAge.myLife).toEqual(80);
  });
});