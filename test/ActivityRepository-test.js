import { expect } from 'chai'
import Activity from '../src/Activity';
import ActivityRepository from '../src/ActivityRepository'

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
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    }
  ]

  beforeEach(() => {
    activityRepository = new ActivityRepository(sampleActivityData, 4.3, 10000);
  })

  describe.only('Constructor', () => {
    it('should be a function', () => {
      expect(ActivityRepository).to.be.a('function');
    })

    it('should start with no total steps', () => {
      expect(activityRepository.totalStepsThisWeek).to.deep.equal(0);
    })

    it('should should have a default activityHistory of []', () => {
      expect(activityRepository.activityHistory).to.deep.equal([]);
    })

    it('should should have a default activityRecord of []', () => {
      expect(activityRepository.activityRecord).to.deep.equal([]);
    })

    it('should should have a default accomplishedDays of []', () => {
      expect(activityRepository.accomplishedDays).to.deep.equal([]);
    })

    it('should should have a default trendingStepDays of []', () => {
      expect(activityRepository.trendingStepDays).to.deep.equal([]);
    })

    it('should should have a default trendingStairsDays of []', () => {
      expect(activityRepository.trendingStairsDays).to.deep.equal([]);
    })
  })

  describe('updateActivities', () => {

  })
})
