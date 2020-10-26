import { expect } from 'chai'
import Hydration from '../src/Hydration';
import HydrationRepository from '../src/HydrationRepository'

describe.only('HydrationRepository', () => {
  let hydrationRepository;
  const sampleHydrationData = [
    {
      "userID": 1,
      "date": "2018/06/15",
      "numOunces": 42
    },
    {
      "userID": 2,
      "date": "2018/06/15",
      "numOunces": 71
    },
    {
      "userID": 3,
      "date": "2018/06/15",
      "numOunces": 39
    }
  ];

  beforeEach(() => {
    hydrationRepository = new HydrationRepository(sampleHydrationData);
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(HydrationRepository).to.be.a('function');
    });

    it('should take in an argument of hydration data', () => {
      expect(hydrationRepository.rawHydrationData).to.deep.equal(sampleHydrationData);
    });

    it('should have a default oz average of 0', () => {
      expect(hydrationRepository.ouncesAverage).to.deep.equal(0);
    });

    it('should have a default oz record of []', () => {
      expect(hydrationRepository.ouncesRecord).to.deep.equal([]);
    });
  });

  describe('Methods', () => {

  });
})
