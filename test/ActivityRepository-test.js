import { expect } from 'chai'
import Activity from '../src/model/Activity';
import ActivityRepository from '../src/model/ActivityRepository'

describe('ActivityRepository', () => {
  let activityRepository;

  const sampleActivityData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numSteps": 9872,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numSteps": 10121,
      "minutesActive": 148,
      "flightsOfStairs": 11
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numSteps": 942,
      "minutesActive": 138,
      "flightsOfStairs": 12
    }
  ]

  beforeEach(() => {
    activityRepository = new ActivityRepository(sampleActivityData, 4.3, 10000);
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(ActivityRepository).to.be.a('function');
    });

    it('should take in an argument of activityData first', () => {
      expect(activityRepository.rawActivityData).to.equal(sampleActivityData);
    });

    it('should take in an argument of a user\'s stride length', () => {
      expect(activityRepository.userStrideLength).to.deep.equal(4.3);
    });

    it('should take in an argument of a user\'s daily step goal', () => {
      expect(activityRepository.userStepGoal).to.deep.equal(10000);
    });

    it('should start with no total steps', () => {
      expect(activityRepository.totalStepsThisWeek).to.deep.equal(0);
    });

    it('should should have a default activityHistory of []', () => {
      expect(activityRepository.activityHistory).to.deep.equal([]);
    });

    it('should should have a default accomplishedDays of []', () => {
      expect(activityRepository.accomplishedDays).to.deep.equal([]);
    });

    it('should should have a default trendingStepDays of []', () => {
      expect(activityRepository.trendingStepDays).to.deep.equal([]);
    });

    it('should should have a default trendingStairsDays of []', () => {
      expect(activityRepository.trendingStairsDays).to.deep.equal([]);
    });
  });

  describe('Start', () => {
    it('should have a start method that populates activity history from raw data', () => {
      expect(activityRepository.activityHistory).to.deep.equal([]);

      activityRepository.start();

      expect(activityRepository.activityHistory.length).to.deep.equal(4);
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      activityRepository.start();
    });

    it('should create instances of activities from raw data', () => {
      expect(activityRepository.activityHistory[0]).to.be.an.instanceof(Activity);
    });

    it('should be able to create new instances of activities from a data object', () => {
      const act = activityRepository.activityHistory
      expect(act.length).to.deep.equal(4);
      const newActivity = {
        "userID": 1,
        "date": "2019/06/19",
        "numSteps": 800,
        "minutesActive": 90,
        "flightsOfStairs": 7
      }
      activityRepository.createNewActivity(newActivity);

      expect(act[act.length - 1]).to.be.an.instanceof(Activity);
      expect(act.length).to.deep.equal(5);
    });

    it('should calculate the miles a user walked on a given day', () => {
      const result = activityRepository.calculateMilesWalked('2019/06/15')

      expect(result).to.deep.equal('2.9');
    });

    it(`should return a string of 'N/A' if no data is available for miles walked on give day`, () => {
      const result = activityRepository.calculateMilesWalked('2019/06/14')

      expect(result).to.deep.equal('N/A');
    });

    it('should calculate the amount of time a user was active on a given day', () => {
      const result = activityRepository.calculateActiveMinutes('2019/06/15');

      expect(result).to.deep.equal(140);
    });

    it('should calculate average active minutes on a given week', () => {
      const result = activityRepository.averageWeeklyMinutesActive('2019/06/15');

      expect(result).to.deep.equal('80.6');
    });

    it('should indicate whether a user met their step goal on a given day', () => {
      const result = activityRepository.reachStepGoal('2019/06/16');

      expect(result).to.deep.equal(false);
    });

    it('should filter days where a user met their step goal', () => {
      expect(activityRepository.accomplishedDays[0]).to.deep.equal({date: "2019/06/17"});
    });

    it('should find all-time stair climbing record', () => {
      const result = activityRepository.findStairClimbingRecord();

      expect(result).to.deep.equal(16);
    });

    it('should find trending stair days', () => {
      const result = activityRepository.findTrendingStairsDays();

      expect(result).to.deep.equal('Your most recent positive climbing streak was 2019/06/16 - 2019/06/18!')
    });

    it('should find trending step days', () => {
      const result = activityRepository.findTrendingStepDays();

      expect(result).to.deep.equal('Your most recent positive step streak was 2019/06/15 - 2019/06/17!')
    });

    it('should find average steps this week when given a date', () => {
      const result = activityRepository.calculateAverageStepsThisWeek("2019/06/18");

      expect(result).to.deep.equal('3502');
    });

    it('should find average flights this week when given a date', () => {
      const result = activityRepository.calculateAverageStairsThisWeek("2019/06/18");

      expect(result).to.deep.equal(7);
    });

    it('should find steps for a given date', () => {
      const result = activityRepository.findSteps("2019/06/18");

      expect(result).to.deep.equal(942);
    });

    it('should find stairs for a given date', () => {
      const result = activityRepository.findStairs("2019/06/18");

      expect(result).to.deep.equal(144);
    });

    it('should find flights of stairs for a given date', () => {
      const result = activityRepository.findFlightsOfStairs("2019/06/18");

      expect(result).to.deep.equal('12.0');
    });
  });
});
