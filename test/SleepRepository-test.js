import { expect } from 'chai';

import SleepRepository from '../src/SleepRepository';
import Sleep from '../src/Sleep';

describe('SleepRepository', () => {
  let sleepRepository;
  const sampleSleepData = [{
    "userID": 1,
    "date": "2019/06/10",
    "hoursSlept": 5.4,
    "sleepQuality": 1000
  },{
    "userID": 1,
    "date": "2019/06/11",
    "hoursSlept": 7.8,
    "sleepQuality": 1000
  },{
    "userID": 1,
    "date": "2019/06/12",
    "hoursSlept": 8.0,
    "sleepQuality": 1000
  },{
    "userID": 1,
    "date": "2019/06/13",
    "hoursSlept": 6.7,
    "sleepQuality": 1000
  },{
    "userID": 1,
    "date": "2019/06/14",
    "hoursSlept": 6.1,
    "sleepQuality": 1000
  },{
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 7.3,
    "sleepQuality": 500
  },{
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 9.3,
    "sleepQuality": 1.4
  }];

  beforeEach(() => {
    sleepRepository = new SleepRepository(sampleSleepData);
  });

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of sleep repository', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should have a default hoursSleptAverage of 0', () => {
    expect(sleepRepository.hoursSleptAverage).to.equal(0);
  });

  it('should have a default sleepQualityAverage of 0', () => {
    expect(sleepRepository.sleepQualityAverage).to.equal(0);
  });

  it('should have a default sleepHoursRecord of []', () => {
    expect(sleepRepository.sleepHoursRecord).to.deep.equal([]);
  });

  it('should have a default sleepQualityRecord of []', () => {
    expect(sleepRepository.sleepQualityRecord).to.deep.equal([]);
  });

  it('should create instances of sleep', () => {
    sleepRepository.start();

    expect(sleepRepository.sleepHistory[0]).to.be.an.instanceof(Sleep);
  });

  it('should create a dated record of sleep hours', () => {
    sleepRepository.start();
    const result = {date: '2019/06/10', hours: 5.4 };

    expect(sleepRepository.sleepHoursRecord[0]).to.deep.equal(result);
  });

  it('should create a dated record of sleep quality', () => {
    sleepRepository.start();
    const result = {date: '2019/06/10', sleepQuality: 1000};

    expect(sleepRepository.sleepQualityRecord[0]).to.deep.equal(result);
  });

  it('should update user\'s average hours of sleep', () => {
    sleepRepository.start();

    expect(sleepRepository.hoursSleptAverage).to.equal('7.2');
  });

  it('should update user\'s average quality of sleep', () => {
    sleepRepository.start();

    expect(sleepRepository.sleepQualityAverage).to.equal('785.9');
  });

  describe('Start', () => {
    it('should have a start method that populates sleep history from raw data', () => {
      expect(sleepRepository.sleepHistory).to.deep.equal([]);

      sleepRepository.start();

      expect(sleepRepository.sleepHistory.length).to.deep.equal(7);
    });
  });

  describe('Methods', () => {
    it('should calculate the average sleep hours in a given week', () => {
      sleepRepository.start();

      expect(sleepRepository.averageWeeklySleepHours('2019/06/16')).to.equal('7.2');
    });

    it('should calculate the average sleep quality in a given week', () => {
      sleepRepository.start();

      expect(sleepRepository.averageWeeklySleepQuality('2019/06/16')).to.equal('785.9')
    });
  });
});
