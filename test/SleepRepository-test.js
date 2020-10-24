import { expect } from 'chai';

import SleepRepository from '../src/SleepRepository';
import Sleep from '../src/Sleep';

describe.only('SleepRepository', () => {
  let sleepRepository;
  let sampleSleepData = [{
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 6.1,
    "sleepQuality": 1000
  },{
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7.3,
    "sleepQuality": 500
  },{
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 9.3,
    "sleepQuality": 1.4
  }];

  beforeEach(() => {
    sleepRepository = new SleepRepository(sampleSleepData);
    // sleepRepository.logSleeps(sampleSleepData);
  });

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of sleep repository', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should have a default hoursSleptAverage of 0', function() {
    expect(sleepRepository.hoursSleptAverage).to.equal(0);
  });

  it('should have a default sleepQualityAverage of 0', function() {
    expect(sleepRepository.sleepQualityAverage).to.equal(0);
  });

  it('should have a default sleepHoursRecord of []', function() {
    expect(sleepRepository.sleepHoursRecord).to.deep.equal([]);
  });

  it('should have a default sleepQualityRecord of []', function() {
    expect(sleepRepository.sleepQualityRecord).to.deep.equal([]);
  });

  it('should create instances of sleep', function() {
    sleepRepository.createSleep();

    expect(sleepRepository.sleepHistory[0]).to.be.an.instanceof(Sleep);
  });


});
