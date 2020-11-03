import { expect } from 'chai';

import User from '../src/model/User';
import SleepRepository from '../src/model/SleepRepository';
import ActivityRepository from '../src/model/ActivityRepository';
import HydrationRepository from '../src/model/HydrationRepository';

describe('User', () => {
  let user;
  const sampleUserData = {
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
  };
  const sampleSleepData = [{
    "userID": 1,
    "date": "2019/06/10",
    "hoursSlept": 5.4,
    "sleepQuality": 1000
  }
  ];
  const sampleActivityData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    }
  ];
  const sampleHydrationData = [
    {
      "userID": 1,
      "date": "2018/06/15",
      "numOunces": 42
    }
  ];

  beforeEach(() => {
    user = new User(sampleUserData, sampleSleepData, sampleActivityData, sampleHydrationData)
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(User).to.be.a('function');
    });

    it('should be an instance of user', () => {
      expect(user).to.be.an.instanceof(User);
    });

    it('should have an id', () => {
      expect(user.id).to.equal(1);
    });

    it('should have a name', () => {
      expect(user.name).to.equal('Luisa Hane');
    });

    it('should have an address', () => {
      expect(user.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
    });

    it('should have an email address', () => {
      expect(user.email).to.equal('Diana.Hayes1@hotmail.com');
    });

    it('should have a stride length', () => {
      expect(user.strideLength).to.equal(4.3);
    });

    it('should have a daily step goal', () => {
      expect(user.dailyStepGoal).to.equal(10000);
    });

    it('should have friends', () => {
      expect(user.friends).to.deep.equal([16, 4, 8])
    });

    it('should have a sleep repository property', () => {
      expect(user.sleepRepository).to.be.an.instanceof(SleepRepository);
    });

    it('should have a activity repository property', () => {
      expect(user.activityRepository).to.be.an.instanceof(ActivityRepository);
    });

    it('should have a hydration repository property', () => {
      expect(user.hydrationRepository).to.be.an.instanceof(HydrationRepository);
    });
  });

  describe('Methods', () => {
    it('should return the first name of the user', () => {
      expect(user.getFirstName()).to.equal('LUISA');
    });

    it('should find the first names of friends', () => {
      const user2 = new User({
        'id': 16,
        'name': 'Ben Nist',
      })
      const user3 = new User({
        'id': 4,
        'name': 'John Firth',
      })
      const user4 = new User({
        'id': 8,
        'name': 'Nick Adams',
      })
      const users = [user2, user3, user4];
      user.findFriendsNames(users);
      expect(user.friendsNames).to.deep.equal(['BEN', 'JOHN', 'NICK']);
    });


  });
});
