import { expect } from 'chai'
import Hydration from '../src/Hydration';
import HydrationRepository from '../src/HydrationRepository'

describe.only('ActivityRepository', () => {
  let hydrationRepository;
  const sampleHydrationData = [
    {
      "userID": 1,
      "date": "2018/06/15",
      "numOunces": 42
    },
    {
      "userID": 2,
      "date": "2018/06/15",
      "numOunces": 71
    },
    {
      "userID": 3,
      "date": "2018/06/15",
      "numOunces": 39
    }
  ];

  beforeEach(() => {
    hydrationRepository = new HydrationRepository(sampleHydrationData);
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(HydrationRepository).to.be.a('function');
    });
    //
    // it('should take in an argument of activityData first', () => {
    //   expect(activityRepository.rawActivityData).to.equal(sampleActivityData);
    // });
    //
    // it('should take in an argument of a user\'s stride length', () => {
    //   expect(activityRepository.userStrideLength).to.deep.equal(4.3);
    // });
    //
    // it('should take in an argument of a user\'s daily step goal', () => {
    //   expect(activityRepository.userStepGoal).to.deep.equal(10000);
    // });
  });
})
