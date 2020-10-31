import { expect } from 'chai'
import Hydration from '../src/Hydration';
import HydrationRepository from '../src/HydrationRepository'

describe('HydrationRepository', () => {
  let hydrationRepository;
  const sampleHydrationData = [
    {
      "userID": 1,
      "date": "2018/06/15",
      "numOunces": 42
    },
    {
      "userID": 1,
      "date": "2018/06/16",
      "numOunces": 71
    },
    {
      "userID": 1,
      "date": "2018/06/17",
      "numOunces": 39
    },
    {
      "userID": 1,
      "date": "2018/06/18",
      "numOunces": 33
    },
    {
      "userID": 1,
      "date": "2018/06/19",
      "numOunces": 99
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

    it('should start with no hydration history', () => {
      expect(hydrationRepository.hydrationHistory).to.deep.equal([]);
    });

    it('should have a default oz average of 0', () => {
      expect(hydrationRepository.ouncesAverage).to.deep.equal(0);
    });

    it('should have a default oz record of []', () => {
      expect(hydrationRepository.ouncesRecord).to.deep.equal([]);
    });
  });

  describe('Start', () => {
    it('should have a start method that populates hydration history from raw data', () => {
      expect(hydrationRepository.hydrationHistory).to.deep.equal([]);

      hydrationRepository.start();

      expect(hydrationRepository.hydrationHistory.length).to.deep.equal(5);
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      hydrationRepository.start();
    });

    it('should create instances of hydration', () => {
      expect(hydrationRepository.hydrationHistory[0]).to.be.an.instanceof(Hydration);
    });

    it('should be able to create new instances of activities from a data object', () => {
      const history = hydrationRepository.hydrationHistory;
      expect(history.length).to.deep.equal(5);
      const newHydration = {
        "userID": 1,
        "date": "2018/06/20",
        "numOunces": 50
      };

      const result = hydrationRepository.createNewHydration(newHydration);

      expect(history[history.length - 1]).to.be.an.instanceof(Hydration);
      expect(history.length).to.deep.equal(6);
    });

    it('should create a record of all ounces consumed', () => {
      expect(hydrationRepository.ouncesRecord.length).to.deep.equal(5);
      expect(hydrationRepository.ouncesRecord[0]).to.deep.equal({ '2018/06/15': 42 });
      expect(hydrationRepository.ouncesRecord[1]).to.be.an('object');
    });

    it('should average daily ounces', () => {
      expect(hydrationRepository.ouncesAverage).to.deep.equal('56.8');
    });

    it('should return ounces consumed on a given day', () => {
      const result = hydrationRepository.findOunces("2018/06/16");

      expect(result).to.deep.equal(71);
    });

    it('should return all ounces consumed on a given week', () => {
      const result = hydrationRepository.findWeeklyOunces("2018/06/16");

      expect(result[0]).to.deep.equal({"2018/06/16": 71})
    });
  });
})
