import { expect } from 'chai';

import UserRepository from '../src/model/UserRepository';
import User from '../src/model/User';

describe('UserRepository', () => {
  let userRepository;
  const sampleUserData = [
    {
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
    },
    {
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
    },
    {
      "id": 3,
      "name": "Herminia Witting",
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "email": "Elwin.Tromp@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 15000,
      "friends": [
        19,
        11,
        42,
        33
      ]
    }];

  const sampleSleepData = [
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 6.1,
      "sleepQuality": 1000
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7.3,
      "sleepQuality": 500
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    }];

  const sampleActivityData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    }];

  const sampleHydrationData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 47
    }];

  beforeEach(() => {
    userRepository = new UserRepository(sampleUserData, sampleSleepData, sampleActivityData, sampleHydrationData);
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(UserRepository).to.be.a('function');
    });

    it('should be an instance of user repository', () => {
      expect(userRepository).to.be.an.instanceof(UserRepository);
    });

    it('should have a users property with a default of an empty array', () => {
      expect(userRepository.users).to.deep.equal([]);
    });

    it('should take in an argument of userData first', () => {
      expect(userRepository.rawUserData).to.equal(sampleUserData);
    });

    it('should take in an argument of sleepData second', () => {
      expect(userRepository.rawSleepData).to.equal(sampleSleepData);
    });

    it ('should take in an argument of activityData third', () => {
      expect(userRepository.rawActivityData).to.equal(sampleActivityData);
    });

    it('should take in an argument of hydrationData last', () => {
      expect(userRepository.rawHydrationData).to.equal(sampleHydrationData);
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      userRepository.start();
    })

    it('should filter sleep data by user', () => {
      const result = {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 6.1,
        "sleepQuality": 1000
      };

      expect(userRepository.filterUserSleepData(1)).to.deep.equal([result]);
    });

    it('should filter activity data by user', () => {
      const result = {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      };

      expect(userRepository.filterUserActivityData(1)).to.deep.equal([result]);
    });

    it('should filter hydration data by user', () => {
      const result = {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      };

      expect(userRepository.filterUserHydrationData(1)).to.deep.equal([result]);
    });

    it('should create instances of user', () => {
      expect(userRepository.users[0]).to.be.an.instanceof(User);
    });

    it('should hold an array of users', () => {
      expect(userRepository.users.length).to.equal(3);
    });

    it('should return user object when given a user id', () => {
      expect(userRepository.getUser(2)).to.equal(userRepository.users[1]);
    });

    it('should return average step goal for all users', () => {
      expect(userRepository.calculateAverageStepGoal()).to.equal(10000);
    });

    it('should return average sleep quality for all users', () => {
      userRepository.users[0].sleepRepository.sleepQualityAverage = 3.3;
      userRepository.users[1].sleepRepository.sleepQualityAverage = 5;
      userRepository.users[2].sleepRepository.sleepQualityAverage = 1;

      expect(userRepository.calculateAverageSleepQuality()).to.equal(3.1);
    });

    it('should have a method that calculates friends average ounces of water', () => {
      userRepository.users[0].hydrationRepository.ouncesRecord = [
        {"2019/06/15": 1},
        {"2019/06/15": 1},
        {"2019/06/16": 5}
      ]
      userRepository.users[1].hydrationRepository.ouncesRecord = [
        {"2019/06/15": 1},
        {"2019/06/15": 1},
        {"2019/06/16": 8}
      ]
      userRepository.users[2].hydrationRepository.ouncesRecord = [
        {"2019/06/15": 1},
        {"2019/06/15": 1},
        {"2019/06/16": 4}
      ]

      expect(userRepository.calculateAverageDailyWater("2019/06/16")).to.deep.equal(5)
    });

    it('should calculate all ounces drank by users when given a date', () => {
      expect(userRepository.calculateAllOunces("2019/06/15")).to.deep.equal(159);
    });

    it('should find the best sleepers', () => {
      const bestSleepers = [{
        "name": "Jarvis Considine",
        "averageWeekSleepQuality": "71.4"
      }];

      expect(userRepository.findBestSleepers("2019/06/15")).to.deep.equal(bestSleepers);
    });

    it('should find the longest sleepers', () => {
      const longestSleeper = userRepository.getLongestSleeper("2019/06/15")

      expect(longestSleeper.id).to.deep.equal(3);
    });

    it('should find the worst sleeper', () => {
      const worstSleeper = userRepository.getWorstSleeper("2019/06/15");

      expect(worstSleeper.id).to.deep.equal(2);
    });

    it('should calculate the average number of stairs for users', () => {
      expect(userRepository.calculateAverageStairs("2019/06/15")).to.deep.equal(20);
    });

    it('should calculate the average number of active minutes for users', () => {
      expect(userRepository.calculateAverageMinutesActive("2019/06/15")).to.deep.equal(131);
    });
  });
});
