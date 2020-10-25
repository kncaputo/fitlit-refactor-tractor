import { expect } from 'chai'
import Activity from '../src/Activity';
import ActivityRepository from '../src/ActivityRepository'

describe('ActivityRepository', () => {
  let activityRepository;

  beforeEach(() => {
    activityRepository = new ActivityRepository()
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

  describe('Methods', () => {
    
  })
})
