import { expect } from 'chai'
import Activity from '../src/Activity';
import ActivityRepository from '../src/ActivityRepository'

describe.only('ActivityRepository', () => {
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
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
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

  describe('Methods', () => {
    it('should create instances of activities', () => {
      activityRepository.createActivities();

      expect(activityRepository.activityHistory[0]).to.be.an.instanceof(Activity);
    });

    it('should calculate the miles a user walked on a given day', () => {
      activityRepository.createActivities();
      const result = activityRepository.calculateMilesWalked('2019/06/15')

      expect(result).to.deep.equal('2.9');
    });

    it('should calculate the amount of time a user was active on a given day', () => {
      activityRepository.createActivities();
      const result = activityRepository.calculateActiveMinutes('2019/06/15');

      expect(result).to.deep.equal(140);
    });

    it('should calculate average active minutes on a given week', () => {
      activityRepository.createActivities();
      const result = activityRepository.averageWeeklyMinutesActive('2019/06/15');

      expect(result).to.deep.equal('39.7');
    });

    it('should indicate whether a user met their step goal on a given day', () => {
      activityRepository.createActivities();
      const result = activityRepository.reachStepGoal('2019/06/15');

      expect(result).to.deep.equal(false);
    });
  });
});
