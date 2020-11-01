import { expect } from 'chai';

import Sleep from '../src/model/Sleep';

describe('Sleep', () => {
  let sleep;
  let user1;
  let user2;
  let userRepository;
  beforeEach(() => {
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    });

    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/25",
      "hoursSlept": 7.3,
      "sleepQuality": 3.2
    });
    sleep3 = new Sleep({
      "userID": 1,
      "date": "2019/07/17",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    }, userRepository);
  });
  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });
  it('should be an instance of activity', () => {
    expect(sleep1).to.be.an.instanceof(Sleep);
  });
  it('should hold a userId', () => {
    expect(sleep2.userId).to.equal(2);
  });
  it('should hold a date', () => {
    expect(sleep3.date).to.equal("2019/07/17");
  });
  it('should hold hours slept', () => {
    expect(sleep1.hoursSlept).to.equal(6.1);
  });
  it('should hold sleep quality', () => {
    expect(sleep3.sleepQuality).to.equal(1.4);
  });
  describe('sleep', () => {
    it('should update user\'s slept hours record', () => {
      expect(user1.sleepHoursRecord.length).to.equal(2);
    });
    it('should update user\'s slept hours record', () => {
      expect(user2.sleepQualityRecord.length).to.equal(1);
    });
    it('should update user\'s slept hours average', () => {
      expect(user1.hoursSleptAverage).to.equal('7.7');
    });
    it('should update user\'s sleep quality average', () => {
      expect(user1.sleepQualityAverage).to.equal('1.8');
    });
  })
});
