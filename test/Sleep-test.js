import { expect } from 'chai';

import Sleep from '../src/Sleep';
import UserRepository from '../src/UserRepository';
import User from '../src/User';

describe.skip('Sleep', () => {
  let sleep;
  let user1;
  let user2;
  let userRepository;
  beforeEach(() => {
    user1 = new User({
      'id': 1,
      'name': 'Luisa Hane',
      'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      'email': 'Diana.Hayes1@hotmail.com',
      'strideLength': 4.3,
      'dailyStepGoal': 10000,
      'friends': [
        16,
        4,
        8
      ]
    });
    user2 = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    })
    userRepository = new UserRepository();
    userRepository.users.push(user1, user2);
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    }, userRepository);
    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/25",
      "hoursSlept": 7.3,
      "sleepQuality": 3.2
    }, userRepository);
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
