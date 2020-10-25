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
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 7.3,
    "sleepQuality": 500
  },{
    "userID": 1,
    "date": "2019/06/14",
    "hoursSlept": 9.3,
    "sleepQuality": 1.4
  }];

  beforeEach(() => {
    sleepRepository = new SleepRepository(sampleSleepData);
    sleepRepository.createSleep();
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

  // describe('updateSleep', function() {
  //   beforeEach(() => {
  //     user.updateSleep("2019/06/15", 7, 4.7);
  //     user.updateSleep("2019/07/14", 6, 4);
  //     user.updateSleep("2019/08/04", 8, 5.4);
  //   })


    // it('should update user\'s quality of sleep record', function() {
    //   expect(user.sleepQualityRecord.length).to.equal(3);
    // });
    it('should update user\'s average hours of sleep', () => {
      sleepRepository.updateHoursSleptAverage();

      expect(sleepRepository.hoursSleptAverage).to.equal('7.6');
    });

    it('should update user\'s average quality of sleep', () => {
      sleepRepository.updateSleepQualityAverage();

      expect(sleepRepository.sleepQualityAverage).to.equal('500.5');
    });
  })

  // it('calculateAverageHoursThisWeek should calculate average sleep hours for week before given date', function() {
  //   user.sleepHoursRecord = [{date: "2019/09/22", hours: 9.6}, {date: "2019/09/21", hours: 8.2}, {date: "2019/09/20", hours: 9.9}, {date: "2019/09/19", hours: 4.2}, {date: "2019/09/18", hours: 9.5}, {date: "2019/09/17", hours: 7.8}, {date: "2019/09/16", hours: 10.2}, {date: "2019/09/15", hours: 5.7}, {date: "2019/09/14", hours: 8.8}, {date: "2019/09/13", hours: 4.6}, {date: "2019/09/12", hours: 5.3}];
  //   expect(user.calculateAverageHoursThisWeek('2019/09/21')).to.equal('7.9');
  // });
  // it('calculateAverageQualityThisWeek should calculate average quality of sleep for week before a given date', function() {
  //   user.sleepQualityRecord = [{date: "2019/09/22", quality: 9.6}, {date: "2019/09/21", quality: 8.2}, {date: "2019/09/20", quality: 9.9}, {date: "2019/09/19", quality: 4.2}, {date: "2019/09/18", quality: 9.5}, {date: "2019/09/17", quality: 7.8}, {date: "2019/09/16", quality: 10.2}, {date: "2019/09/15", quality: 5.7}, {date: "2019/09/14", quality: 8.8}, {date: "2019/09/13", quality: 4.6}, {date: "2019/09/12", quality: 5.3}];
  //   expect(user.calculateAverageQualityThisWeek('2019/09/22')).to.equal('8.5')
  // });
