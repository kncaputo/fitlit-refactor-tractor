import { expect } from 'chai';

import SleepRepository from '../src/SleepRepository';
import Sleep from '../src/Sleep';

describe('SleepRepository', () => {
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
    sleepRepository = new SleepRepository();
    // sleepRepository.logSleeps(sampleSleepData);
  });

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of user repository', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should create instances of sleep', function() {
    sleepRepository.createSleep(sampleSleepData, userID);

    expect(sleepRepository.sleepHistory[0]).to.be.an.instanceof(Sleep);
  });

  it('should hold an array of users', function() {
    expect(userRepository.users.length).to.equal(3);
  });


});
